import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CarrierApplicationForm } from '@/components/carrier-network/CarrierApplicationForm'

export const metadata: Metadata = { title: 'Vehicle Owner Network | FreightSync', description: 'Connect your vehicle or fleet with FreightSync technology, operations support, and driver network consideration.' }

export default function VehicleOwnerNetworkPage() {
  return <main><section className="bg-navy py-14 text-white sm:py-20"><Container><p className="text-sm font-bold uppercase tracking-[.16em] text-cyan">FreightSync Vehicle Owner Network</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">You have a vehicle. Let’s organize what comes next.</h1><p className="mt-5 max-w-2xl text-lg text-white/80">Tell us about your vehicle, location, operating status, and the support you need. Driver and vehicle matching is reviewed by FreightSync; connections are never published automatically.</p><Button className="mt-7" href="#application-form" variant="teal">Get my vehicle started</Button></Container></section><section className="bg-muted py-12 sm:py-16"><Container><div className="mx-auto max-w-3xl"><CarrierApplicationForm initialRole="vehicle_owner" source="Vehicle Owner Network" /></div></Container></section></main>
}
