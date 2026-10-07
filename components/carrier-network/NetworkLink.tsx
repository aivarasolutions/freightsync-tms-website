'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

export function NetworkLink({ href, source, children, className, ...props }: {
  href: string
  source?: string
  children: ReactNode
  className?: string
  [key: string]: unknown
}) {
  const [trackedDestination, setTrackedDestination] = useState(href)

  useEffect(() => {
    const path = window.location.pathname || '/'
    const current = new URLSearchParams(window.location.search)
    let attribution: Record<string, string> = {}
    try {
      const existing = sessionStorage.getItem('fs-carrier-attribution')
      if (existing) attribution = JSON.parse(existing)
      else attribution = { entryPath: path, source: current.get('source') || '', ...Object.fromEntries(utmKeys.map((key) => [key, current.get(key) || ''])) }
      if (!existing) sessionStorage.setItem('fs-carrier-attribution', JSON.stringify(attribution))
    } catch { /* attribution is optional when storage is unavailable */ }
    const [target, query = ''] = href.split('?')
    const destination = new URLSearchParams(query)
    for (const key of utmKeys) {
      const value = current.get(key) || attribution[key]
      if (value && !destination.has(key)) destination.set(key, value)
    }
    if (!destination.has('source')) destination.set('source', current.get('source') || attribution.source || source || path.replaceAll('/', '-') || 'Direct')
    setTrackedDestination(destination.size ? `${target}?${destination.toString()}` : target)
  }, [href, source])

  return <Link href={trackedDestination} className={className} {...props}>{children}</Link>
}

export function trackedHref(href: string, source: string, currentSearch = '') {
  const [target, existing = ''] = href.split('?')
  const output = new URLSearchParams(existing)
  const incoming = new URLSearchParams(currentSearch)
  for (const key of utmKeys) if (incoming.has(key) && !output.has(key)) output.set(key, incoming.get(key)!)
  if (!output.has('source')) output.set('source', source)
  return `${target}?${output.toString()}`
}
