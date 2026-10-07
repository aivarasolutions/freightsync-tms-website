import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CarrierApplicationForm } from '@/components/carrier-network/CarrierApplicationForm'

export const metadata: Metadata = { title: 'Driver Network | FreightSync', description: 'Apply to the FreightSync Driver Network and be considered for opportunities with participating vehicle and fleet owners.' }

export default function DriverNetworkPage() {
  return <main><section className="bg-navy py-14 text-white sm:py-20"><Container><p className="text-sm font-bold uppercase tracking-[.16em] text-cyan">FreightSync Driver Network</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">Bring your experience. We’ll help you explore what’s next.</h1><p className="mt-5 max-w-2xl text-lg text-white/80">Drivers without vehicles can apply to be considered for opportunities with participating vehicle owners and fleets. All matching requires FreightSync review and approval.</p><Button className="mt-7" href="#application-form" variant="teal">Join Driver Network</Button></Container></section><section className="bg-muted py-12 sm:py-16"><Container><div className="mx-auto max-w-3xl"><CarrierApplicationForm initialRole="driver" source="Driver Network" /></div></Container></section></main>
}
