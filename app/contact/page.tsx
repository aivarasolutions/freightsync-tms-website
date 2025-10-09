import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with FreightSync TMS. Request a demo or speak with our sales team.',
}

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 py-20">
        <Container>
          <SectionHeading
            title="Let's talk about your delivery operations"
            subtitle="Request a demo or get in touch with our team"
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-secondary dark:text-white mb-6">
                Get a personalized demo
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                See how FreightSync can streamline your last-mile delivery operations. 
                We'll tailor the demo to your specific needs and use cases.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">contact@freightsynctms.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary dark:text-white">Phone</div>
                    <div className="text-gray-600 dark:text-gray-400">1-800-FREIGHT (1-800-373-4448)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary dark:text-white">Office</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Charlotte, NC<br />
                      Houston, TX (coming soon)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="font-semibold text-secondary dark:text-white mb-3">
                  What to expect
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    30-minute personalized demo
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Q&A with our solutions team
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    Custom pricing based on your needs
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">•</span>
                    No commitment required
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
