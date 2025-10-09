import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Stat } from '@/components/ui/Stat'
import { Testimonial } from '@/components/ui/Testimonial'
import { FAQ } from '@/components/ui/FAQ'
import { ArrowRight, Package, Route, Smartphone, Users, FileText, BarChart3, CheckCircle2, Shield } from 'lucide-react'
import features from '@/data/features.json'
import stats from '@/data/stats.json'
import testimonials from '@/data/testimonials.json'

const painToOutcome = [
  {
    title: 'Route chaos → Optimized routes',
    description: 'Eliminate inefficient routing with AI-powered optimization',
    icon: <Route className="w-full h-full" />
  },
  {
    title: 'Billing errors → Automated settlement',
    description: 'Say goodbye to manual invoicing and billing mistakes',
    icon: <FileText className="w-full h-full" />
  },
  {
    title: 'No visibility → Live tracking',
    description: 'Get real-time visibility into your entire operation',
    icon: <BarChart3 className="w-full h-full" />
  }
]

const workflow = [
  'Orders',
  'Plan',
  'Dispatch',
  'Track',
  'Bill',
  'Analyze'
]

const integrations = ['SAP', 'Oracle', 'NetSuite', 'Manhattan', 'Samsara', 'Geotab']

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most customers are up and running within 2-4 weeks. We provide dedicated onboarding support and training.'
  },
  {
    question: 'Do you offer API access?',
    answer: 'Yes, our Growth and Enterprise plans include full REST API access with webhooks for real-time integrations.'
  },
  {
    question: 'Can I migrate my existing data?',
    answer: 'Absolutely. Our team will help you migrate your existing routes, customers, and historical data.'
  }
]

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The modern TMS for last-mile delivery.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8">
              Dispatch faster, automate billing, and integrate carriers—on one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/contact" size="lg">
                Request Demo
              </Button>
              <Button href="/features" variant="outline" size="lg">
                See Features
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Built for couriers, 3PLs, and retail delivery teams.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {painToOutcome.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading 
            title="Everything you need to run last-mile delivery" 
            subtitle="Powerful features built for modern logistics operations"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                bullets={feature.bullets}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="How it works" centered />
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {workflow.map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="px-6 py-3 bg-primary text-white rounded-lg font-semibold">
                  {step}
                </div>
                {idx < workflow.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted dark:bg-gray-900">
        <Container>
          <SectionHeading title="Integrations" centered />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Connect ERP, WMS, ELDs, and carrier APIs. REST + Webhooks available.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((name) => (
              <div key={name} className="px-6 py-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Results that matter" centered />
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <Stat key={idx} {...stat} />
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <Testimonial {...testimonials[0]} />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                  Security & Compliance
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  SSO, audit logs, role-based access; data encrypted in transit & at rest.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Frequently Asked Questions" centered />
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to streamline delivery?
            </h2>
            <Button href="/contact" variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
