import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
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
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <Container>
          <SectionHeading
            title="Connect your entire tech stack"
            subtitle="FreightSync integrates seamlessly with the tools you already use"
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">
                Built for integration
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
                <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
                  Developer docs available on request
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center flex-1">
                    ERP/WMS
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-lg font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center flex-1">
                    Carrier APIs
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-lg font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center flex-1">
                    ELD/Telematics
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="px-6 py-3 bg-accent text-white rounded-lg font-semibold text-center flex-1">
                    FreightSync
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400 mb-2">↓</div>
                  <div className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold">
                    Driver App
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {Object.entries(groupedIntegrations).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-secondary dark:text-white mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {items.map((integration) => (
                    <div
                      key={integration.name}
                      className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center"
                    >
                      {integration.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              Need a custom integration?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team can build custom integrations for your specific requirements
            </p>
            <Button href="/contact" size="lg">
              Contact Sales
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
