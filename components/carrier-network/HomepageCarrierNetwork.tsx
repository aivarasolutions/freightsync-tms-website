import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { services } from '@/lib/carrier-network'
import { NetworkLink } from './NetworkLink'
import { ServicePlanCard } from './ServicePlanCard'

export function HomepageCarrierNetwork() {
  return (
    <section id="carrier-network" className="bg-muted py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">FreightSync Carrier Network</p>
            <h2 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl">Keep Your Vehicle Moving. Grow Your Transportation Business.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral">Whether you own a cargo van, Sprinter, box truck, hotshot, straight truck, or fleet, FreightSync gives you the technology, dispatch support, and network you need to operate more efficiently.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <NetworkLink href="/get-started" source="Homepage" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan to-teal px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">Get Started</NetworkLink>
            <NetworkLink href="/get-started?source=Homepage" source="Homepage" className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white">Join the Carrier Network</NetworkLink>
            <NetworkLink href="/services" source="Homepage" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-cyan transition hover:text-navy">View Services <ArrowRight className="ml-2 h-4 w-4" /></NetworkLink>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-[repeat(10,auto)] lg:gap-y-0">
          {services.map((service, index) => (
            <ServicePlanCard key={service.id} service={service} index={index} source="Homepage" featureCount={4} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-neutral">No setup fee. No cancellation fee. Cancel anytime. Dispatch and management percentage fees apply only to qualifying FreightSync-managed completed loads.</p>
      </Container>
    </section>
  )
}
