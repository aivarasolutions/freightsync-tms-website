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
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get a personalized demo
              </h2>
              <p className="text-neutral mb-8">
                See how FreightSync can streamline your last-mile delivery operations. 
                We'll tailor the demo to your specific needs and use cases.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-navy">Email</div>
                    <a href="mailto:Admin@FreightSyncTMS.com" className="text-neutral hover:text-teal">Admin@FreightSyncTMS.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-navy">Phone</div>
                    <a href="tel:281-310-1114" className="text-neutral hover:text-teal">281-310-1114</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-navy">Office</div>
                    <div className="text-neutral">
                      Charlotte, North Carolina
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <h3 className="font-semibold text-navy mb-3">
                  What to expect
                </h3>
                <ul className="space-y-2 text-neutral">
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

            <div className="bg-white p-8 rounded-xl border border-border">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
