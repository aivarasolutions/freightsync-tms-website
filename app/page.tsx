import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  Truck, Clock, MapPin, Shield, CheckCircle2, Headphones, Settings,
  LayoutDashboard, FileBarChart, Wallet, Receipt, Activity, Users,
  Building2, Briefcase, Rocket, PhoneCall, ClipboardList, ArrowRight
} from 'lucide-react'

const coreServices = [
  {
    icon: Truck,
    title: 'Less Than Truckload (LTL)',
    description: 'Cost-effective freight movement for smaller loads that do not require a full truck.'
  },
  {
    icon: Clock,
    title: 'Next-Day Delivery',
    description: 'Fast, reliable delivery solutions for time-sensitive shipments and growing businesses.'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Improved shipment visibility with live status updates, route monitoring, and operational oversight.'
  },
  {
    icon: Shield,
    title: 'Damage-Free Transport',
    description: 'Professional handling, secure transport, and careful delivery processes designed to protect your cargo.'
  },
  {
    icon: Headphones,
    title: 'Dispatch & Load Coordination',
    description: 'Round-the-clock dispatch support that keeps your drivers loaded, routed, and moving efficiently.'
  },
  {
    icon: Settings,
    title: 'Fleet Operations Support',
    description: 'Operational guidance for compliance, maintenance scheduling, and day-to-day fleet performance.'
  }
]

const tmsFeatures = [
  { icon: LayoutDashboard, label: 'Load and trip management' },
  { icon: Wallet, label: 'Driver settlement tracking' },
  { icon: Receipt, label: 'Expense and fuel reporting' },
  { icon: Activity, label: 'Owner and vehicle performance dashboards' },
  { icon: FileBarChart, label: 'Weekly settlement reports' },
  { icon: Rocket, label: 'Future GPS and automation integrations' },
]

const whoWeHelp = [
  { icon: Truck, label: 'Owner-operators' },
  { icon: Briefcase, label: 'Small fleet owners' },
  { icon: Headphones, label: 'Dispatch teams' },
  { icon: Building2, label: '3PL providers' },
  { icon: MapPin, label: 'Delivery companies' },
  { icon: Rocket, label: 'Logistics startups' },
]

const whyUs = [
  { title: 'Built by logistics operators', description: 'We have lived the dispatch board, the settlements, and the late-night calls.' },
  { title: 'Service + software in one place', description: 'Real freight expertise paired with a portal built for the same workflows.' },
  { title: 'Clear reporting and settlements', description: 'Transparent numbers your drivers, owners, and accountants can trust.' },
  { title: 'Designed for scaling fleets', description: 'Workflows that hold up whether you run 5 trucks or 500.' },
  { title: 'Streamlined back-office', description: 'Reduce manual work in invoicing, expenses, and driver pay.' },
]

const howItWorks = [
  { step: '1', title: 'Schedule a call', description: 'Tell us about your fleet, freight, and back-office headaches.' },
  { step: '2', title: 'Review your operation', description: 'We map your current dispatch, reporting, and settlement flow.' },
  { step: '3', title: 'Set up services or portal', description: 'Onboard logistics support, the TMS portal, or both.' },
  { step: '4', title: 'Track loads & settlements', description: 'Run loads, expenses, owner reports, and driver pay in one place.' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-secondary py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal/20 rounded-full blur-3xl" aria-hidden="true"></div>

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Truck className="h-4 w-4 text-cyan" />
              <span className="text-white/90 text-sm font-medium">Full-Service Logistics + TMS Technology</span>
            </div>

            <div className="flex justify-center mb-6">
              <Image
                src="/freightsync-logo.png"
                alt="FreightSync TMS logo"
                width={140}
                height={140}
                priority
                className="h-28 w-auto drop-shadow-2xl"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-cyan to-teal bg-clip-text text-transparent">
              FreightSync TMS
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light">
              Logistics Services + Transportation Management Software Built to Help Fleets Scale
            </p>
            <p className="text-base sm:text-lg text-white/70 mb-6 max-w-3xl mx-auto">
              From dispatch and load tracking to driver settlements, reporting, and fleet operations, FreightSync TMS helps logistics companies streamline the back office and move freight with confidence.
            </p>
            <p className="text-sm text-cyan mb-10">
              Charlotte, North Carolina | Serving logistics teams nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="teal" size="lg">
                Get Started Today
              </Button>
              <Button href="/integrations" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent">
                Explore TMS Portal
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Logistics Operations + TMS Technology in One System
            </h2>
            <p className="text-lg text-neutral">
              FreightSync TMS combines real-world logistics operations with a technology platform built for dispatch, load management, driver settlements, reporting, invoicing, and fleet performance tracking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-navy to-royal rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan/20 backdrop-blur-sm mb-4">
                  <Truck className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Logistics Services</h3>
                <ul className="space-y-3">
                  {['Dispatch support', 'Load coordination', 'Fleet operations', 'Driver communication', 'Delivery management'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-cyan to-teal rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <LayoutDashboard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">TMS Portal</h3>
                <ul className="space-y-3">
                  {['Load and trip tracking', 'Expense management', 'Driver settlements', 'Owner reports', 'Performance dashboards'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/95">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Request a Demo or Service Quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Core Delivery Services
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              A full-service logistics partner for freight, fleet, and dispatch operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-border hover:border-cyan hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan/10 to-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan/20 group-hover:to-teal/20 transition-colors">
                  <service.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-neutral text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/features" variant="outline">
              Explore All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-semibold mb-4">
                  <LayoutDashboard className="h-4 w-4" />
                  TMS Software
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Transportation Management Software Built for Growing Fleets
                </h2>
                <p className="text-lg text-neutral mb-6">
                  FreightSync TMS gives logistics teams a centralized portal to manage loads, trips, expenses, driver payments, owner reporting, invoicing, and performance analytics.
                </p>
                <ul className="space-y-3 mb-8">
                  {tmsFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 h-6 w-6 rounded-md bg-gradient-to-br from-cyan to-teal flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-neutral">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="https://portal.freightsynctms.com" variant="teal">
                    Explore the TMS Portal
                  </Button>
                  <Button href="/features" variant="outline">
                    View All Features
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-navy via-royal to-secondary rounded-2xl p-6 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/freightsync-logo.png"
                          alt="FreightSync TMS logo"
                          width={36}
                          height={36}
                          className="h-9 w-auto"
                        />
                        <span className="text-white font-semibold text-sm">FreightSync TMS Portal</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-lg p-4 mb-3 border border-white/10">
                      <div className="text-xs text-white/60 mb-1">Active Loads</div>
                      <div className="text-3xl font-bold text-white">142</div>
                      <div className="text-xs text-cyan mt-1">↑ 12% this week</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10">
                        <div className="text-xs text-white/60">Settlements</div>
                        <div className="text-lg font-bold text-white">$84.2k</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10">
                        <div className="text-xs text-white/60">On-Time</div>
                        <div className="text-lg font-bold text-white">98.4%</div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/60">Fleet Performance</span>
                        <Activity className="h-3.5 w-3.5 text-cyan" />
                      </div>
                      <div className="flex items-end gap-1 h-12">
                        {[40, 65, 50, 75, 60, 85, 70, 90].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-cyan to-teal rounded-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Who We Help</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Built for the operators running today&apos;s freight and fleet businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {whoWeHelp.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center border border-border hover:border-cyan transition-colors">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan/10 to-teal/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-cyan" />
                </div>
                <div className="text-sm font-semibold text-navy">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Why FreightSync TMS</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Real logistics expertise plus the software to back it up.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-muted rounded-xl p-6 border border-border hover:border-cyan transition-colors">
                <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-navy to-royal flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-neutral text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-muted to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              A simple path from first call to running freight in the FreightSync TMS.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, idx) => {
              const Icon = [PhoneCall, ClipboardList, Settings, Activity][idx]
              return (
                <div key={idx} className="relative bg-white rounded-xl p-6 border border-border">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-teal text-white flex items-center justify-center font-bold shadow-md">
                    {item.step}
                  </div>
                  <Icon className="h-8 w-8 text-cyan mb-4 mt-2" />
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-neutral text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-muted to-white rounded-2xl p-8 sm:p-12 border border-border shadow-sm">
              <blockquote className="text-xl sm:text-2xl text-neutral italic mb-6">
                &ldquo;FreightSync gave us real-time visibility and cut our invoicing time from days to hours. We couldn&apos;t have scaled this fast without it.&rdquo;
              </blockquote>
              <div className="text-navy font-semibold">Jordan A.</div>
              <div className="text-neutral text-sm">Ops Director, FleetCo</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-navy via-royal to-secondary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Streamline Your Freight Operations?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Whether you need logistics support, dispatch systems, fleet reporting, or a full TMS portal, FreightSync TMS is built to help your operation scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button href="/contact" variant="teal" size="lg">
                Get Started Today
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent">
                Request a TMS Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
              <a href="tel:281-310-1114" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <PhoneCall className="h-4 w-4 text-cyan" />
                <span className="text-white">281-310-1114</span>
              </a>
              <a href="mailto:Admin@FreightSyncTMS.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <Users className="h-4 w-4 text-cyan" />
                <span className="text-white">Admin@FreightSyncTMS.com</span>
              </a>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/20">
                <MapPin className="h-4 w-4 text-cyan" />
                <span className="text-white">Charlotte, NC</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
