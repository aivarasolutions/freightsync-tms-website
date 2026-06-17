import type { Metadata } from 'next'
import {
  ArrowRight,
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Headphones,
  Landmark,
  LineChart,
  ReceiptText,
  ShieldCheck,
  Truck,
  UserPlus,
  WalletCards,
  Wrench,
  XCircle,
} from 'lucide-react'
import { CarrierAcceleratorForm } from '@/components/ui/CarrierAcceleratorForm'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/ui/FAQ'
import { ROICalculator } from '@/components/ui/ROICalculator'

export const metadata: Metadata = {
  title: 'Carrier Accelerator Program',
  description:
    'Turn a semi truck or Sprinter van into a managed revenue-producing asset with FreightSync dispatching, operations support, reporting, and owner payout visibility.',
}

const investmentHighlights = [
  'You purchase or finance the vehicle.',
  'You obtain commercial insurance.',
  'FreightSync helps with onboarding, setup, dispatching, driver recruiting, load coordination, reporting, and operations.',
  'The goal is recurring monthly cash flow while working toward paying off the vehicle investment.',
]

const roiExamples = [
  {
    title: 'Semi Truck Investment Example',
    icon: Truck,
    stats: [
      ['Estimated Truck Purchase', '$60,000'],
      ['Startup / Registration / Setup', '$3,000'],
      ['Estimated Insurance', '$2,000/month'],
      ['Estimated Monthly Gross Revenue', '$22,000-$28,000'],
      ['Estimated Monthly Owner Net Profit', '$4,000-$7,000'],
      ['Estimated Payback Period', '12-18 months'],
    ],
    note:
      'A semi truck can require a larger upfront investment, but it also has stronger gross revenue potential. With consistent utilization and proper cost control, the goal is to recover the initial investment within approximately 12-18 months, then continue generating monthly cash flow in future years.',
  },
  {
    title: 'Sprinter Van Investment Example',
    icon: WalletCards,
    stats: [
      ['Estimated Vehicle Purchase', '$35,000-$55,000'],
      ['Startup / Registration / Setup', '$1,500-$3,000'],
      ['Estimated Insurance', '$600-$1,200/month'],
      ['Estimated Monthly Gross Revenue', '$8,000-$15,000'],
      ['Estimated Monthly Owner Net Profit', '$2,000-$5,000'],
      ['Estimated Payback Period', '12-24 months'],
    ],
    note:
      'Sprinter vans may have a lower entry cost than semi trucks, but results depend heavily on load availability, location, vehicle utilization, and operating expenses.',
  },
]

const investorResponsibilities = [
  'Purchase or finance the vehicle',
  'Maintain commercial insurance',
  'Keep the vehicle roadworthy',
  'Review performance reports',
  'Fund required reserves or repairs when needed',
]

const freightSyncResponsibilities = [
  'Dispatching',
  'Load sourcing',
  'Broker coordination',
  'Driver recruiting assistance',
  'Driver management support',
  'Compliance guidance',
  'Weekly reporting',
  'Settlement tracking',
  'Owner payout reporting',
  'FreightSync TMS portal access',
  'Operational support',
]

const payoffPath = [
  {
    year: 'Year 1',
    items: ['Stabilize the vehicle operation', 'Build driver consistency', 'Recover startup costs', 'Work toward paying down or paying off the asset'],
  },
  {
    year: 'Year 2',
    items: ['Reduce debt burden', 'Improve monthly cash flow', 'Build operating reserves', 'Consider adding another vehicle'],
  },
  {
    year: 'Year 3',
    items: ['Continue cash-flowing from the asset', 'Scale additional vehicles if performance is strong', 'Build a larger managed fleet with FreightSync'],
  },
]

const comparison = {
  alone: [
    'New authority takes time to build trust',
    'Must learn dispatching',
    'Must recruit and manage drivers',
    'Must build broker relationships',
    'Must manage compliance and paperwork',
    'Must track expenses, settlements, and payouts manually',
  ],
  freightSync: [
    'Use FreightSync operational support',
    'Professional dispatch and load coordination',
    'Driver recruiting assistance',
    'Broker and carrier setup support',
    'Compliance guidance',
    'Weekly reporting and owner portal access',
    'Read-only investor visibility',
  ],
}

const programOptions = [
  {
    title: 'Semi Truck',
    icon: Truck,
    onboarding: '$2,500',
    payment: '$500 down + $333/month for 6 months',
    fee: '25% of gross revenue',
    additional: '$1,000 onboarding per added truck',
  },
  {
    title: 'Sprinter Van',
    icon: WalletCards,
    onboarding: '$1,000',
    payment: '$250 down + $125/month for 6 months',
    fee: '25% of gross revenue',
    additional: '$500 onboarding per added van',
  },
]

const included = [
  { label: 'Dispatching', icon: Headphones },
  { label: 'Load Sourcing', icon: Truck },
  { label: 'Driver Recruiting Assistance', icon: UserPlus },
  { label: 'Driver Management Support', icon: ClipboardCheck },
  { label: 'Broker Coordination', icon: Handshake },
  { label: 'Compliance Guidance', icon: ShieldCheck },
  { label: 'FreightSync TMS Access', icon: BarChart3 },
  { label: 'Weekly Reporting', icon: ReceiptText },
  { label: 'Settlement Tracking', icon: Banknote },
  { label: 'Owner Payout Reporting', icon: LineChart },
  { label: 'Administrative Support', icon: FileCheck2 },
  { label: 'Operational Guidance', icon: Wrench },
]

const vehicles = [
  {
    type: 'Semi Truck',
    recommended: 'Freightliner Cascadia',
    benefits: ['Strong reliability', 'Nationwide service network', 'Strong resale value', 'Easier maintenance and repairs'],
  },
  {
    type: 'Sprinter Van',
    recommended: 'Mercedes Sprinter 2500 High Roof',
    benefits: ['Strong broker acceptance', 'Good fuel efficiency', 'High demand in expedited freight'],
  },
]

const revenue = [
  {
    type: 'Semi Truck',
    gross: '$22,000-$28,000',
    profit: '$4,000-$7,000',
  },
  {
    type: 'Sprinter Van',
    gross: '$8,000-$15,000',
    profit: '$2,000-$5,000',
  },
]

const bestFit = [
  'Investors who want to own a trucking asset without running daily operations',
  'Owner-operators who want professional dispatch and operational support',
  'Small fleet owners who want to scale',
  'Business owners looking for monthly cash flow potential',
  'People who understand that trucking involves risk, maintenance, insurance, and market cycles',
]

const notFit = [
  'People expecting guaranteed income',
  'People without enough capital for insurance, repairs, and reserves',
  'People unwilling to maintain the vehicle properly',
  'People who cannot handle fluctuating monthly profit',
  'People who want FreightSync to cover all vehicle expenses',
]

const requirements = ['LLC', 'EIN', 'Business Bank Account', 'Commercial Insurance', 'Vehicle Registration', 'Compliance Documentation']

const faqs = [
  {
    question: 'Is this an investment opportunity or a dispatch service?',
    answer:
      'It is structured around asset ownership. You own or finance the vehicle and maintain insurance while FreightSync supports the operational side, including dispatching, load coordination, reporting, driver support, and owner payout visibility.',
  },
  {
    question: 'Does FreightSync guarantee revenue or profit?',
    answer:
      'No. FreightSync does not guarantee revenue, profit, loads, utilization, or payback timelines. All examples are estimates for planning only and actual results vary.',
  },
  {
    question: 'Can FreightSync help find drivers?',
    answer:
      'Yes. FreightSync can assist with driver recruiting needs, screening coordination, and operational setup so partners are better prepared to keep equipment utilized.',
  },
  {
    question: 'What insurance is required?',
    answer:
      'Partners need commercial insurance in their company name. Specific coverage requirements can vary by vehicle type, freight profile, broker requirements, and operating model.',
  },
  {
    question: 'Can I add more vehicles later?',
    answer:
      'Yes. The program is designed for growth. Additional semi trucks and Sprinter vans can be onboarded later with reduced additional-vehicle onboarding fees.',
  },
  {
    question: 'How are settlements handled?',
    answer:
      'FreightSync supports settlement tracking and weekly reporting so owners can review gross revenue, expenses, FreightSync management fees, and operating performance with clearer visibility.',
  },
]

const images = {
  hero:
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85',
  fleet:
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85',
  control:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
  freight:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85',
}

const investmentJourney = ['Apply', 'Finance', 'Insurance', 'Vehicle Purchase', 'Launch', 'Revenue', 'Payoff', 'Fleet Expansion']

const successScenarios = [
  {
    title: 'Semi truck to paid-down asset',
    stat: '$4K-$7K',
    body: 'A first-truck owner uses managed operations, weekly reporting, and cost discipline to pursue monthly cash flow while working down the note.',
  },
  {
    title: 'Sprinter van market entry',
    stat: '$2K-$5K',
    body: 'A lower-entry vehicle gives an owner a path to prove demand, create operating history, and decide whether expansion is justified.',
  },
  {
    title: 'Managed fleet expansion',
    stat: '2-5 assets',
    body: 'Once one vehicle stabilizes, FreightSync reporting helps the owner evaluate reserves, driver coverage, and the timing of the next vehicle.',
  },
]

function CTASection({ title, body, primary = 'Request an Investment Review' }: { title: string; body: string; primary?: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-gradient-to-r from-navy to-royal p-6 sm:p-8 text-white shadow-2xl">
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white/85">{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <Button href="#consultation" variant="teal">
            {primary}
          </Button>
          <Button href="#roi-calculator" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Run the ROI Calculator
          </Button>
        </div>
      </div>
    </div>
  )
}

function DisclaimerBox({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`rounded-xl border border-cyan/20 bg-cyan/5 ${compact ? 'p-4 text-sm' : 'p-5 text-sm sm:text-base'} text-neutral`}>
      <p className="font-semibold text-navy mb-2">Important financial disclaimer</p>
      <p>
        These examples are estimates only. Actual results vary based on freight market conditions, vehicle cost, insurance cost, fuel prices, driver performance, maintenance, utilization, and financing terms.
      </p>
    </div>
  )
}

export default function CarrierAcceleratorProgram() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <img src={images.hero} alt="Modern semi truck fleet as transportation investment assets" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-royal/45" />

        <Container>
          <div className="relative z-10 grid min-h-[640px] gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan mb-6">
                <Truck className="h-4 w-4" />
                Managed fleet ownership program
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white mb-6">
                Own Transportation Assets. Build Cash Flow. Scale a Managed Fleet.
              </h1>
              <p className="text-lg sm:text-xl text-white/85 max-w-3xl mb-8">
                The Carrier Accelerator Program helps qualified owners purchase or finance a semi truck or Sprinter van while FreightSync supports the dispatch, drivers, reporting, settlements, and operating structure around the asset.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#consultation" variant="teal" size="lg">
                  Request an Investment Review
                </Button>
                <Button href="#roi-calculator" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy">
                  Run ROI Calculator
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Revenue examples above the fold</p>
              <div className="grid gap-4">
                {roiExamples.map((example) => (
                  <div key={example.title} className="rounded-lg bg-white/90 p-5 shadow-lg">
                    <div className="mb-4 flex items-center gap-3">
                      <example.icon className="h-6 w-6 text-cyan" />
                      <h2 className="text-xl font-bold text-navy">{example.title}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {example.stats.slice(3).map(([label, value]) => (
                        <div key={label} className="rounded-lg bg-muted p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-neutral">{label.replace('Estimated ', '')}</p>
                          <p className="mt-1 text-2xl font-extrabold text-navy">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="roi-calculator" className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">ROI calculator</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">Model the vehicle before you deploy capital.</h2>
            <p className="text-lg text-neutral">
              Adjust vehicle cost, gross revenue, operating expenses, and FreightSync&apos;s management fee to estimate monthly owner net and payoff timing.
            </p>
          </div>
          <ROICalculator />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="max-w-4xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">Investment journey</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">A clear path from application to fleet expansion.</h2>
            <p className="text-lg text-neutral">
              FreightSync frames ownership as an asset-building sequence: qualify, finance, insure, purchase, launch, generate revenue, pursue payoff, and expand carefully.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {investmentJourney.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-white/60 bg-white/80 p-5 shadow-lg backdrop-blur">
                <p className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-teal text-sm font-extrabold text-white">
                  {index + 1}
                </p>
                <h3 className="text-xl font-bold text-navy">{step}</h3>
                {index < investmentJourney.length - 1 && <ArrowRight className="absolute right-5 top-6 hidden h-5 w-5 text-cyan md:block" />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="investment" className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">Asset ownership strategy</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">Turn a vehicle into a managed revenue-producing asset.</h2>
              <p className="text-lg text-neutral mb-6">
                The program is built for people who want trucking exposure through ownership, cash-flow visibility, payoff planning, and long-term fleet growth instead of buying software and managing every operating detail alone.
              </p>
              <ul className="space-y-3 mb-6">
                {investmentHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="#consultation" variant="teal">
                Start With One Vehicle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-5">
              <img src={images.fleet} alt="Managed sprinter and truck fleet movement" className="h-[330px] w-full rounded-xl object-cover shadow-2xl" />
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  ['Transportation assets', 'Own the vehicle and build equity as the operation matures.'],
                  ['Cash-flow visibility', 'Track gross revenue, costs, settlements, owner net, and reserves.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-border bg-muted p-5">
                    <h3 className="font-bold text-navy mb-2">{title}</h3>
                    <p className="text-sm text-neutral">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <DisclaimerBox />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Investment examples</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Semi Truck and Sprinter Van ROI Examples</h2>
            <p className="text-lg text-neutral">
              Compare two common entry points. Gross revenue is not owner profit; owner profit is what remains after operating costs and FreightSync management fees.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {roiExamples.map((example) => (
              <div key={example.title} className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10">
                    <example.icon className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{example.title}</h3>
                </div>
                <div className="space-y-3">
                  {example.stats.map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                      <span className="text-neutral">{label}</span>
                      <span className="font-bold text-navy text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-neutral">{example.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">Managed operating layer</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">You own the asset. FreightSync runs the operating system around it.</h2>
              <p className="text-lg text-neutral">
                FreightSync is designed for investors and owners who want trucking income without managing dispatch, drivers, brokers, paperwork, and daily operations themselves.
              </p>
              <img src={images.control} alt="Logistics control center for managed fleet operations" className="mt-8 h-72 w-full rounded-xl object-cover shadow-2xl" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-border bg-white/80 p-6 shadow-lg backdrop-blur">
                <h3 className="text-xl font-bold text-navy mb-4">Investor responsibilities</h3>
                <ul className="space-y-3">
                  {investorResponsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral">
                      <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-cyan/30 bg-gradient-to-br from-white to-cyan/5 p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-navy mb-4">FreightSync responsibilities</h3>
                <ul className="space-y-3">
                  {freightSyncResponsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral">
                      <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-br from-navy to-secondary">
        <Container>
          <CTASection
            title="Ready to review your first vehicle?"
            body="Share your vehicle type, purchase plan, insurance status, and target market. FreightSync will help you evaluate whether the program is a fit."
            primary="Schedule a Carrier Strategy Call"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">Ownership success scenarios</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">Build cash flow, then build the fleet.</h2>
              <p className="text-lg text-neutral">
                The program is positioned around asset ownership, operating visibility, reserves, payoff, and disciplined expansion.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {successScenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-xl border border-border bg-gradient-to-br from-white to-muted p-6 shadow-xl">
                  <p className="text-4xl font-extrabold text-cyan">{scenario.stat}</p>
                  <h3 className="mt-5 text-xl font-bold text-navy">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral">{scenario.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="program-options" className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Program pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Onboarding and Management Fee</h2>
            <p className="text-lg text-neutral">
              Keep the current setup clear: onboarding covers launch support, while FreightSync earns a management fee tied to gross revenue.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programOptions.map((option) => (
              <div key={option.title} className="rounded-xl bg-white border border-border p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <option.icon className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{option.title}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <span className="text-neutral">Onboarding</span>
                    <span className="font-bold text-navy text-right">{option.onboarding}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <span className="text-neutral">Payment option</span>
                    <span className="font-bold text-navy text-right">{option.payment}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <span className="text-neutral">FreightSync Management Fee</span>
                    <span className="font-bold text-navy text-right">{option.fee}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-neutral">Additional vehicles</span>
                    <span className="font-bold text-navy text-right">{option.additional}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Payoff path</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Build Toward Asset Payoff and Long-Term Cash Flow</h2>
              <p className="text-lg text-neutral">
                The objective is not just to run loads. The objective is to stabilize the operation, reduce the debt burden, and build repeatable cash flow from an owned asset.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {payoffPath.map((phase) => (
                <div key={phase.year} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-4">{phase.year}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral">
                        <CheckCircle2 className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan mb-3">Why FreightSync</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">Owner Alone vs FreightSync Managed</h2>
            <p className="text-lg text-neutral">
              Trucking requires more than buying a vehicle. FreightSync gives owners a managed operating structure instead of forcing them to build every workflow from scratch.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-muted p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-navy mb-5">Owner Alone</h3>
              <ul className="space-y-3">
                {comparison.alone.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral">
                    <XCircle className="h-5 w-5 text-neutral/60 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-cyan/30 bg-gradient-to-br from-white to-cyan/5 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy mb-5">FreightSync Managed</h3>
              <ul className="space-y-3">
                {comparison.freightSync.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral">
                    <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy mb-4">Recommended Transportation Assets</h2>
              <p className="text-lg text-neutral mb-8">
                FreightSync recommends equipment with broad acceptance, stronger service access, and practical operating economics.
              </p>
              <img src={images.freight} alt="Freight movement and warehouse operations" className="mb-8 h-64 w-full rounded-xl object-cover shadow-2xl" />
              <div className="space-y-6">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.type} className="rounded-xl bg-white border border-border p-6">
                    <p className="text-sm font-semibold text-cyan mb-1">{vehicle.type}</p>
                    <h3 className="text-xl font-bold text-navy mb-4">Recommended: {vehicle.recommended}</h3>
                    <ul className="space-y-2">
                      {vehicle.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-neutral">
                          <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Revenue Expectations</h2>
              <p className="text-lg text-neutral mb-8">
                Gross revenue is the top-line amount before operating expenses. Owner profit is what remains after insurance, fuel, driver pay, repairs, maintenance, other expenses, and the FreightSync management fee.
              </p>
              <div className="space-y-6">
                {revenue.map((item) => (
                  <div key={item.type} className="rounded-xl bg-white border border-border p-6">
                    <h3 className="text-xl font-bold text-navy mb-5">{item.type}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm text-neutral mb-1">Estimated Monthly Gross Revenue</p>
                        <p className="text-2xl font-bold text-navy">{item.gross}</p>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm text-neutral mb-1">Estimated Monthly Owner Net Profit</p>
                        <p className="text-2xl font-bold text-navy">{item.profit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral">
                FreightSync does not guarantee revenue. Trucking is an investment with real risks, fluctuating markets, insurance costs, driver variables, downtime, repairs, fuel costs, and operating discipline requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan mb-3">Fit check</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Who This Program Is Best For</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-cyan/30 bg-cyan/5 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-navy mb-5">Best fit</h3>
              <ul className="space-y-3">
                {bestFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-muted p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-navy mb-5">Who This Program Is Not For</h3>
              <ul className="space-y-3">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral">
                    <XCircle className="h-5 w-5 text-neutral/60 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Partner Requirements</h2>
              <p className="text-lg text-neutral">
                FreightSync helps review documentation and operational readiness before launch.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((requirement) => (
                <div key={requirement} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4">
                  <Landmark className="h-5 w-5 text-cyan flex-shrink-0" />
                  <span className="font-semibold text-navy">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <CTASection
            title="See if your vehicle qualifies."
            body="FreightSync can review your capital plan, vehicle type, insurance readiness, target market, and timeline before you commit to the next step."
            primary="See If Your Vehicle Qualifies"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">FAQ</h2>
              <p className="text-lg text-neutral mb-6">
                Common questions from investors and owner-operators evaluating the Carrier Accelerator Program.
              </p>
              <Button href="#consultation" variant="primary">
                Ask About Your Launch Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <FAQ items={faqs} />
          </div>
        </Container>
      </section>

      <section id="consultation" className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan mb-5">
                <Building2 className="h-4 w-4" />
                Consultation Form
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Start Your FreightSync Partner Review</h2>
              <p className="text-lg text-neutral mb-6">
                Share your equipment plans, authority status, insurance readiness, capital plan, and timeline. FreightSync will review your path and help identify the next steps toward launch.
              </p>
              <div className="rounded-xl bg-gradient-to-br from-navy to-royal p-6 text-white">
                <h3 className="text-xl font-bold text-white mb-3">Built for ownership with operational support</h3>
                <p className="text-white/85">
                  FreightSync combines freight operations, dispatching, recruiting assistance, compliance guidance, TMS access, weekly reporting, settlement tracking, and owner payout reporting in one program.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white border border-border p-6 sm:p-8 shadow-lg">
              <CarrierAcceleratorForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 text-white">
            <h2 className="text-2xl font-bold text-white">Program disclaimers</h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/75">
              <p>FreightSync does not guarantee revenue, profit, loads, or payback timelines.</p>
              <p>All financial examples are estimates for education and planning only.</p>
              <p>Actual results depend on market demand, location, vehicle type, insurance, driver availability, repairs, fuel, maintenance, downtime, financing, and operating discipline.</p>
              <p>Investors should review their own financial situation before purchasing or financing a vehicle.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
