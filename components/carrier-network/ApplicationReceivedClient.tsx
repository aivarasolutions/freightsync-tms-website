'use client'

import { useEffect, useState } from 'react'
import { CalendarDays, CheckCircle2, ClipboardCheck, PhoneCall } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function ApplicationReceivedClient({ confirmed = false }: { confirmed?: boolean }) {
  const [receipt, setReceipt] = useState<{ reference?: string } | null>(confirmed ? {} : null)
  const [scheduleUrl, setScheduleUrl] = useState('')
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('fs-carrier-receipt')
      if (saved) setReceipt(JSON.parse(saved))
    } catch { setReceipt(confirmed ? {} : null) }
    setScheduleUrl(process.env.NEXT_PUBLIC_CARRIER_SCHEDULING_URL || '')
  }, [confirmed])
  return <main className="min-h-[70vh] bg-muted py-14 sm:py-20"><Container><div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-10">
    {receipt ? <><div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10"><CheckCircle2 className="h-8 w-8 text-teal" /></div><p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-cyan">Application received</p><h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Thanks for your interest in the FreightSync Carrier Network.</h1><p className="mt-4 leading-relaxed text-neutral">Our team will review the information you sent and determine how FreightSync may support your transportation business.{receipt.reference && <span className="mt-2 block font-semibold text-navy">Reference: {receipt.reference}</span>}</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">{[['Application review','Our team reviews the details you provided.'],['Service fit','We identify the services that may fit your operation.'],['Follow-up','A FreightSync team member contacts you.'],['Onboarding conversation','If approved, we schedule your onboarding call.'],['Account activation','After approval, agreements, and onboarding are completed, your FreightSync account is activated.']].map(([title, body], index)=><div key={title} className="flex gap-3 rounded-xl bg-muted p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-sm font-extrabold text-cyan">{index+1}</span><div><h2 className="font-bold text-navy">{title}</h2><p className="mt-1 text-sm text-neutral">{body}</p></div></div>)}</div>
    <div className="mt-8 rounded-xl border border-cyan/20 bg-cyan/5 p-5"><h2 className="flex items-center gap-2 font-bold text-navy"><CalendarDays className="h-5 w-5 text-cyan" />Want to talk sooner?</h2><p className="mt-2 text-sm leading-relaxed text-neutral">{scheduleUrl ? 'Choose a time to request a conversation with FreightSync.' : 'Call 281-310-1114 to arrange your FreightSync call. Online scheduling is not currently configured.'}</p><div className="mt-4"><a href={scheduleUrl || 'tel:2813101114'} target={scheduleUrl ? '_blank' : undefined} rel={scheduleUrl ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-teal px-5 py-3 font-semibold text-white transition hover:brightness-95"><PhoneCall className="h-4 w-4" />{scheduleUrl ? 'Schedule Your FreightSync Call' : 'Call to arrange a FreightSync call'}</a></div></div>
    <div className="mt-8 flex flex-wrap gap-3"><Button href="/" variant="outline">Return home</Button><Button href="/services">Explore services</Button></div></> : <><div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10"><ClipboardCheck className="h-7 w-7 text-cyan" /></div><p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-cyan">FreightSync Carrier Network</p><h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Start with an application.</h1><p className="mt-4 leading-relaxed text-neutral">This page only confirms an application after a successful submission. We don’t see a confirmed application for this visit.</p><div className="mt-7"><Button href="/get-started">Complete your application</Button></div></>}
  </div></Container></main>
}
