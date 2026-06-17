import type { Metadata } from 'next'
import Image from 'next/image'
import { ROICalculator } from '@/components/ui/ROICalculator'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Building2,
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
  title: 'FreightSync | Managed Transportation Assets and Fleet Ownership',
  description:
    'Own transportation assets while FreightSync manages trucking operations, dispatch, reporting, settlements, and owner visibility through the Carrier Accelerator Program.',
}

const images = {
  hero:
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85',
  fleet:
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85',
  control:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
  warehouse:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85',
}

const revenueExamples = [
  { vehicle: 'Semi Truck', capital: '$60K-$95K', gross: '$22K-$28K', ownerNet: '$4K-$7K', payoff: '12-24 mo.' },
  { vehicle: 'Sprinter Van', capital: '$35K-$55K', gross: '$8K-$15K', ownerNet: '$2K-$5K', payoff: '12-24 mo.' },
]

const journey = ['Apply', 'Finance', 'Insurance', 'Vehicle Purchase', 'Launch', 'Revenue', 'Payoff', 'Fleet Expansion']

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

const successScenarios = [
  {
    title: 'First Truck Payoff Path',
    metric: '$5K/mo.',
    description:
      'An owner finances one semi truck, stabilizes utilization, and uses positive monthly owner net to build reserves while paying down the asset.',
  },
  {
    title: 'Sprinter-to-Fleet Expansion',
    metric: '1 to 3',
    description:
      'A van owner proves demand in one market, then adds vehicles only after reporting shows consistent revenue, driver coverage, and cash-flow discipline.',
  },
  {
    title: 'Managed Fleet Portfolio',
    metric: '5 assets',
    description:
      'A passive owner builds a small portfolio of transportation assets with FreightSync handling dispatch structure, reporting, and operating visibility.',
  },
]

const comparison = {
  alone: [
    'Capital is deployed before dispatch, broker, driver, and settlement systems are mature',
    'Owner must recruit drivers, chase paperwork, manage repairs, and monitor every operational exception',
    'Revenue, expenses, reserves, and payoff progress are often tracked manually',
    'Fleet growth depends on the owner personally building every process from scratch',
  ],
  managed: [
    'Own the transportation asset while FreightSync supports the operating layer around it',
    'Use dispatch, driver recruiting assistance, broker setup support, and settlement visibility',
    'Review owner reporting for revenue, expenses, utilization, reserves, and asset payoff planning',
    'Scale from one truck toward a managed fleet with a clearer operating and reporting structure',
  ],
}

function Disclaimer() {
  return (
    <div className="rounded-lg border border-cyan/20 bg-white/80 p-4 text-sm text-neutral shadow-sm backdrop-blur">
      <p className="font-semibold text-navy">Financial disclaimer</p>
      <p className="mt-1">
        Examples are estimates for planning only. FreightSync does not guarantee revenue, profit, loads, utilization, owner payouts, or payback timelines.
      </p>
    </div>
  )
}

function PortalPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/25 bg-white/90 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between border-b border-border bg-white/80 px-5 py-4">
        <div className="flex items-center gap-3">
          <Image src="/freightsync-logo.png" alt="FreightSync TMS logo" width={44} height={44} className="h-9 w-auto" />
          <div>
            <p className="text-sm font-semibold text-cyan">Owner Portal</p>
            <p className="text-xs text-neutral">Managed Asset FS-1042</p>
          </div>
        </div>
        <div className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">Active</div>
      </div>
      <div className="grid gap-4 p-5">
        <div className="grid grid-cols-2 gap-4">
          {[
            ['Gross revenue', '$24,680'],
            ['Owner net', '$5,920'],
            ['Utilization', '91%'],
            ['Payoff progress', '58%'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-border bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral">{label}</p>
              <p className="mt-2 text-2xl font-extrabold text-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold text-navy">Asset payoff tracker</p>
            <Gauge className="h-5 w-5 text-cyan" />
          </div>
          <div className="h-3 rounded-full bg-muted">
            <div className="h-3 w-[58%] rounded-full bg-gradient-to-r from-cyan to-teal" />
          </div>
          <p className="mt-3 text-sm text-neutral">$34,800 paid down toward vehicle ownership target</p>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-4xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
      <h2 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-neutral">{body}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <img src={images.hero} alt="Modern semi truck moving freight at sunrise" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-royal/45" />
        <Container>
          <div className="relative z-10 grid min-h-[680px] items-center gap-8 py-14 lg:grid-cols-[0.98fr_1.02fr] lg:py-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan backdrop-blur">
                <BriefcaseBusiness className="h-4 w-4" />
                Transportation assets. Managed operations. Owner visibility.
              </div>
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                You Own the Truck. FreightSync Runs the Business.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
                Build a transportation asset portfolio without becoming the dispatcher, driver recruiter, back-office operator, and settlement analyst yourself.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/carrier-accelerator-program#consultation" variant="teal" size="lg">
                  Apply for Carrier Accelerator
                </Button>
                <Button href="#roi-calculator" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy">
                  Run ROI Calculator
                </Button>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Above-the-fold economics</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {revenueExamples.map((item) => (
                    <div key={item.vehicle} className="rounded-lg bg-white/90 p-5 shadow-lg">
                      <p className="text-sm font-bold text-cyan">{item.vehicle}</p>
                      <p className="mt-2 text-3xl font-extrabold text-navy">{item.ownerNet}</p>
                      <p className="text-sm text-neutral">estimated monthly owner net</p>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-neutral">Gross</p>
                          <p className="font-bold text-navy">{item.gross}</p>
                        </div>
                        <div>
                          <p className="text-neutral">Payoff</p>
                          <p className="font-bold text-navy">{item.payoff}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <PortalPreview />
            </div>
          </div>
        </Container>
      </section>

      <section id="roi-calculator" className="bg-white py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow="ROI calculator"
            title="Model the asset before you buy it."
            body="Put the economics immediately in front of the owner: vehicle cost, monthly revenue, insurance, fuel, driver pay, FreightSync management fee, owner net, and estimated payoff path."
          />
          <div className="mt-10">
            <ROICalculator />
          </div>
        </Container>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Investment journey"
            title="From application to fleet expansion."
            body="FreightSync turns the messy path of trucking ownership into a visible sequence: capitalize the asset, launch the operation, monitor performance, and scale only when the numbers support it."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {journey.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-white/60 bg-white/80 p-5 shadow-lg backdrop-blur">
                <p className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-teal text-sm font-extrabold text-white">
                  {index + 1}
                </p>
                <h3 className="text-xl font-bold text-navy">{step}</h3>
                {index < journey.length - 1 && <ArrowRight className="absolute right-5 top-6 hidden h-5 w-5 text-cyan md:block" />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Managed fleet operator"
                title="FreightSync manages the business layer around the asset."
                body="The opportunity is not just truck ownership. It is ownership with dispatch structure, driver support, broker coordination, settlement visibility, and reporting discipline."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {managedOps.map((item) => (
                  <div key={item.label} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                    <item.icon className="mb-3 h-6 w-6 text-cyan" />
                    <h3 className="font-bold text-navy">{item.label}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <img src={images.control} alt="Logistics operations control center" className="h-[320px] w-full rounded-xl object-cover shadow-2xl" />
              <div className="grid gap-5 sm:grid-cols-2">
                <img src={images.fleet} alt="Managed transportation fleet on the road" className="h-52 w-full rounded-xl object-cover shadow-xl" />
                <img src={images.warehouse} alt="Freight movement in a warehouse" className="h-52 w-full rounded-xl object-cover shadow-xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-navy to-royal py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Ownership success scenarios</p>
              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">Build cash flow, then build the fleet.</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                These scenarios show the strategic arc: start with one transportation asset, create operating visibility, build reserves, pursue payoff, then expand from a stronger base.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {successScenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
                  <p className="text-4xl font-extrabold text-cyan">{scenario.metric}</p>
                  <h3 className="mt-5 text-xl font-bold text-white">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Why FreightSync</p>
            <h2 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl">Owner Alone vs FreightSync Managed</h2>
            <p className="mt-5 text-lg text-neutral">
              FreightSync is built for owners who want asset ownership and long-term wealth-building potential without building every operating system alone.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-muted p-7 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-navy">Owner Alone</h3>
              <div className="space-y-4">
                {comparison.alone.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-neutral">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-cyan/30 bg-gradient-to-br from-white to-cyan/5 p-7 shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold text-navy">FreightSync Managed</h3>
              <div className="space-y-4">
                {comparison.managed.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-neutral">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Owner portal visibility"
                title="Reporting built around assets, cash flow, and payoff."
                body="Real Owner Portal screenshots were not present in the available project assets, so this section keeps the portal promise clear while using the existing FreightSync brand and live data structure."
              />
              <div className="mt-8">
                <Disclaimer />
              </div>
            </div>
            <PortalPreview />
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Carrier Accelerator Program</p>
              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">Start with one vehicle. Build toward transportation wealth.</h2>
              <p className="mt-5 text-lg text-white/80">
                FreightSync helps owners evaluate the asset, launch the operation, track the numbers, and decide when the next vehicle makes sense.
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [Banknote, 'Cash flow', 'Plan monthly owner net'],
                  [Truck, 'Fleet ownership', 'Scale assets deliberately'],
                  [LineChart, 'Payoff path', 'Track long-term value'],
                ].map(([Icon, title, body]) => (
                  <div key={title as string} className="rounded-lg bg-white p-5 text-navy shadow-lg">
                    <Icon className="mb-4 h-7 w-7 text-cyan" />
                    <h3 className="font-bold text-navy">{title as string}</h3>
                    <p className="mt-2 text-sm text-neutral">{body as string}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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
          </div>
        </Container>
      </section>
    </>
  )
}
