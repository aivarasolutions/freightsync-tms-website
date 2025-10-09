import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/Button'
import { Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Last-Mile Delivery Solutions',
  description: 'TMS software built specifically for last-mile delivery operators.',
}

const painPoints = [
  {
    pain: 'Complex routing with multiple stops',
    solution: 'Route Optimization',
    description: 'AI-powered routing that handles 100+ stops per route with time window constraints'
  },
  {
    pain: 'Driver communication gaps',
    solution: 'Mobile Driver App',
    description: 'Real-time updates, digital POD, and in-app messaging keep drivers connected'
  },
  {
    pain: 'Manual billing processes',
    solution: 'Automated Invoicing',
    description: 'Generate accurate invoices automatically based on completed deliveries'
  }
]

export default function LastMileSolution() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Last-Mile Operators
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for the complexity of last-mile delivery
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Handle high-volume, multi-stop routes with ease. From dispatch to delivery, 
              FreightSync streamlines every step of last-mile operations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Your challenges, our solutions" />
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
                "We went from struggling with 50 deliveries a day to easily handling 200+ routes. 
                FreightSync scaled with us."
              </blockquote>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                — Operations Manager, Urban Courier Services
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to optimize your last-mile operations?
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
