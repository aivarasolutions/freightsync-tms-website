import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Truck, Clock, MapPin, Shield, CheckCircle2 } from 'lucide-react'
import features from '@/data/features.json'
import stats from '@/data/stats.json'
import testimonials from '@/data/testimonials.json'

const coreServices = [
  {
    icon: Truck,
    title: 'Less Than Truckload (LTL)',
    description: 'Cost-effective shipping for smaller loads that don\'t require a full truck'
  },
  {
    icon: Clock,
    title: 'Next-Day Delivery',
    description: 'Fast, reliable delivery service to meet your customers\' urgent needs'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Live GPS tracking and status updates for complete shipment visibility'
  },
  {
    icon: Shield,
    title: 'Damage-Free Transport',
    description: 'Professional handling and secure packaging to protect your cargo'
  }
]

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-secondary to-navy py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"></div>
        </div>
        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Truck className="h-5 w-5 text-teal" />
              <span className="text-white/90 text-sm font-medium">Full-Service Logistics Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-white">Freight</span>
              <span className="text-teal">Sync</span>
              <span className="text-white"> TMS</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light">
              Your Complete Blueprint for Launching and Scaling a Full-Service Logistics Business
            </p>
            <p className="text-lg text-teal mb-10 max-w-2xl mx-auto">
              Charlotte, North Carolina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="teal" size="lg">
                Get Started Today
              </Button>
              <Button href="/features" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="#1a365d" fillOpacity="0.3"/>
          </svg>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Core Delivery Services
            </h2>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Comprehensive logistics solutions designed for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-muted rounded-xl p-6 border border-border hover:border-teal hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <service.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-neutral text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Trusted by Growing Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-teal">{stat.value}</div>
                <div className="text-lg text-neutral">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Complete Transportation Management System
                </h2>
                <p className="text-lg text-neutral mb-6">
                  FreightSync TMS is your all-in-one software solution for managing fleet operations, dispatch, load tracking, driver payments, and customer invoicing. Built specifically for ambitious logistics companies ready to scale.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Automated dispatch and routing', 'Real-time GPS tracking', 'Driver and carrier management', 'Billing and invoicing automation', 'Performance analytics dashboard'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0" />
                      <span className="text-neutral">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/features" variant="primary">
                  View All Features
                </Button>
              </div>
              <div className="bg-gradient-to-br from-navy to-secondary rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Truck className="h-24 w-24 text-teal mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    <span>Freight</span>
                    <span className="text-teal">Sync</span>
                  </div>
                  <p className="text-white/80">Transportation Management System</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Powerful Features for Modern Logistics
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Everything you need to run efficient delivery operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 6).map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl p-6 border border-border hover:border-teal hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-neutral mb-4">{feature.description}</p>
                {feature.bullets && (
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-neutral flex items-start">
                        <span className="mr-2 text-teal">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/features" variant="outline">
              View All Features
            </Button>
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
            <div className="bg-muted rounded-2xl p-8 sm:p-12 border border-border">
              <blockquote className="text-xl sm:text-2xl text-neutral italic mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="text-navy font-semibold">
                {testimonials[0].author}
              </div>
              <div className="text-neutral">
                {testimonials[0].role}, {testimonials[0].company}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-r from-navy to-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Scale Your Logistics Business?
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Join growing logistics companies using FreightSync TMS to streamline operations.
            </p>
            <p className="text-lg mb-8 text-teal">
              Call us: 281-310-1114 | Charlotte, North Carolina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="teal" size="lg">
                Get Started Today
              </Button>
              <Button href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
