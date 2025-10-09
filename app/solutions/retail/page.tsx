import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/Button'
import { Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail Delivery Solutions',
  description: 'TMS software for retail delivery teams managing same-day and next-day fulfillment.',
}

const painPoints = [
  {
    pain: 'Same-day delivery windows',
    solution: 'Dynamic Route Planning',
    description: 'Real-time route adjustments to meet tight delivery windows'
  },
  {
    pain: 'Customer communication',
    solution: 'Live Tracking & Notifications',
    description: 'Keep customers informed with real-time ETAs and delivery updates'
  },
  {
    pain: 'Returns management',
    solution: 'Reverse Logistics',
    description: 'Handle returns and exchanges seamlessly with built-in workflows'
  }
]

export default function RetailSolution() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <Store className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Retail Delivery Teams
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Deliver exceptional customer experiences
            </h1>
            <p className="text-xl text-gray-700">
              Meet customer expectations with fast, reliable delivery and real-time visibility.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Retail delivery made simple" />
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.pain}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                "Our delivery success rate went from 92% to 98% after implementing FreightSync. 
                Customers love the real-time tracking."
              </blockquote>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                — Logistics Director, Regional Retailer
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to improve your delivery experience?
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
