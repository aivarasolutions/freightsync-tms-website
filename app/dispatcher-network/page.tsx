import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CarrierApplicationForm } from '@/components/carrier-network/CarrierApplicationForm'

export const metadata: Metadata = { title: 'Dispatcher Network | FreightSync', description: 'Apply to the FreightSync Dispatcher Network and share your experience, equipment coverage, and availability.' }

export default function DispatcherNetworkPage() {
  return <main><section className="bg-navy py-14 text-white sm:py-20"><Container><p className="text-sm font-bold uppercase tracking-[.16em] text-cyan">FreightSync Dispatcher Network</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">Dispatchers are part of the operation, too.</h1><p className="mt-5 max-w-2xl text-lg text-white/80">Share your carrier experience, equipment knowledge, load boards, and service region. Dispatcher applications and network access require FreightSync approval.</p><Button className="mt-7" href="#application-form" variant="teal">Join Dispatcher Network</Button></Container></section><section className="bg-muted py-12 sm:py-16"><Container><div className="mx-auto max-w-3xl"><CarrierApplicationForm initialRole="dispatcher" source="Dispatcher Network" /></div></Container></section></main>
}
