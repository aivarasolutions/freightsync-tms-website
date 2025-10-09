import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/ui/PricingCard'
import { FAQ } from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for FreightSync TMS. Choose the plan that fits your business needs.',
}

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small fleets getting started',
    features: [
      'Up to 10 vehicles',
      'Basic dispatch & routing',
      'Mobile driver app',
      'Email support',
      '50 orders per day',
      'Standard reporting'
    ],
  },
  {
    name: 'Growth',
    description: 'For growing operations that need more',
    features: [
      'Up to 100 vehicles',
      'Advanced route optimization',
      'Full API access',
      'SSO available (add-on)',
      'Unlimited orders',
      'Custom reports',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    features: [
      'Unlimited vehicles',
      'White-label options',
      'Custom integrations',
      'SSO & SAML included',
      'Dedicated account manager',
      'SLA guarantee',
      '24/7 priority support'
    ],
  }
]

const faqs = [
  {
    question: 'How is pricing calculated?',
    answer: 'Pricing is based on the number of active vehicles in your fleet and the features you need. Contact us for a custom quote based on your specific requirements.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'Setup and onboarding are included in all plans. We provide dedicated support to get you up and running quickly.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'Do you offer discounts for annual contracts?',
    answer: 'Yes, we offer significant discounts for annual commitments. Contact our sales team to discuss your options.'
  }
]

export default function Pricing() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <Container>
          <SectionHeading
            title="Simple, transparent pricing"
            subtitle="Choose the plan that's right for your business"
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="text-center mb-20">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include: Mobile driver app, real-time tracking, automated billing, and cloud hosting
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQ items={faqs} />
          </div>
        </Container>
      </section>
    </>
  )
}
