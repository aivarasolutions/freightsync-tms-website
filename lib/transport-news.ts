import { unstable_cache } from 'next/cache'
import { deduplicateNews, NEWS_SOURCES, parseNewsFeed } from './transport-news-parser'
import type { NewsArticle, NewsSource } from './transport-news-parser'

export type { NewsArticle, NewsCategory } from './transport-news-parser'

export interface NewsFeed {
  articles: NewsArticle[]
  checkedAt: string
  unavailableSources: string[]
}

// The Next.js data cache persists between requests on Vercel and Replit.
// Revalidation runs on visits, not on a background timer. A failed revalidation
// keeps the prior successful cached result, including its ORIGINAL check time.
const cachedSources = NEWS_SOURCES.map(source => unstable_cache(
  async () => loadSource(source),
  ['transportation-headlines-v1', source.url],
  { revalidate: 1800 },
))

async function loadSource(source: NewsSource) {
  const response = await fetch(source.url, {
    cache: 'no-store',
    signal: AbortSignal.timeout(10_000),
    headers: { Accept: 'application/rss+xml, application/xml, text/xml', 'User-Agent': 'FreightSync-Market-Brief/1.0' },
  })
  if (!response.ok) throw new Error(`News source unavailable: ${source.name}`)
  if (Number(response.headers.get('content-length')) > 4_000_000) throw new Error('RSS response too large')
  const reader = response.body?.getReader()
  if (!reader) throw new Error('RSS response missing')
  const chunks: Uint8Array[] = []
  let bytes = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      bytes += value.byteLength
      if (bytes > 4_000_000) throw new Error('RSS response too large')
      chunks.push(value)
    }
  } finally {
    await reader.cancel()
  }
  const body = Buffer.concat(chunks)
  const encoding = body.subarray(0, 160).toString().match(/encoding=["']([^"']+)/i)?.[1] || 'utf-8'
  const articles = parseNewsFeed(new TextDecoder(encoding).decode(body), source)
  if (!articles.length) throw new Error(`No recent headlines: ${source.name}`)
  return { articles, checkedAt: new Date().toISOString() }
}

export async function getTransportationNews(): Promise<NewsFeed> {
  const results = await Promise.allSettled(cachedSources.map(load => load()))
  const articles: NewsArticle[] = []
  const checkTimes: string[] = []
  const unavailableSources: string[] = []
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      articles.push(...result.value.articles)
      checkTimes.push(result.value.checkedAt)
    } else {
      unavailableSources.push(NEWS_SOURCES[index].name)
      console.warn(`Market Brief source unavailable: ${NEWS_SOURCES[index].name}`)
    }
  })
  return {
    articles: deduplicateNews(articles).filter(article => Date.parse(article.publishedAt) >= Date.now() - 30 * 86_400_000).slice(0, 48),
    checkedAt: checkTimes.sort()[0] || '',
    unavailableSources,
  }
}
