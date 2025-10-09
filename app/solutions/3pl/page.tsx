import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/Button'
import { Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '3PL Solutions',
  description: 'TMS software for third-party logistics providers managing multiple customers and carriers.',
}

const painPoints = [
  {
    pain: 'Managing multiple customers',
    solution: 'Multi-tenant Architecture',
    description: 'Separate workspaces for each customer with custom branding and billing'
  },
  {
    pain: 'Carrier network complexity',
    solution: 'Carrier Management',
    description: 'Manage your entire carrier network with performance tracking and rate cards'
  },
  {
    pain: 'Complex billing requirements',
    solution: 'Flexible Billing Engine',
    description: 'Handle customer invoicing and carrier settlements with custom rules'
  }
]

export default function ThreePLSolution() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                3PL Providers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Scale your 3PL operations with confidence
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Manage multiple customers, carriers, and complex billing scenarios in one unified platform.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Built for 3PL complexity" />
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
                "FreightSync helped us onboard 10 new customers in Q4 without adding operational overhead. 
                The multi-tenant features are game-changing."
              </blockquote>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                — CEO, Regional 3PL Provider
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to grow your 3PL business?
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
