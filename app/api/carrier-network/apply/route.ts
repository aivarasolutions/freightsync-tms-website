import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { ApplicationError, validateApplication, portalPayload } from '@/lib/carrier-application'
import { LEADS_ENDPOINT } from '@/lib/carrier-network'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Reply = { status: number; body: Record<string, unknown> }
// Best-effort per-instance protection. The portal remains responsible for durable
// rate limits and cross-instance idempotency. No applicant PII is cached or logged.
const inFlight = new Map<string, { hash: string; expires: number; result: Promise<Reply> }>()
const attempts = new Map<string, { count: number; reset: number }>()
const MAX_BYTES = 32_768

function reply(result: Reply) {
  const response = NextResponse.json(result.body, { status: result.status, headers: { 'Cache-Control': 'no-store' } })
  if (result.status === 201 && result.body.ok === true) {
    response.cookies.set('fs-carrier-received', '1', {
      httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production',
      maxAge: 600, path: '/application-received',
    })
  }
  return response
}

async function readBody(request: NextRequest): Promise<unknown> {
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BYTES) throw new ApplicationError('Application is too large.')
  const reader = request.body?.getReader()
  if (!reader) throw new ApplicationError('Application is required.')
  const chunks: Uint8Array[] = []
  let size = 0
  try {
    for (;;) {
      const chunk = await reader.read()
      if (chunk.done) break
      size += chunk.value.length
      if (size > MAX_BYTES) {
        await reader.cancel()
        throw new ApplicationError('Application is too large.')
      }
      chunks.push(chunk.value)
    }
  } finally { reader.releaseLock() }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')) }
  catch { throw new ApplicationError('Invalid JSON application.') }
}

async function submit(payload: ReturnType<typeof portalPayload>, key: string): Promise<Reply> {
  try {
    const upstream = await fetch(LEADS_ENDPOINT, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': key },
      body: JSON.stringify(payload), cache: 'no-store', redirect: 'error',
      signal: AbortSignal.timeout(15_000),
    })
    const data: unknown = await upstream.json().catch(() => null)
    const result = data && typeof data === 'object' ? data as Record<string, unknown> : null
    if (!upstream.ok) {
      const fields = Array.isArray(result?.fields) ? result!.fields.filter(field => typeof field === 'string') : []
      if (upstream.status === 400 || upstream.status === 422) {
        return { status: 422, body: { error: 'The Owner Portal could not accept this application. Please check your information.', fields } }
      }
      if (upstream.status === 429) return { status: 429, body: { error: 'Too many applications. Please wait before trying again.' } }
      return { status: 502, body: { error: 'The Owner Portal is temporarily unavailable. Your application has not been confirmed. Please try again later.' } }
    }
    if (!result || result.success === false || result.ok === false || result.error) {
      return { status: 502, body: { error: 'The Owner Portal returned an unexpected response. Your application has not been confirmed. Contact FreightSync before submitting again.' } }
    }
    const reference = result.reference ?? result.id ?? result.leadId
    return {
      status: 201,
      body: { ok: true, ...(typeof reference === 'string' || typeof reference === 'number' ? { reference: String(reference) } : {}) },
    }
  } catch {
    // A timeout can occur after the portal saved a lead. Never claim it failed or
    // automatically retry; preserve the form and the original idempotency key.
    return { status: 502, body: { error: 'We could not confirm receipt from the Owner Portal. Your information is still in this form. Contact FreightSync to check receipt before submitting again.' } }
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin) {
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
    try {
      if (new URL(origin).host !== host) return reply({ status: 403, body: { error: 'Invalid application origin.' } })
    } catch { return reply({ status: 403, body: { error: 'Invalid application origin.' } }) }
  }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return reply({ status: 415, body: { error: 'Use an application/json request.' } })
  }
  const now = Date.now()
  for (const [key, value] of inFlight) if (value.expires < now) inFlight.delete(key)
  for (const [key, value] of attempts) if (value.reset < now) attempts.delete(key)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const ipHash = createHash('sha256').update(ip).digest('hex')
  const rate = attempts.get(ipHash) ?? { count: 0, reset: now + 60_000 }
  rate.count++
  attempts.set(ipHash, rate)
  if (rate.count > 12 || attempts.size > 10_000) {
    return reply({ status: 429, body: { error: 'Too many requests. Please wait a minute and try again.' } })
  }
  try {
    const application = validateApplication(await readBody(request))
    const payload = portalPayload(application)
    const rawKey = request.headers.get('idempotency-key')
    if (!rawKey || !/^[a-zA-Z0-9_-]{16,100}$/.test(rawKey)) {
      throw new ApplicationError('A valid submission key is required. Please refresh the form.')
    }
    const key = createHash('sha256').update(rawKey).digest('hex')
    const hash = createHash('sha256').update(JSON.stringify(payload)).digest('hex')
    const cached = inFlight.get(key)
    if (cached) {
      if (cached.hash !== hash) throw new ApplicationError('This submission key was already used. Please refresh the form.')
      return reply(await cached.result)
    }
    if (inFlight.size >= 1000) return reply({ status: 503, body: { error: 'Please try again later.' } })
    const result = submit(payload, rawKey)
    inFlight.set(key, { hash, expires: now + 600_000, result })
    const response = await result
    // Definitive upstream rejections may be retried. Ambiguous network errors
    // retain their key until expiry to avoid duplicate production applications.
    if (response.status === 422 || response.status === 429) inFlight.delete(key)
    return reply(response)
  } catch (error) {
    if (error instanceof ApplicationError) return reply({ status: 400, body: { error: error.message, fields: error.fields } })
    return reply({ status: 500, body: { error: 'Unable to process the application. Please try again later.' } })
  }
}
