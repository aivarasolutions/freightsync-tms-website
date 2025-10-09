import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import integrations from '@/data/integrations.json'

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect FreightSync TMS with your existing ERP, WMS, ELD, and carrier systems.',
}

export default function Integrations() {
  const groupedIntegrations = integrations.reduce((acc, integration) => {
    if (!acc[integration.category]) {
      acc[integration.category] = []
    }
    acc[integration.category].push(integration)
    return acc
  }, {} as Record<string, typeof integrations>)

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Connect your entire tech stack
            </h1>
            <p className="text-xl text-neutral">
              FreightSync integrates seamlessly with the tools you already use
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Built for integration
              </h2>
              <div className="space-y-4 text-neutral">
                <p>
                  FreightSync connects with your existing systems through our robust API platform 
                  and pre-built integrations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    RESTful API with comprehensive documentation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Real-time webhooks for event-driven workflows
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    EDI 204/214 support for carrier communication
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Custom integration development available
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-md font-semibold text-center flex-1">
                    ERP/WMS
                  </div>
                  <div className="text-neutral">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-md font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-md font-semibold text-center flex-1">
                    Carrier APIs
                  </div>
                  <div className="text-neutral">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-md font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-md font-semibold text-center flex-1">
                    ELD/Telematics
                  </div>
                  <div className="text-neutral">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-md font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-neutral mb-2">↓</div>
                  <div className="px-6 py-3 bg-secondary text-white rounded-md font-semibold">
                    Driver App
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {Object.entries(groupedIntegrations).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-bold text-secondary mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {items.map((integration) => (
                    <div
                      key={integration.name}
                      className="px-4 py-3 bg-white border border-border rounded-md text-center"
                    >
                      {integration.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need a custom integration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team can build custom integrations for your specific requirements
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
