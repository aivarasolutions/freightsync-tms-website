import { ArrowRight, BadgeDollarSign, CheckCircle2 } from 'lucide-react'
import type { services } from '@/lib/carrier-network'
import { NetworkLink } from './NetworkLink'

type Service = (typeof services)[number]

const labels = ['Network tools', 'Dispatch support', 'Fleet operations']

export function ServicePlanCard({
  service,
  index,
  source,
  featureCount,
  tone = 'plain',
  primaryAction = 'apply',
}: {
  service: Service
  index: number
  source: string
  featureCount: number
  tone?: 'plain' | 'gradient'
  primaryAction?: 'apply' | 'details'
}) {
  const primaryHref = primaryAction === 'details' ? `/services/${service.slug}` : `/get-started?plan=${service.id}`
  const primaryLabel = primaryAction === 'details' ? 'Explore service' : service.cta
  const cardTone = tone === 'gradient'
    ? ['bg-gradient-to-br from-cyan/10 to-white', 'bg-gradient-to-br from-teal/10 to-white', 'bg-gradient-to-br from-royal/10 to-white'][index] ?? 'bg-white'
    : 'bg-white'

  return (
    <article className={`flex h-full min-w-0 flex-col rounded-2xl border border-border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:row-start-1 lg:row-end-11 lg:grid lg:grid-rows-[subgrid] ${cardTone}`}>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan">{labels[index] ?? 'Carrier services'}</span>
        <BadgeDollarSign className="h-6 w-6 text-cyan" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-2xl font-extrabold leading-tight text-navy">{service.name}</h3>
      <p className="mt-2 font-semibold leading-relaxed text-cyan">{service.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-neutral">{service.description}</p>
      <ul className="mt-4 space-y-2">
        {service.features.slice(0, featureCount).map(feature => (
          <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-neutral">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-base font-extrabold leading-6 text-navy">{service.price}</p>
      <p className="mt-1 text-xs leading-relaxed text-neutral">{service.trial}</p>
      <p className="mt-2 border-t border-border pt-3 text-xs leading-relaxed text-neutral">{service.feeScope}</p>
      <NetworkLink
        href={primaryHref}
        source={source}
        className="mt-5 inline-flex items-center gap-2 font-bold text-cyan hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
      >
        {primaryLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" />
      </NetworkLink>
      {primaryAction === 'apply' ? (
        <NetworkLink
          href={`/services/${service.slug}`}
          source={source}
          className="mt-3 text-sm font-semibold text-neutral hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          View service details
        </NetworkLink>
      ) : <span className="h-5" aria-hidden="true" />}
    </article>
  )
}
