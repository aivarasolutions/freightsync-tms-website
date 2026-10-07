'use client'

import { useState } from 'react'
import { ArrowUpRight, CircleAlert } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { NetworkLink } from '@/components/carrier-network/NetworkLink'
import { services } from '@/lib/carrier-network'

export function CarrierNetworkVideo({ source = 'Carrier Network video' }: { source?: string }) {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section aria-labelledby="carrier-network-video-title" className="overflow-hidden bg-muted py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-border bg-white p-5 shadow-sm sm:gap-10 sm:p-8 lg:grid-cols-[minmax(250px,.78fr)_1.22fr] lg:p-10">
          <div className="mx-auto w-full max-w-[300px]">
            {videoFailed ? (
              <div className="flex aspect-[9/16] flex-col items-center justify-center rounded-xl border border-border bg-navy px-6 text-center text-white">
                <CircleAlert aria-hidden="true" className="mb-4 h-8 w-8 text-cyan" />
                <p className="text-lg font-bold">The video couldn’t load.</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  You can still explore the Carrier Network or contact our team.
                </p>
                <NetworkLink
                  href="/contact?source=carrier-network-video-error"
                  source={`${source} video error`}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 font-bold text-navy transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  Contact FreightSync <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </NetworkLink>
                <a
                  className="mt-3 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
                  href="/videos/freightsync-carrier-network.mp4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the video file directly
                </a>
              </div>
            ) : (
              <video
                className="block aspect-[9/16] h-auto max-h-[min(76vh,680px)] w-full rounded-xl bg-navy object-contain shadow-lg"
                aria-label="FreightSync Carrier Network: a 20-second introduction for vehicle owners and drivers."
                controls
                playsInline
                preload="none"
                poster="/videos/freightsync-carrier-network-poster.jpg"
                onError={() => setVideoFailed(true)}
              >
                <source src="/videos/freightsync-carrier-network.mp4" type="video/mp4" onError={() => setVideoFailed(true)} />
                Your browser does not support embedded video. <a href="/videos/freightsync-carrier-network.mp4">Open the video directly.</a>
              </video>
            )}
          </div>

          <div className="py-1">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan">FreightSync Carrier Network</p>
            <h2 id="carrier-network-video-title" className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Have a vehicle? Put practical support behind it.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral">
              Independent vehicle owners and drivers can join the Carrier Network for transportation tools and operational support. Watch the 20-second overview, then choose a next step.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <NetworkLink
                href="/get-started?source=carrier-network-video"
                source={source}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-center font-bold text-white transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Get Started <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </NetworkLink>
              <NetworkLink
                href="/contact?source=carrier-network-video"
                source={source}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-navy px-5 py-3 text-center font-bold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Contact Us <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </NetworkLink>
            </div>

            <ul className="mt-7 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
              {services.map(service => (
                <li key={service.id} className="rounded-lg bg-muted/70 p-3">
                  <p className="font-bold text-navy">{service.name.replace('FreightSync ', '')}</p>
                  <p className="mt-1 text-sm text-neutral">{service.price}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-neutral">
              Your first month’s $49 subscription is free; applicable percentage fees still apply. Dispatch fees apply only to completed loads FreightSync dispatches or directly manages; fleet management fees apply only to completed FreightSync-managed loads. Freight availability and loads are not guaranteed.
            </p>

            <details className="mt-5 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-neutral">
              <summary className="cursor-pointer font-semibold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan">
                Video overview in text
              </summary>
              <p className="mt-2 leading-relaxed">
                The video invites vehicle owners and drivers to join the Carrier Network, introduces the three service plans listed above, and shows how to submit an application. The first month’s $49 subscription is free; applicable percentage fees still apply to qualifying completed loads. Get started to apply or contact FreightSync with questions. Loads are not guaranteed.
              </p>
            </details>
          </div>
        </div>
      </Container>
    </section>
  )
}
