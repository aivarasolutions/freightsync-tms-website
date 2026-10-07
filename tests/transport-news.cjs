const { test } = require('node:test')
const assert = require('node:assert/strict')
const { parseNewsFeed, deduplicateNews, newsCategory, NEWS_SOURCES } = require(process.env.NEWS_TEST_LIB + '/transport-news-parser.js')
const source = NEWS_SOURCES[0]
const now = Date.parse('2026-10-07T12:00:00Z')
function feed(items) { return `<rss><channel>${items}</channel></rss>` }
function item({ title = 'Truck freight grows', link = 'https://www.truckingdive.com/news/test/', date = 'Wed, 07 Oct 2026 09:00:00 GMT' } = {}) {
  return `<item><title>${title}</title><link>${link}</link><pubDate>${date}</pubDate></item>`
}
test('reads a dated headline and publisher link without copying body', () => {
  const articles = parseNewsFeed(feed(item({ title: 'Diesel costs &amp; oil prices rise' })), source, now)
  assert.equal(articles.length, 1)
  assert.equal(articles[0].title, 'Diesel costs & oil prices rise')
  assert.equal(articles[0].category, 'Fuel & energy')
  assert.equal(articles[0].source, 'Trucking Dive')
  assert.equal(articles[0].publishedAt, '2026-10-07T09:00:00.000Z')
  assert.equal(articles[0].description, undefined)
})
test('rejects stale, undated and future articles', () => {
  assert.deepEqual(parseNewsFeed(feed(item({ date: 'bad' }) + item({ date: 'Mon, 01 Jan 2024 09:00:00 GMT' }) + item({ date: 'Fri, 09 Oct 2026 09:00:00 GMT' })), source, now), [])
})
test('rejects unsafe protocols, credentials and foreign domains', () => {
  for (const link of ['javascript:alert(1)', 'http://www.truckingdive.com/news/test', 'https://truckingdive.com.evil.test/', 'https://secret@www.truckingdive.com/news/test']) {
    assert.equal(parseNewsFeed(feed(item({ link })), source, now).length, 0)
  }
})
test('deduplicates headlines and strips tracking parameters', () => {
  const articles = parseNewsFeed(feed(item() + item({ link: 'https://www.truckingdive.com/news/test/?utm_source=rss' })), source, now)
  assert.equal(articles.length, 1)
  assert.equal(deduplicateNews([...articles, ...articles]).length, 1)
})
test('rejects malformed XML and entity declarations', () => {
  assert.throws(() => parseNewsFeed('<rss><bad>', source, now))
  assert.throws(() => parseNewsFeed('<!DOCTYPE rss [<!ENTITY bomb "bad">]>' + feed(item()), source, now))
})
test('classifies technology and labor stories', () => {
  assert.equal(newsCategory('Autonomous trucks enter service'), 'Autonomous & technology')
  assert.equal(newsCategory('Dock workers announce strike'), 'Policy & labor')
  assert.equal(newsCategory('New freight routes announced'), 'Freight & trucking')
})
test('EIA excludes unrelated electricity generation stories', () => {
  const eia = NEWS_SOURCES.find(s => s.energyOnly)
  assert.equal(parseNewsFeed(feed(item({ title: 'Solar power generation rises', link: 'https://www.eia.gov/todayinenergy/detail.php?id=1' })), eia, now).length, 0)
  assert.equal(parseNewsFeed(feed(item({ title: 'Crude oil refinery margins rise', link: 'https://www.eia.gov/todayinenergy/detail.php?id=2' })), eia, now).length, 1)
})
