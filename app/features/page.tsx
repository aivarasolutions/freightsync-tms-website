import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/Button'
import features from '@/data/features.json'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover all the powerful features of FreightSync TMS for last-mile delivery and 3PL operations.',
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
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <SectionHeading
            title="Powerful features for modern logistics"
            subtitle="Everything you need to run efficient last-mile delivery operations"
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              See it in action
            </h3>
            <Button href="/contact" size="lg">
              Request Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
