import { ArrowRight, BadgeDollarSign, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { services } from '@/lib/carrier-network'
import { NetworkLink } from './NetworkLink'

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
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan">{index === 0 ? 'Network tools' : index === 1 ? 'Dispatch support' : 'Fleet operations'}</span>
                <BadgeDollarSign className="h-6 w-6 text-cyan" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-navy">{service.name}</h3>
              <p className="mt-2 font-semibold text-cyan">{service.headline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.slice(0, 4).map(feature => <li key={feature} className="flex items-start gap-2 text-sm text-neutral"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{feature}</li>)}
              </ul>
              <p className="mt-5 text-lg font-extrabold text-navy">{service.price}</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral">{service.trial}</p>
              <NetworkLink href={`/get-started?plan=${service.id}`} source="Homepage" className="mt-5 inline-flex items-center gap-2 font-bold text-cyan hover:text-navy">{service.cta}<ArrowRight className="h-4 w-4" /></NetworkLink>
              <NetworkLink href={`/services/${service.slug}`} source="Homepage" className="mt-3 text-sm font-semibold text-neutral hover:text-cyan">View service details</NetworkLink>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-neutral">No setup fee. No cancellation fee. Cancel anytime. Dispatch and management percentage fees apply only to qualifying FreightSync-managed completed loads.</p>
      </Container>
    </section>
  )
}
