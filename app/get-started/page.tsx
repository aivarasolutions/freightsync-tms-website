import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { CarrierApplicationForm } from '@/components/carrier-network/CarrierApplicationForm'
import type { PlanId } from '@/lib/carrier-network'
import { applicationTypes } from '@/lib/carrier-network'

export const metadata: Metadata = {
  title: 'Get Started | FreightSync Carrier Network',
  description: 'Tell FreightSync what you have, what you need, and how we can support your transportation business.',
}

export default function GetStartedPage({ searchParams }: { searchParams: { plan?: string; role?: string; source?: string } }) {
  const allowed: PlanId[] = ['connect', 'dispatch', 'fleet_management', 'not_sure']
  const plan = allowed.includes(searchParams.plan as PlanId) ? searchParams.plan as PlanId : 'not_sure'
  const role = applicationTypes.some(([id]) => id === searchParams.role) ? searchParams.role : undefined
  return <main className="bg-muted py-12 sm:py-16"><Container><div className="mx-auto max-w-3xl"><div className="mb-8 text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan">FreightSync Carrier Network</p><h1 className="mt-3 text-4xl font-extrabold text-navy sm:text-5xl">Let’s Get You Moving.</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-neutral">Tell us what you have, what you need, and how FreightSync can help.</p></div><CarrierApplicationForm initialPlan={plan} initialRole={role} source={searchParams.source || 'Get Started'} /></div></Container></main>
}
