'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ExternalLink, Newspaper, RefreshCw } from 'lucide-react'
import type { NewsCategory, NewsFeed } from '@/lib/transport-news'

const topics: Array<'All topics' | NewsCategory> = [
  'All topics',
  'Fuel & energy',
  'Freight & trucking',
  'Autonomous & technology',
  'Policy & labor',
]

function formatDate(value: string, includeTime = false) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unavailable'
  return new Intl.DateTimeFormat('en-US', includeTime
    ? { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }
    : { dateStyle: 'medium', timeZone: 'UTC' }).format(date) + (includeTime ? ' UTC' : '')
}

export function TransportationNews({ feed }: { feed: NewsFeed }) {
  const [activeTopic, setActiveTopic] = useState<'All topics' | NewsCategory>('All topics')
  const router = useRouter()
  const lastRefresh = useRef(Date.now())
  const articles = useMemo(
    () => activeTopic === 'All topics'
      ? feed.articles
      : feed.articles.filter(article => article.category === activeTopic),
    [activeTopic, feed.articles],
  )
  const checkedDate = feed.checkedAt ? new Date(feed.checkedAt) : null
  const validCheckedDate = checkedDate && !Number.isNaN(checkedDate.getTime()) ? checkedDate : null
  const checkedAt = validCheckedDate ? formatDate(feed.checkedAt, true) : null
  const stale = validCheckedDate !== null && Date.now() - validCheckedDate.getTime() > 2 * 60 * 60 * 1000

  useEffect(() => {
    const refreshIfDue = () => {
      if (document.visibilityState === 'visible' && Date.now() - lastRefresh.current >= 30 * 60 * 1000) {
        lastRefresh.current = Date.now()
        router.refresh()
      }
    }
    const timer = window.setInterval(refreshIfDue, 30 * 60 * 1000)
    document.addEventListener('visibilitychange', refreshIfDue)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', refreshIfDue)
    }
  }, [router])

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-navy">Browse by topic</p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter headlines by topic">
            {topics.map(topic => {
              const selected = activeTopic === topic
              return (
                <button
                  key={topic}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveTopic(topic)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${
                    selected
                      ? 'border-navy bg-navy text-white'
                      : 'border-border bg-white text-navy hover:border-cyan hover:bg-cyan/5'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-sm text-neutral" aria-label={checkedAt ? `Feed checked ${checkedAt}` : 'Feed check time unavailable'}>
          <RefreshCw className="h-4 w-4 text-cyan" aria-hidden="true" />
          <span>{checkedAt ? <>Feed checked <time dateTime={feed.checkedAt}>{checkedAt}</time></> : 'Feed check time unavailable'}</span>
        </div>
      </div>

      {feed.unavailableSources.length > 0 && (
        <p role="status" className="mb-6 rounded-lg border border-cyan/25 bg-white px-4 py-3 text-sm leading-relaxed text-neutral">
          <span className="font-bold text-navy">Partial coverage:</span> Some sources could not be reached for this check ({feed.unavailableSources.join(', ')}). Headlines shown below may not represent the full news picture.
        </p>
      )}

      {stale && checkedAt && (
        <p role="status" className="mb-6 rounded-lg border border-navy/20 bg-navy/5 px-4 py-3 text-sm leading-relaxed text-navy">
          <span className="font-bold">Older source data:</span> {feed.articles.length > 0 ? 'Showing last-good headlines' : 'The most recent successful source check'} from {checkedAt}. This snapshot may be outdated and is not a fresh feed.
        </p>
      )}

      {articles.length > 0 ? (
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3" aria-live="polite" aria-label={`${articles.length} headlines`}>
          {articles.map(article => (
            <article key={article.id} className="flex h-full min-w-0 flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{article.category}</span>
                <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
              </div>
              <h3 className="flex-1 text-xl font-extrabold leading-snug text-navy">{article.title}</h3>
              <div className="mt-6 border-t border-border pt-4">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm text-neutral">
                  <span className="font-semibold text-navy">{article.source}</span>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-cyan hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  Read at source <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-cyan/40 bg-white px-6 py-12 text-center" role="status">
          <Newspaper className="mx-auto h-8 w-8 text-cyan" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-bold text-navy">{feed.articles.length ? 'No headlines in this topic yet' : 'No headlines available right now'}</h3>
          <p className="mx-auto mt-2 max-w-xl leading-relaxed text-neutral">
            {feed.articles.length
              ? 'Try another topic to see the headlines available in this update.'
              : 'The sources returned no usable headlines for this update. Please check back later; we will not present this as a fresh news feed until headlines are available.'}
          </p>
        </div>
      )}
    </div>
  )
}
