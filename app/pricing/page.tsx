import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FAQ } from '@/components/ui/FAQ'
import { Button } from '@/components/ui/Button'
import { Check, X } from 'lucide-react'
import { NetworkLink } from '@/components/carrier-network/NetworkLink'
import { networkFaqs, services } from '@/lib/carrier-network'

const faqItems = networkFaqs.map(item => ({ question: item.question, answer: item.answer }))

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Compare FreightSync Carrier Network pricing for Connect, Dispatch, and Fleet Management.',
}

const comparison = [
  ['TMS access', true, true, true],
  ['Driver profile', true, true, true],
  ['Vehicle profile', true, true, true],
  ['Document storage', true, true, true],
  ['Load tracking', true, true, true],
  ['Carrier Network access', true, true, true],
  ['Driver / vehicle matching opportunities', true, true, true],
  ['Dispatch support', false, true, true],
  ['Load searching', false, true, true],
  ['Rate negotiation assistance', false, true, true],
  ['Broker communication', false, true, true],
  ['Load coordination', false, true, true],
  ['BOL / POD management', false, true, true],
  ['Revenue tracking', true, true, true],
  ['Driver management', false, false, true],
  ['Vehicle management', false, false, true],
  ['Driver settlements', false, false, true],
  ['Owner settlements', false, false, true],
  ['Fleet reporting', false, false, true],
  ['Operational support', false, false, true],
]

export default function Pricing() {
  return (
    <>
      <section className="bg-navy py-14 text-white sm:py-20"><Container><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan">FreightSync Carrier Network</p><h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Clear pricing. The right level of support.</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">The $49 monthly subscription is waived for the first month. Applicable percentage fees remain in effect on qualifying managed loads.</p></div></Container></section>
      <section className="bg-muted py-12 sm:py-16"><Container><div className="grid gap-5 lg:grid-cols-3">{services.map((plan,index)=><article key={plan.id} className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${index===1?'border-cyan ring-1 ring-cyan/30':'border-border'}`}><p className="text-xs font-bold uppercase tracking-[.15em] text-cyan">{index===0?'Network tools':index===1?'Dispatch support':'Fleet operations'}</p><h2 className="mt-3 text-2xl font-extrabold text-navy">{plan.name}</h2><p className="mt-2 min-h-12 text-sm text-neutral">{plan.description}</p><p className="mt-5 text-xl font-extrabold leading-snug text-navy">{plan.price}</p><p className="mt-2 min-h-12 text-sm font-semibold text-teal">{plan.trial}</p><p className="mt-4 text-xs leading-relaxed text-neutral">{plan.feeScope}</p><ul className="mt-5 flex-1 space-y-2">{['No setup fee','No cancellation fee','Cancel anytime','FreightSync TMS access'].map(item=><li key={item} className="flex gap-2 text-sm text-neutral"><Check className="h-4 w-4 shrink-0 text-teal" />{item}</li>)}</ul>{plan.id==='fleet_management'&&<p className="mt-4 rounded-lg bg-muted p-3 text-sm font-semibold text-navy">Custom pricing available for larger fleets.</p>}<NetworkLink href={`/get-started?plan=${plan.id}`} source="Pricing" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan to-teal px-5 py-3 text-sm font-bold text-white transition hover:brightness-95">{plan.cta}</NetworkLink></article>)}</div><p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-neutral">The monthly $49 subscription is waived for the first month. If FreightSync provides dispatch or fleet management services during the trial month, applicable percentage-based fees may still apply. Dispatch fees apply only to completed loads FreightSync dispatches or directly manages; Fleet Management fees apply only to completed loads managed through FreightSync.</p></Container></section>
      <section className="bg-white py-12 sm:py-16"><Container><h2 className="mb-8 text-center text-3xl font-extrabold text-navy">Compare Carrier Network services</h2><div className="overflow-hidden rounded-xl border border-border"><div className="overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left"><thead><tr className="bg-navy text-white"><th className="sticky left-0 z-10 bg-navy px-4 py-4 text-sm">Feature</th>{services.map(item=><th key={item.id} className="px-4 py-4 text-sm">{item.name.replace('FreightSync ','FreightSync ')}</th>)}</tr></thead><tbody>{comparison.map(([feature,...values],index)=><tr key={feature as string} className={index%2?'bg-muted/60':'bg-white'}><th scope="row" className="sticky left-0 bg-inherit px-4 py-3 text-sm font-semibold text-navy">{feature}</th>{values.map((available,i)=><td key={i} className="px-4 py-3 text-center">{available?<Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />:<X className="mx-auto h-4 w-4 text-neutral/35" aria-label="Not included" />}</td>)}</tr>)}</tbody></table></div></div><p className="mt-3 text-xs text-neutral">Swipe horizontally to compare all services on smaller screens.</p></Container></section>
      <section className="bg-muted py-12 sm:py-16"><Container><div className="mx-auto max-w-3xl"><h2 className="mb-8 text-center text-3xl font-extrabold text-navy">Pricing questions</h2><FAQ items={faqItems} /></div></Container></section>
      <section className="bg-navy py-14 text-white"><Container><div className="mx-auto max-w-3xl text-center"><h2 className="text-3xl font-extrabold text-white sm:text-4xl">Not sure which service fits?</h2><p className="mt-4 text-lg text-white/80">Share what you’re working with and our team can help you understand the options.</p><Button href="/get-started?source=pricing" variant="teal" size="lg" className="mt-7">Get started</Button></div></Container></section>
    </>
  )
}
