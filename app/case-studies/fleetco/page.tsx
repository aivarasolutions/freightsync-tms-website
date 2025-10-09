import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Stat } from '@/components/ui/Stat'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FleetCo Case Study',
  description: 'How FleetCo scaled their last-mile delivery operations with FreightSync TMS.',
}

const metrics = [
  { value: '200+', label: 'Daily routes', description: 'Up from 50 routes' },
  { value: '3×', label: 'Faster invoicing', description: 'Days to hours' },
  { value: '98%', label: 'On-time delivery', description: 'Up from 92%' },
  { value: '22%', label: 'Cost reduction', description: 'In operational overhead' }
]

export default function FleetCoCaseStudy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary dark:text-white mb-6">
              FleetCo scaled last-mile delivery with FreightSync
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A regional courier service grew from 50 to 200+ daily routes without adding 
              operational overhead.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, idx) => (
              <Stat key={idx} {...metric} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                The Challenge
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                FleetCo, a Charlotte-based courier service, was struggling to keep up with demand. 
                Their legacy TMS couldn't handle the complexity of multi-stop routes, and manual 
                processes were creating bottlenecks in billing and dispatch.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Dispatchers spending 3+ hours planning routes manually
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Billing team taking 5-7 days to generate invoices
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Limited visibility into driver locations and ETAs
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                FreightSync implemented a complete TMS transformation in just 3 weeks:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Automated route optimization reduced planning time to minutes
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Mobile driver app provided real-time visibility
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Automated invoicing cut billing time by 3×
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                The Outcome
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Within 6 months, FleetCo quadrupled their capacity without hiring additional 
                dispatchers or billing staff. They're now planning expansion to Houston using 
                the same FreightSync platform.
              </p>
            </div>

            <div className="bg-muted dark:bg-gray-800 p-8 rounded-xl">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                "FreightSync gave us real-time visibility and cut our invoicing time from days 
                to hours. We couldn't have scaled this fast without it."
              </blockquote>
              <div>
                <div className="font-semibold text-secondary dark:text-white">Jordan A.</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Ops Director, FleetCo
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
              Ready to scale like FleetCo?
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
