import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'How to choose a TMS for last-mile delivery',
  description: 'A comprehensive guide to selecting the right transportation management system for your delivery operation.',
}

export default function TMSGuideArticle() {
  return (
    <>
      <article className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-primary hover:underline">
                ← Back to Blog
              </Link>
            </div>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
                How to choose a TMS for last-mile delivery
              </h1>
              <div className="flex items-center gap-4 text-neutral">
                <time>October 1, 2024</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral mb-8">
                Choosing the right Transportation Management System (TMS) can make or break your 
                last-mile delivery operation. Here's what you need to know.
              </p>

              <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">
                Why last-mile delivery needs a specialized TMS
              </h2>
              <p className="text-neutral mb-6">
                Traditional TMS solutions were built for long-haul trucking and LTL operations. 
                Last-mile delivery has fundamentally different requirements:
              </p>
              <ul className="space-y-3 text-neutral mb-8">
                <li>High-volume, multi-stop routes (50-200+ stops per route)</li>
                <li>Tight delivery windows (2-hour or same-day delivery)</li>
                <li>Real-time customer communication and tracking</li>
                <li>Complex billing with accessorial charges</li>
                <li>Integration with e-commerce and retail systems</li>
              </ul>

              <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">
                Key features to look for
              </h2>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">
                1. Route Optimization
              </h3>
              <p className="text-neutral mb-6">
                The backbone of last-mile efficiency. Your TMS should handle:
              </p>
              <ul className="space-y-2 text-neutral mb-6">
                <li>Multi-stop route optimization (not just point-to-point)</li>
                <li>Time window constraints</li>
                <li>Vehicle capacity and type considerations</li>
                <li>Real-time traffic data integration</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">
                2. Mobile Driver Experience
              </h3>
              <p className="text-neutral mb-6">
                Your drivers are the face of your business. They need:
              </p>
              <ul className="space-y-2 text-neutral mb-6">
                <li>Intuitive mobile app (iOS and Android)</li>
                <li>Turn-by-turn navigation</li>
                <li>Digital proof of delivery (photos, signatures)</li>
                <li>Offline mode for areas with poor connectivity</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">
                3. Automated Billing & Invoicing
              </h3>
              <p className="text-neutral mb-6">
                Manual invoicing is a bottleneck. Look for:
              </p>
              <ul className="space-y-2 text-neutral mb-6">
                <li>Automated invoice generation from completed deliveries</li>
                <li>Accessorial charge calculation (redelivery, wait time, etc.)</li>
                <li>Carrier settlement automation</li>
                <li>Integration with accounting systems</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">
                4. Integrations
              </h3>
              <p className="text-neutral mb-6">
                Your TMS needs to play well with your existing tech stack:
              </p>
              <ul className="space-y-2 text-neutral mb-6">
                <li>ERP/WMS integration (SAP, Oracle, Manhattan, etc.)</li>
                <li>E-commerce platforms (Shopify, WooCommerce)</li>
                <li>ELD/telematics systems (Samsara, Geotab)</li>
                <li>Carrier APIs and EDI</li>
              </ul>

              <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">
                Questions to ask vendors
              </h2>
              <ol className="space-y-4 text-neutral mb-8 list-decimal list-inside">
                <li>How long does implementation typically take?</li>
                <li>What's included in onboarding and training?</li>
                <li>How do you handle data migration from our current system?</li>
                <li>What's your API documentation like?</li>
                <li>Do you offer a pilot program or proof of concept?</li>
                <li>What are your SLA guarantees for uptime?</li>
                <li>How is customer support structured? (hours, response times)</li>
              </ol>

              <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">
                Implementation timeline
              </h2>
              <p className="text-neutral mb-6">
                A realistic implementation timeline for a last-mile TMS:
              </p>
              <ul className="space-y-3 text-neutral mb-8">
                <li><strong>Week 1-2:</strong> Discovery, configuration, and data migration</li>
                <li><strong>Week 3:</strong> User training and pilot testing</li>
                <li><strong>Week 4:</strong> Full rollout and go-live</li>
              </ul>

              <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">
                Measuring success
              </h2>
              <p className="text-neutral mb-6">
                Track these metrics to validate your TMS investment:
              </p>
              <ul className="space-y-3 text-neutral mb-8">
                <li>On-time delivery rate</li>
                <li>Route efficiency (miles per stop, stops per hour)</li>
                <li>Invoicing time (from delivery to invoice)</li>
                <li>Customer satisfaction scores</li>
                <li>Operational cost per delivery</li>
              </ul>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Ready to modernize your last-mile operations?
                </h3>
                <p className="text-neutral mb-6">
                  FreightSync offers all the features covered in this guide, built specifically 
                  for last-mile delivery. See it in action with a personalized demo.
                </p>
                <div className="flex gap-4">
                  <Button href="/contact">Request Demo</Button>
                  <Button href="/features" variant="outline">View Features</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  )
}
