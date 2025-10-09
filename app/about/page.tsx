import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Shield, Users, Zap, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about FreightSync TMS and our mission to modernize last-mile delivery.',
}

const values = [
  {
    icon: <Shield className="w-full h-full" />,
    title: 'Reliability',
    description: 'Built by logistics operators who understand uptime is everything'
  },
  {
    icon: <Users className="w-full h-full" />,
    title: 'Customer Success',
    description: "Your growth is our success. We're invested in your outcomes"
  },
  {
    icon: <Zap className="w-full h-full" />,
    title: 'Innovation',
    description: 'Continuously improving to stay ahead of industry needs'
  },
  {
    icon: <Heart className="w-full h-full" />,
    title: 'Simplicity',
    description: 'Powerful features without the complexity'
  }
]

export default function About() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
              Built by operators, for operators
            </h1>
            <p className="text-xl text-neutral">
              We're on a mission to modernize last-mile delivery with software that 
              actually works for real-world logistics operations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral">
                <p>
                  FreightSync was founded by former logistics operators who experienced firsthand 
                  the challenges of managing last-mile delivery with outdated software. After years 
                  of wrestling with legacy TMS systems that were built for long-haul trucking, not 
                  modern urban delivery, we decided to build something better.
                </p>
                <p>
                  We started in Charlotte, NC, working closely with local couriers and 3PLs to 
                  understand their real pain points. The result is a TMS purpose-built for the 
                  complexity of last-mile delivery: multi-stop routes, tight delivery windows, 
                  real-time tracking, and automated billing.
                </p>
                <p>
                  Today, we serve delivery operations across the Southeast, with planned expansion 
                  to Houston, TX. Our team brings decades of combined experience in logistics, 
                  software development, and customer success.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Credibility & Compliance
              </h2>
              <p className="text-neutral">
                As active DOT/FMCSA operators ourselves, we understand the regulatory requirements 
                and operational realities of transportation. FreightSync is built with compliance 
                in mind, from ELD integration to audit logs and data retention policies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHeading title="Our Values" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join us in modernizing last-mile delivery
            </h2>
            <Button href="/contact" variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
