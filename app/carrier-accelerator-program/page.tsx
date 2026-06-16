import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/ui/FAQ'
import { CarrierAcceleratorForm } from '@/components/ui/CarrierAcceleratorForm'
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
  ReceiptText,
  ShieldCheck,
  Truck,
  UserPlus,
  WalletCards,
  Wrench,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Carrier Accelerator Program',
  description: 'Launch and grow a trucking business with FreightSync dispatching, operations support, driver recruiting, compliance guidance, reporting, and carrier management systems.',
}

const steps = [
  'Purchase or finance your truck or van.',
  'Obtain commercial insurance in your company name.',
  'Complete FreightSync onboarding and compliance review.',
  'FreightSync assists with driver recruiting and operational setup.',
  'Start receiving dispatched loads and weekly reporting.',
]

const programOptions = [
  {
    title: 'Semi Truck Program',
    fee: '$2,500',
    payment: '$500 down and $333/month for 6 months',
    management: '25% of gross revenue',
    icon: Truck,
  },
  {
    title: 'Sprinter Van Program',
    fee: '$1,000',
    payment: '$250 down and $125/month for 6 months',
    management: '25% of gross revenue',
    icon: WalletCards,
  },
]

const included = [
  { label: 'Dispatching', icon: Headphones },
  { label: 'Load Sourcing', icon: Truck },
  { label: 'Driver Recruiting Assistance', icon: UserPlus },
  { label: 'Driver Management Support', icon: ClipboardCheck },
  { label: 'Broker Onboarding', icon: Handshake },
  { label: 'Compliance Assistance', icon: ShieldCheck },
  { label: 'FreightSync TMS Access', icon: BarChart3 },
  { label: 'Weekly Reporting', icon: ReceiptText },
  { label: 'Settlement Management', icon: Banknote },
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
    gross: '$18,000-$28,000',
    profit: '$3,000-$7,000',
  },
  {
    type: 'Sprinter Van',
    gross: '$8,000-$15,000',
    profit: '$2,000-$5,000',
  },
]

const requirements = ['LLC', 'EIN', 'Business Bank Account', 'Commercial Insurance', 'Vehicle Registration', 'Compliance Documentation']

const faqs = [
  {
    question: 'Why partner with FreightSync?',
    answer: 'FreightSync gives investors and owner-operators access to established freight operations, dispatching, reporting, settlement support, carrier management workflows, and practical guidance that can shorten the path from equipment purchase to revenue.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Timing depends on insurance, equipment readiness, documentation, and driver availability. Many partners can move through onboarding once required business, insurance, vehicle, and compliance documents are complete.',
  },
  {
    question: 'Can FreightSync help find drivers?',
    answer: 'Yes. FreightSync can assist with driver recruiting needs, screening coordination, and operational setup so partners are better prepared to keep equipment utilized.',
  },
  {
    question: 'What insurance is required?',
    answer: 'Partners need commercial insurance in their company name. Specific coverage requirements can vary by vehicle type, freight profile, broker requirements, and operating model.',
  },
  {
    question: 'Can I add more vehicles later?',
    answer: 'Yes. The program is designed for growth. Additional semi trucks and Sprinter vans can be onboarded later with reduced additional-vehicle onboarding fees.',
  },
  {
    question: 'How are settlements handled?',
    answer: 'FreightSync supports settlement management with weekly reporting so owners can review gross revenue, fees, expenses, and operating performance with clearer visibility.',
  },
]

function CTASection({ title, body, variant = 'light' }: { title: string; body: string; variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark'

  return (
    <div className={`${dark ? 'bg-gradient-to-r from-navy to-royal text-white' : 'bg-white text-navy'} rounded-xl border border-border p-6 sm:p-8 shadow-lg`}>
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
          <p className={dark ? 'text-white/85' : 'text-neutral'}>{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <Button href="#consultation" variant="teal">
            Schedule a Consultation
          </Button>
          <Button
            href="#program-options"
            variant="outline"
            className={dark ? 'border-white text-white hover:bg-white hover:text-navy' : ''}
          >
            Become a FreightSync Partner
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CarrierAcceleratorProgram() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-secondary py-20 sm:py-28">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="carrier-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#carrier-grid)" />
          </svg>
        </div>

        <Container>
          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan mb-6">
                <Truck className="h-4 w-4" />
                FreightSync Carrier Accelerator Program
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] text-white mb-6">
                Launch Your Trucking Business Faster
              </h1>
              <p className="text-lg sm:text-xl text-white/85 max-w-3xl mb-8">
                Partner with FreightSync and gain access to professional dispatching, operational support, driver recruiting, compliance guidance, and our proven carrier management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#consultation" variant="teal" size="lg">
                  Schedule a Consultation
                </Button>
                <Button href="#program-options" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy">
                  Become a FreightSync Partner
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  ['Dispatch', 'Load sourcing'],
                  ['Recruiting', 'Driver support'],
                  ['Compliance', 'Broker setup'],
                  ['Reporting', 'Settlements'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg bg-muted p-4">
                    <div className="text-sm font-bold text-navy">{title}</div>
                    <div className="text-xs text-neutral mt-1">{body}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-gradient-to-r from-cyan to-teal p-5 text-white">
                <p className="text-sm font-semibold text-white/80 mb-1">Built for</p>
                <p className="text-2xl font-bold">Investors, owner-operators, and small fleet builders</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-lg text-neutral">
              FreightSync helps structure the operational path from equipment ownership to dispatched loads, reporting, and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={step} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-teal text-white font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-navy">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="program-options" className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Program Options</h2>
            <p className="text-lg text-neutral">
              Choose the equipment lane that matches your capital plan, growth strategy, and operating goals.
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
                    <span className="text-neutral">Starting onboarding fee</span>
                    <span className="font-bold text-navy text-right">{option.fee}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <span className="text-neutral">Payment option</span>
                    <span className="font-bold text-navy text-right">{option.payment}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-neutral">FreightSync Management Fee</span>
                    <span className="font-bold text-navy text-right">{option.management}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="max-w-5xl mx-auto mt-6 text-sm text-neutral">
            Pricing may vary based on operational complexity, equipment, insurance requirements, and driver recruiting needs.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <CTASection
            title="Ready to turn equipment into an operating business?"
            body="FreightSync brings dispatch, recruiting support, compliance guidance, technology, and back-office structure together so partners can focus on ownership and growth."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What's Included</h2>
            <p className="text-lg text-neutral">
              A full-service carrier management foundation for launching, operating, and scaling with clearer systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {included.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-white p-5 hover:border-cyan hover:shadow-lg transition-all">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan/10 to-teal/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="font-bold text-navy">{item.label}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Recommended Vehicles</h2>
              <p className="text-lg text-neutral mb-8">
                FreightSync recommends equipment with broad acceptance, stronger service access, and practical operating economics.
              </p>
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
                Revenue ranges give prospective partners a practical starting point for planning.
              </p>
              <div className="space-y-6">
                {revenue.map((item) => (
                  <div key={item.type} className="rounded-xl bg-white border border-border p-6">
                    <h3 className="text-xl font-bold text-navy mb-5">{item.type}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm text-neutral mb-1">Average Monthly Gross Revenue</p>
                        <p className="text-2xl font-bold text-navy">{item.gross}</p>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm text-neutral mb-1">Typical Monthly Owner Profit</p>
                        <p className="text-2xl font-bold text-navy">{item.profit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral">
                Actual revenue and profitability vary based on freight market conditions, operating costs, driver performance, location, and utilization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
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
                <div key={requirement} className="flex items-center gap-3 rounded-lg border border-border bg-muted p-4">
                  <Landmark className="h-5 w-5 text-cyan flex-shrink-0" />
                  <span className="font-semibold text-navy">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gradient-to-br from-navy to-secondary">
        <Container>
          <CTASection
            title="Scale when your first unit is working."
            body="Add more equipment later with reduced additional-vehicle onboarding fees and the same FreightSync operating support."
            variant="dark"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-xl bg-white border border-border p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Additional Semi Trucks</h2>
              <p className="text-4xl font-extrabold text-navy mb-2">$1,000</p>
              <p className="text-neutral">Onboarding fee each</p>
            </div>
            <div className="rounded-xl bg-white border border-border p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Additional Sprinter Vans</h2>
              <p className="text-4xl font-extrabold text-navy mb-2">$500</p>
              <p className="text-neutral">Onboarding fee each</p>
            </div>
          </div>
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
                Share your equipment plans, authority status, and timeline. FreightSync will review your path and help identify the next steps toward launch.
              </p>
              <div className="rounded-xl bg-gradient-to-br from-navy to-royal p-6 text-white">
                <h3 className="text-xl font-bold text-white mb-3">Built to help you generate revenue faster</h3>
                <p className="text-white/85">
                  FreightSync combines freight operations, dispatching, recruiting assistance, compliance guidance, TMS access, weekly reporting, and settlement support in one program.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white border border-border p-6 sm:p-8 shadow-lg">
              <CarrierAcceleratorForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
