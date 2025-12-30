import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FeatureCard } from '@/components/ui/FeatureCard'
import features from '@/data/features.json'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Powerful features for modern last-mile delivery operations.',
}

const additionalFeatures = [
  {
    id: 'admin',
    title: 'Admin & Permissions',
    description: 'Granular role-based access control with audit logging.',
    bullets: [
      'Role-based permissions',
      'Audit logs for compliance',
      'Team management'
    ]
  },
  {
    id: 'api',
    title: 'APIs & Webhooks',
    description: 'REST APIs and webhooks for seamless integrations.',
    bullets: [
      'RESTful API access',
      'Real-time webhooks',
      'Developer documentation'
    ]
  }
]

export default function Features() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Powerful features for modern logistics
            </h1>
            <p className="text-xl text-neutral">
              Everything you need to run efficient last-mile delivery operations
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <div key={feature.id} id={feature.id}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  bullets={feature.bullets}
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature) => (
              <div key={feature.id} id={feature.id}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  bullets={feature.bullets}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to see these features in action?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a personalized demo with our team.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to an Expert
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
