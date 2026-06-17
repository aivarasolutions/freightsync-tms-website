import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  Handshake,
  Headphones,
  LineChart,
  ReceiptText,
  ShieldCheck,
  Truck,
  UserPlus,
  WalletCards,
  Wrench,
  XCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FreightSync | Managed Trucking Investment and Fleet Ownership',
  description:
    'Own a semi truck or Sprinter van while FreightSync manages trucking operations, dispatch, reporting, settlements, and owner visibility through the Carrier Accelerator Program.',
}

const ownershipSteps = [
  {
    icon: WalletCards,
    title: 'Purchase or finance a vehicle',
    description:
      'Start with a semi truck or Sprinter van that fits your budget, capital plan, insurance readiness, and ownership goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Set up the business foundation',
    description:
      'Prepare the LLC, EIN, business bank account, commercial insurance, registration, and operating documentation needed to launch.',
  },
  {
    icon: Headphones,
    title: 'FreightSync runs daily operations',
    description:
      'Our team supports dispatch, load sourcing, broker setup, driver recruiting assistance, settlement tracking, and owner reporting.',
  },
  {
    icon: LineChart,
    title: 'Track cash flow and grow',
    description:
      'Review performance, monitor operating costs, plan payoff targets, and evaluate adding the next vehicle when the first asset stabilizes.',
  },
]

const managedOps = [
  { icon: Headphones, label: 'Dispatch and load coordination' },
  { icon: UserPlus, label: 'Driver recruiting assistance' },
  { icon: Handshake, label: 'Broker and carrier setup support' },
  { icon: ClipboardCheck, label: 'Compliance and document guidance' },
  { icon: ReceiptText, label: 'Settlement and expense visibility' },
  { icon: BarChart3, label: 'Owner performance reporting' },
  { icon: Wrench, label: 'Maintenance reserve planning' },
  { icon: FileCheck2, label: 'Back-office operating support' },
]

const revenueExamples = [
  {
    vehicle: 'Semi Truck',
    capital: '$60K-$95K',
    gross: '$22K-$28K',
    ownerNet: '$4K-$7K',
    payoff: '12-24 months',
  },
  {
    vehicle: 'Sprinter Van',
    capital: '$35K-$55K',
    gross: '$8K-$15K',
    ownerNet: '$2K-$5K',
    payoff: '12-24 months',
  },
]

const payoffExamples = [
  ['Month 1-3', 'Launch vehicle, onboard driver, stabilize lanes, and build clean reporting rhythm.'],
  ['Month 4-12', 'Use positive cash flow to cover debt service, reserves, insurance, and operating costs.'],
  ['Year 2+', 'Reduce or eliminate the vehicle payment, improve owner cash flow, and evaluate fleet growth.'],
]

const dashboardMetrics = [
  ['Monthly gross revenue', '$24,680', '+8.4%'],
  ['Estimated owner net', '$5,920', '+$740'],
  ['Loaded miles', '8,420', '91% utilization'],
  ['Settlements pending', '$6,310', '3 loads'],
]

const dashboardLoads = [
  ['Dallas, TX', 'Atlanta, GA', '$3,150', 'Delivered'],
  ['Nashville, TN', 'Charlotte, NC', '$2,480', 'In transit'],
  ['Savannah, GA', 'Orlando, FL', '$1,920', 'Booked'],
]

const testimonials = [
  {
    quote:
      'I wanted trucking exposure, but I did not want to become a dispatcher. FreightSync gave me a way to own the vehicle and review the numbers without living inside the operation every day.',
    name: 'Marcus R.',
    role: 'Semi truck owner-partner',
  },
  {
    quote:
      'The biggest difference was visibility. I can see gross revenue, expenses, settlements, and what is happening with the truck before I think about adding another asset.',
    name: 'Danielle P.',
    role: 'Fleet growth investor',
  },
  {
    quote:
      'FreightSync helped me think like an owner instead of only chasing loads. The reporting makes payoff, reserves, and cash flow much easier to manage.',
    name: 'Andre L.',
    role: 'Sprinter van owner',
  },
]

const comparison = {
  selfManaged: [
    'Learn dispatching, broker setup, carrier packets, and paperwork while capital is already deployed',
    'Recruit, screen, and coordinate drivers without an operating team behind the asset',
    'Track settlements, expenses, repairs, and owner payouts manually',
    'Make every day-to-day decision alone when freight markets, insurance, fuel, and downtime shift',
  ],
  freightSync: [
    'Own the vehicle while FreightSync supports the operating workflows around it',
    'Use dispatch, load coordination, broker support, driver recruiting assistance, and reporting structure',
    'Review owner dashboard metrics for revenue, expenses, settlements, and utilization',
    'Build from one vehicle toward a managed fleet with clearer operating discipline',
  ],
}

function Disclaimer() {
  return (
    <div className="rounded-lg border border-cyan/20 bg-cyan/5 p-4 text-sm text-neutral">
      <p className="font-semibold text-navy">Financial disclaimer</p>
      <p className="mt-1">
        Examples are estimates for planning only. FreightSync does not guarantee revenue, profit, loads, utilization, owner payouts, or payback timelines.
      </p>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border bg-white shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted px-5 py-4">
        <div className="flex items-center gap-3">
          <Image src="/freightsync-logo.png" alt="FreightSync TMS logo" width={44} height={44} className="h-9 w-auto" />
          <div>
            <p className="text-sm font-semibold text-cyan">Owner Dashboard</p>
            <p className="text-xs text-neutral">Fleet Asset FS-1042</p>
          </div>
        </div>
        <div className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">Active</div>
      </div>
      <div className="p-5">
        <div className="grid sm:grid-cols-2 gap-4">
          {dashboardMetrics.map(([label, value, delta]) => (
            <div key={label} className="rounded-lg border border-border bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral">{label}</p>
              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="text-2xl font-extrabold text-navy">{value}</p>
                <p className="text-xs font-bold text-teal">{delta}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-bold text-navy">Recent load activity</p>
            <CalendarCheck className="h-5 w-5 text-cyan" />
          </div>
          <div className="divide-y divide-border">
            {dashboardLoads.map(([origin, destination, rate, status]) => (
              <div key={`${origin}-${destination}`} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 text-sm">
                <div>
                  <p className="font-semibold text-navy">{origin} to {destination}</p>
                  <p className="text-neutral">{status}</p>
                </div>
                <p className="font-bold text-navy">{rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-secondary to-royal py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="home-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#home-grid)" />
          </svg>
        </div>

        <Container>
          <div className="relative z-10 grid lg:grid-cols-[1fr_0.88fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan mb-8">
                <BriefcaseBusiness className="h-4 w-4" />
                Managed trucking investment and fleet ownership
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white mb-6">
                You Own the Truck. FreightSync Runs the Business.
              </h1>
              <p className="text-lg sm:text-xl text-white/85 max-w-3xl mb-8">
                Buy or finance a semi truck or Sprinter van, keep ownership of the asset, and let FreightSync support the operating system around it: dispatch, drivers, broker coordination, settlements, reporting, and cash-flow visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/carrier-accelerator-program#consultation" variant="teal" size="lg">
                  Apply for Carrier Accelerator
                </Button>
                <Button href="#revenue-examples" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy">
                  See Revenue Examples
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/65">
                Built for vehicle owners, passive trucking investors, and small fleet builders.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white p-5 sm:p-6 shadow-2xl">
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-5">
                  <p className="text-sm font-semibold text-cyan">Owner model</p>
                  <h2 className="mt-2 text-2xl font-bold text-navy">Own the asset, outsource the operation.</h2>
                  <p className="mt-3 text-neutral">
                    FreightSync positions your vehicle as a managed trucking business, not just another software account.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    ['1', 'Buy or finance'],
                    ['2', 'Launch with support'],
                    ['3', 'Review cash flow'],
                  ].map(([number, label]) => (
                    <div key={label} className="rounded-lg border border-border p-4 text-center">
                      <p className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-cyan/10 text-sm font-extrabold text-cyan">{number}</p>
                      <p className="text-sm font-bold text-navy">{label}</p>
                    </div>
                  ))}
                </div>
                <DashboardPreview />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Vehicle ownership path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">From First Truck to Managed Fleet</h2>
            <p className="text-lg text-neutral">
              FreightSync helps owners think beyond loads. The goal is a structured asset: vehicle ownership, operating support, reporting discipline, payoff planning, and fleet growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ownershipSteps.map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10">
                  <step.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-neutral">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Managed operations</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">FreightSync Handles the Business Behind the Vehicle</h2>
              <p className="text-lg text-neutral mb-6">
                You are not buying a dashboard and being left to figure out the freight business alone. FreightSync supports the operating work needed to keep the asset moving and visible.
              </p>
              <Button href="/carrier-accelerator-program" variant="primary">
                View Program Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {managedOps.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-white p-5">
                  <item.icon className="h-6 w-6 text-cyan mb-3" />
                  <h3 className="font-bold text-navy">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="revenue-examples" className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Cash-flow planning</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Realistic Revenue and Owner Net Examples</h2>
            <p className="text-lg text-neutral">
              Gross revenue is not profit. These examples separate top-line revenue from estimated owner net after typical operating costs and FreightSync management fees.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {revenueExamples.map((example) => (
              <div key={example.vehicle} className="rounded-xl border border-border bg-muted p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <Truck className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{example.vehicle}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    ['Estimated capital', example.capital],
                    ['Monthly gross revenue', example.gross],
                    ['Monthly owner net', example.ownerNet],
                    ['Estimated payoff path', example.payoff],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-white p-4">
                      <p className="text-sm text-neutral">{label}</p>
                      <p className="mt-1 text-2xl font-extrabold text-navy">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Disclaimer />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Reporting visibility</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Owner Dashboard Screenshots, Built Around the Numbers That Matter</h2>
              <p className="text-lg text-neutral mb-6">
                FreightSync reporting focuses on asset performance: revenue, utilization, settlements, expenses, owner net, and growth readiness.
              </p>
              <div className="space-y-3">
                {['Gross revenue and owner net tracking', 'Load-by-load visibility and settlement status', 'Vehicle utilization and maintenance reserve planning'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-neutral">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <DashboardPreview />
              <div className="rounded-xl border border-border bg-white p-5 shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan">ROI and payoff view</p>
                    <h3 className="text-xl font-bold text-navy">Asset payoff tracker</h3>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan" />
                </div>
                <div className="h-4 rounded-full bg-muted">
                  <div className="h-4 w-[58%] rounded-full bg-gradient-to-r from-cyan to-teal" />
                </div>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    ['Paid down', '$34,800'],
                    ['Remaining', '$25,200'],
                    ['Target', '18 mo.'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-muted p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral">{label}</p>
                      <p className="mt-1 text-xl font-extrabold text-navy">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Payoff examples</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Use Cash Flow to Build Toward Asset Payoff</h2>
              <p className="text-lg text-neutral">
                The opportunity is not only monthly income. It is the chance to convert a financed vehicle into a stronger cash-flowing asset over time.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {payoffExamples.map(([phase, body]) => (
                <div key={phase} className="rounded-xl border border-border bg-muted p-6">
                  <BadgeDollarSign className="h-7 w-7 text-cyan mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-3">{phase}</h3>
                  <p className="text-neutral">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Owner testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Built for Owners Who Want the Asset, Not a Second Job</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <p className="text-neutral leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-neutral">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Managed fleet comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Self Managed Fleet vs FreightSync Managed Fleet</h2>
            <p className="text-lg text-neutral">
              FreightSync exists for owners who want trucking asset exposure without building an operating company from zero.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-muted p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-navy mb-5">Self Managed Fleet</h3>
              <div className="space-y-4">
                {comparison.selfManaged.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-neutral">
                    <XCircle className="h-5 w-5 text-neutral/60 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-cyan/30 bg-white p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy mb-5">FreightSync Managed Fleet</h3>
              <div className="space-y-4">
                {comparison.freightSync.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-neutral">
                    <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy to-royal">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Carrier Accelerator Program</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start With One Vehicle. Build Toward a Managed Fleet.</h2>
              <p className="text-lg text-white/80 mb-8">
                Share your vehicle plan, financing status, insurance readiness, and target market. FreightSync will review whether the Carrier Accelerator Program is a fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/carrier-accelerator-program#consultation" variant="teal">
                  Request an Investment Review
                </Button>
                <a
                  href="https://portal.freightsynctms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-navy"
                >
                  View Owner Portal
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  [Banknote, 'Cash flow', 'Plan monthly owner net'],
                  [Truck, 'Asset growth', 'Add vehicles deliberately'],
                  [BarChart3, 'Reporting', 'Track the operation'],
                ].map(([Icon, title, body]) => (
                  <div key={title as string} className="rounded-lg bg-white p-5 text-navy">
                    <Icon className="h-7 w-7 text-cyan mb-4" />
                    <h3 className="font-bold text-navy">{title as string}</h3>
                    <p className="mt-2 text-sm text-neutral">{body as string}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Disclaimer />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
