import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { TransportationNews } from '@/components/blog/TransportationNews'
import { getTransportationNews } from '@/lib/transport-news'

export const revalidate = 1800
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Transportation Market Brief | FreightSync',
  description: 'Current transportation headlines from trucking and energy sources, plus practical FreightSync guides for independent operators and fleets.',
}

export default async function Blog() {
  const feed = await getTransportationNews()

  return (
    <main>
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,.22),transparent_60%)] lg:block" />
        <Container>
          <div className="relative max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan">
              <BriefcaseBusiness className="h-4 w-4" />
              FreightSync Market Brief
            </div>
            <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
              Transportation, in context.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
              Reporting on the forces moving independent operators and fleets—plus clear-eyed guidance for running the business behind every mile.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 sm:py-20">
        <Container>
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">The latest</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Transportation headlines</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral">
              A focused read on freight, fuel, technology, and the policies shaping day-to-day transportation work.
            </p>
          </div>
          <TransportationNews feed={feed} />
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 rounded-2xl border border-border bg-gradient-to-br from-white to-cyan/5 p-6 shadow-sm sm:p-9 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan"><BookOpen className="h-4 w-4" /> FreightSync field guide</p>
              <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">How to choose a TMS for your operation</h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral">An evergreen guide to evaluating transportation software, support, workflows, and the fit for your business. This is FreightSync guidance—not a live news report.</p>
            </div>
            <Link href="/blog/how-to-choose-a-tms" className="inline-flex items-center justify-center gap-2 self-center rounded-lg bg-navy px-5 py-3 font-bold text-white transition hover:bg-royal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan">
              Read the guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
