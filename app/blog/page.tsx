import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  Banknote,
  ClipboardCheck,
  Fuel,
  Gauge,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transportation Market Brief',
  description: 'Fuel prices, insurance trends, freight market updates, and operating insights for trucking owners and investors.',
}

const categories = [
  { label: 'Fuel Prices', icon: Fuel },
  { label: 'Insurance', icon: ShieldCheck },
  { label: 'Freight Demand', icon: Gauge },
  { label: 'Regulations', icon: ClipboardCheck },
  { label: 'Driver Market', icon: Users },
  { label: 'Operating Costs', icon: Wrench },
]

const insights = [
  {
    title: 'How fuel volatility affects owner cash flow',
    category: 'FreightSync Insight',
    date: 'Evergreen',
    excerpt: 'Fuel is one of the largest variable costs in trucking. Owners should review fuel surcharge treatment, route efficiency, deadhead miles, and weekly reporting before judging vehicle performance.',
  },
  {
    title: 'Commercial insurance is a launch-plan item, not an afterthought',
    category: 'FreightSync Insight',
    date: 'Evergreen',
    excerpt: 'Premiums, coverage requirements, driver history, freight type, and operating radius can materially change startup capital needs for a semi truck or Sprinter van.',
  },
  {
    title: 'What small fleet investors should watch in the load market',
    category: 'FreightSync Insight',
    date: 'Evergreen',
    excerpt: 'Freight demand, lane selection, broker onboarding, equipment fit, and driver availability all shape utilization. Market knowledge works best when paired with disciplined operations.',
  },
]

const operatingTopics = [
  'Diesel and gas price trends',
  'Commercial insurance changes',
  'Freight market conditions',
  'Trucking regulations',
  'Driver recruiting updates',
  'Maintenance and operating cost trends',
  'Broker and load market updates',
  'Small fleet owner tips',
]

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-royal to-secondary py-16 sm:py-24 text-white">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan mb-6">
              <Truck className="h-4 w-4" />
              FreightSync Market Brief
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] mb-6">
              Transportation Market Brief
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-3xl">
              Fuel prices, insurance trends, freight market updates, and operating insights for trucking owners and investors.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Market Categories</h2>
              <p className="text-lg text-neutral">
                Updated regularly with trucking market insights, fuel trends, insurance changes, and operating cost updates.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.label} className="rounded-lg border border-border bg-muted p-5">
                  <category.icon className="h-6 w-6 text-cyan mb-3" />
                  <h3 className="font-bold text-navy">{category.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 bg-muted">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">Featured Insights</h2>
              <p className="text-neutral max-w-2xl">
                These are educational FreightSync insights, not live news articles. Source and date labels will be shown when RSS or a news API is enabled.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-neutral">
              Live daily news: staged for future RSS/API setup
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {insights.map((post) => (
              <article key={post.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-4 text-sm">
                  <span className="font-semibold text-cyan">{post.category}</span>
                  <span className="text-neutral">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{post.title}</h3>
                <p className="text-neutral mb-5">{post.excerpt}</p>
                <Link href="/carrier-accelerator-program" className="inline-flex items-center text-sm font-semibold text-cyan hover:text-teal">
                  Apply the insight to ownership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What We Track</h2>
              <p className="text-lg text-neutral mb-6">
                The Market Brief is structured around the operating inputs that can affect trucking asset performance.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {operatingTopics.map((topic) => (
                  <div key={topic} className="flex items-start gap-3 rounded-lg bg-muted p-4">
                    <Banknote className="h-5 w-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-navy">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-gradient-to-br from-navy to-royal p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Want to turn market knowledge into a managed trucking investment?</h2>
              <p className="text-white/85 mb-6">
                Explore how FreightSync helps owner-partners evaluate vehicles, prepare insurance and onboarding, and operate through dispatch, reporting, and managed trucking support.
              </p>
              <Button href="/carrier-accelerator-program" variant="teal">
                Explore the Carrier Accelerator Program
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
