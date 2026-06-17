import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Headphones,
  ShieldCheck,
  Truck,
  UserPlus,
  WalletCards,
  Wrench,
} from 'lucide-react'

const ownershipPath = [
  {
    icon: Truck,
    title: 'Buy or finance the vehicle',
    description: 'Evaluate semi truck or Sprinter van options with practical guidance around equipment fit, serviceability, and ownership goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Prepare insurance and onboarding',
    description: 'Get direction on commercial insurance, required documents, broker setup, and operational readiness before launch.',
  },
  {
    icon: Headphones,
    title: 'Let FreightSync manage operations',
    description: 'FreightSync supports dispatch, load sourcing, reporting, settlements, driver recruiting support, and daily operating workflows.',
  },
]

const managedSupport = [
  { icon: Truck, label: 'Vehicle guidance' },
  { icon: ShieldCheck, label: 'Insurance direction' },
  { icon: ClipboardCheck, label: 'Onboarding support' },
  { icon: Headphones, label: 'Dispatch operations' },
  { icon: UserPlus, label: 'Driver recruiting support' },
  { icon: Handshake, label: 'Broker onboarding' },
  { icon: BarChart3, label: 'Owner reporting' },
  { icon: FileCheck2, label: 'Settlement visibility' },
  { icon: Wrench, label: 'Operations guidance' },
]

const partnerFit = [
  'Investors who want to own trucking assets without managing daily dispatch',
  'Owner-operators preparing to add equipment and reporting discipline',
  'Small fleet builders who need operating support, visibility, and settlement structure',
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-secondary py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="home-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#home-grid)" />
          </svg>
        </div>

        <Container>
          <div className="relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/20">
                <WalletCards className="h-4 w-4 text-cyan" />
                <span className="text-white/90 text-sm font-medium">Carrier Accelerator Program</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.12] text-white tracking-tight">
                Vehicle Ownership With Managed Trucking Operations
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-3xl">
                FreightSync helps investors and owner-partners buy or finance trucking vehicles, navigate insurance and onboarding, and operate through managed dispatch, reporting, and freight operations support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/carrier-accelerator-program" variant="teal" size="lg">
                  Explore Carrier Program
                </Button>
                <Button href="/carrier-accelerator-program#consultation" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent">
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/freightsync-logo.png"
                  alt="FreightSync TMS logo"
                  width={72}
                  height={72}
                  priority
                  className="h-14 w-auto"
                />
                <div>
                  <p className="text-sm font-semibold text-cyan">FreightSync TMS</p>
                  <h2 className="text-2xl font-bold text-navy">Owner-Partner Model</h2>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ['You own the asset', 'Vehicle title, financing, and insurance stay aligned to your ownership structure.'],
                  ['FreightSync runs the operation', 'Dispatch, load coordination, reporting, settlements, and operating support are managed through FreightSync.'],
                  ['You track performance', 'Owner reporting and TMS visibility help you monitor revenue, costs, and operational activity.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg bg-muted p-4">
                    <h3 className="font-bold text-navy">{title}</h3>
                    <p className="text-sm text-neutral mt-1">{body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-neutral">
                FreightSync does not guarantee revenue, profit, utilization, or investment returns.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              A Cleaner Path From Vehicle Ownership to Operations
            </h2>
            <p className="text-lg text-neutral">
              The Carrier Accelerator Program is built for people who want exposure to trucking assets but do not want to manage every dispatch call, broker setup, driver issue, and weekly settlement alone.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {ownershipPath.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/10 to-teal/10">
                  <item.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-neutral">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What FreightSync Helps Manage</h2>
              <p className="text-lg text-neutral mb-6">
                FreightSync combines operating experience with TMS visibility so owner-partners can see the activity behind their trucking asset.
              </p>
              <Button href="/carrier-accelerator-program" variant="primary">
                View Program Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {managedSupport.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-white p-5">
                  <item.icon className="h-6 w-6 text-cyan mb-3" />
                  <h3 className="font-bold text-navy">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Built for Investor-Owners and Fleet Builders</h2>
              <p className="text-lg text-neutral mb-6">
                FreightSync is positioned as a vehicle investment and managed trucking operations company, not just another software vendor.
              </p>
              <div className="space-y-3">
                {partnerFit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-neutral">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-gradient-to-br from-navy to-royal p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to evaluate your first vehicle?</h2>
              <p className="text-white/85 mb-6">
                Start with the Carrier Accelerator consultation form. FreightSync will review your equipment plan, authority status, insurance needs, driver needs, and launch timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/carrier-accelerator-program#consultation" variant="teal">
                  Get Started
                </Button>
                <a
                  href="https://portal.freightsynctms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-navy"
                >
                  Access Owner Dashboard
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
