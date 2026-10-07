import { XMLParser, XMLValidator } from 'fast-xml-parser'

export type NewsCategory = 'Fuel & energy' | 'Freight & trucking' | 'Autonomous & technology' | 'Policy & labor'

export interface NewsArticle {
  id: string
  title: string
  url: string
  source: string
  publishedAt: string
  category: NewsCategory
}

export interface NewsSource {
  name: string
  url: string
  hosts: string[]
  energyOnly?: boolean
}

export const NEWS_SOURCES: NewsSource[] = [
  { name: 'Trucking Dive', url: 'https://www.truckingdive.com/feeds/news/', hosts: ['truckingdive.com'] },
  { name: 'FreightWaves', url: 'https://www.freightwaves.com/feed', hosts: ['freightwaves.com'] },
  { name: 'Transportation Today', url: 'https://transportationtodaynews.com/feed/', hosts: ['transportationtodaynews.com'] },
  { name: 'U.S. EIA', url: 'https://www.eia.gov/rss/todayinenergy.xml', hosts: ['eia.gov'], energyOnly: true },
]

function plainText(value: unknown): string {
  return typeof value === 'string' ? value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() : ''
}

export function newsCategory(title: string, energyOnly = false): NewsCategory {
  if (/\b(strike|strikes|union|labor|regulation|regulations|tariff|tariffs|FMCSA|legislation|lawmakers|driver pay)\b/i.test(title)) return 'Policy & labor'
  if (/\b(autonomous|self-driving|driverless|automation|electric|EV|hydrogen|technology|robot|AI)\b/i.test(title)) return 'Autonomous & technology'
  if (energyOnly || /\b(fuel|diesel|gasoline|gas|oil|petroleum|refinery|energy)\b/i.test(title)) return 'Fuel & energy'
  return 'Freight & trucking'
}

/** Only publisher-provided headlines, dates and links are retained; never full articles or images. */
export function parseNewsFeed(xml: string, source: NewsSource, now = Date.now()): NewsArticle[] {
  if (Buffer.byteLength(xml, 'utf8') > 4_000_000 || /<!DOCTYPE|<!ENTITY/i.test(xml)) throw new Error('Unsupported RSS document')
  if (XMLValidator.validate(xml) !== true) throw new Error('Invalid RSS document')
  const parser = new XMLParser({
    ignoreAttributes: true,
    parseTagValue: false,
    isArray: (name) => name === 'item',
  })
  const channel = parser.parse(xml)?.rss?.channel
  if (!channel || !Array.isArray(channel.item)) throw new Error('RSS items unavailable')
  const articles: NewsArticle[] = []
  for (const item of channel.item) {
    const title = plainText(item.title)
    const date = Date.parse(plainText(item.pubDate))
    // A short rolling window keeps old stories from being presented as current news.
    if (!title || !Number.isFinite(date) || date > now + 3_600_000 || date < now - 30 * 86_400_000) continue
    if (source.energyOnly && !/\b(diesel|gasoline|gas|oil|petroleum|refin|fuel|transport|truck)/i.test(`${title} ${plainText(item.description)}`)) continue
    try {
      const url = new URL(plainText(item.link))
      if (url.protocol !== 'https:' || url.username || url.password || !source.hosts.includes(url.hostname.replace(/^www\./, ''))) continue
      url.hash = ''
      for (const key of Array.from(url.searchParams.keys())) if (/^utm_/i.test(key)) url.searchParams.delete(key)
      articles.push({ id: url.href, title: title.slice(0, 350), url: url.href, source: source.name, publishedAt: new Date(date).toISOString(), category: newsCategory(title, source.energyOnly) })
    } catch {
      // Reject malformed or unsafe publisher links rather than exposing them in the UI.
    }
  }
  return deduplicateNews(articles).slice(0, 24)
}

export function deduplicateNews(articles: NewsArticle[]): NewsArticle[] {
  const urls = new Set<string>()
  const titles = new Set<string>()
  return [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)).filter(article => {
    const title = article.title.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (urls.has(article.url) || titles.has(title)) return false
    urls.add(article.url)
    titles.add(title)
    return true
  })
}
