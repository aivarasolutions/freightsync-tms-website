# Transportation Market Brief

The blog displays public RSS headline metadata from Trucking Dive, FreightWaves,
Transportation Today, and the U.S. Energy Information Administration. It links
readers to the original publishers. Full stories, feed descriptions, publisher
images, and paywalled content are not republished.

No news API key or additional database is required. AP wire content is not
included without appropriate licensed access. Google News RSS was not selected
because its feed explicitly restricts reuse to personal, non-commercial readers.

## Automatic updates

Each source has its own persistent Next.js data cache, eligible for revalidation
after 30 minutes. Requests to the blog trigger refreshes; this is not a scheduled
background publishing service. Visible browser tabs also request a page refresh
every 30 minutes, or when a visitor returns after that interval.

The first request after expiry can show the previous successful snapshot while
the source refreshes. Failed revalidation preserves last-good data and its
original check time. The page displays stale, partial, or empty-data notices
instead of inventing current reporting. Headlines older than 30 days, invalid
dates, unsupported URLs, and duplicates are excluded.

RSS sources are fixed server-side. External links must match the publisher's
HTTPS hostname; response sizes and fetch duration are limited. XML entity/DTD
declarations are rejected. Category assignment is keyword-based, not editorial
review or a claim that every transportation event will appear.

## Validation

The production build includes TypeScript checks. Parser tests:

```sh
./node_modules/.bin/tsc lib/transport-news-parser.ts --module commonjs --target ES2020 --esModuleInterop --skipLibCheck --outDir /tmp/freightsync-news-tests
NODE_PATH="$PWD/node_modules" NEWS_TEST_LIB=/tmp/freightsync-news-tests node --test tests/transport-news.cjs
```

The blog and shared service-card changes should be released through the existing
GitHub-to-Vercel workflow. The review branch is configured not to auto-deploy;
merging into the production branch is a separate release decision.
