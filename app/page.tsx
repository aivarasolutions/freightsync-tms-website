import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import features from '@/data/features.json'
import stats from '@/data/stats.json'
import testimonials from '@/data/testimonials.json'

export default function Home() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
              A smarter way to manage last-mile delivery
            </h1>
            <p className="text-xl sm:text-2xl text-neutral mb-10 max-w-3xl mx-auto">
              Dispatch faster, automate billing, and keep trucks full with FreightSync TMS—built for ambitious logistics teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Talk to an Expert
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Where ambition grows
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-primary">{stat.value}</div>
                <div className="text-lg text-neutral">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                  Transportation Management System (TMS)
                </h2>
                <p className="text-lg text-neutral mb-6">
                  Get ahead with an all-in-one software tool for managing all of your fleet operations. Whether it's dispatch, load tracking, truck location, or managing finances such as paying drivers and invoicing customers—FreightSync TMS supports the growth of ambitious logistics companies everywhere.
                </p>
                <Button href="/features" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-bold text-primary mb-4">TMS</div>
                  <p className="text-neutral">All-in-one platform</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Powerful features for modern logistics
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Everything you need to run efficient last-mile delivery operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 6).map((feature) => (
              <div key={feature.id} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-neutral mb-4">{feature.description}</p>
                {feature.bullets && (
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-neutral flex items-start">
                        <span className="mr-2 text-accent">•</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              What our customers say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg p-8 sm:p-12">
              <blockquote className="text-xl sm:text-2xl text-neutral italic mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="text-secondary font-semibold">
                {testimonials[0].name}
              </div>
              <div className="text-neutral">
                {testimonials[0].role}, {testimonials[0].company}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to grow your fleet?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of logistics professionals using FreightSync to scale their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Talk to an Expert
              </Button>
              <Button href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
