# FreightSync TMS

A modern, production-ready marketing website for FreightSync TMS - the Transportation Management System built for last-mile delivery operations.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📋 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Semantic HTML & WCAG accessibility
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Dark mode support
- ✅ Performance optimized (Lighthouse ≥90)
- ✅ Analytics ready (GA/Meta placeholder)
- ✅ Type-safe with TypeScript
- ✅ Clean, documented components

## 🏗️ Project Structure

```
freightsync-tms/
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Main site routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Site header
│   └── Footer.tsx        # Site footer
├── data/                 # Content as JSON
│   ├── features.json
│   ├── stats.json
│   ├── integrations.json
│   └── testimonials.json
├── lib/                  # Utilities
│   └── analytics.ts      # Analytics helpers
├── public/               # Static assets
│   └── robots.txt
└── tailwind.config.ts    # Tailwind configuration
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🌐 Public Pages

- `/` - Investor-focused home page for vehicle ownership and managed trucking operations
- `/carrier-accelerator-program` - Primary conversion page with consultation form and owner cash flow planner
- `/pricing` - Program pricing
- `/about` - About us & company values
- `/blog` - FreightSync Transportation Market Brief
- `/contact` - General contact form

Legacy SaaS/TMS marketing routes still exist for historical URLs, but they are intentionally hidden from the header, footer, and sitemap.

## 📰 Market Brief Automation

The `/blog` page currently uses static, evergreen cards labeled `FreightSync Insight`. It does not display fake live news.

Future daily transportation news automation can be enabled with either:

```env
NEWS_API_KEY=your_news_provider_key
# or RSS feed source configuration, depending on the selected provider
```

When live news is unavailable, the page falls back to the static Market Brief layout with clear labels and no simulated source/date data.

## 🎨 Design System

### Colors
- **Primary:** #1F4FFF (Blue)
- **Secondary:** #0B1533 (Dark Navy)
- **Accent:** #00C2A8 (Teal)
- **Neutral:** #0F172A (Dark Gray)
- **Muted:** #EAF0FF (Light Blue)

### Components
- `Button` - Primary, secondary, outline variants
- `Container` - Max-width wrapper
- `SectionHeading` - Page/section headers
- `FeatureCard` - Feature display cards
- `Stat` - Statistics display
- `Testimonial` - Customer quotes
- `PricingCard` - Pricing plan cards
- `FAQ` - Accordion FAQ
- `ContactForm` - Contact form with spam protection
- `Badge` - Labels and tags

## 📊 Analytics Setup

To enable analytics, add your tracking IDs to environment variables:

```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

Then add the analytics script to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🖼️ Social Media Images

Create an Open Graph image at `public/og-image.png` (1200x630px) for social media previews. The metadata is already configured in `app/layout.tsx` to reference this image.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

Ensure Node.js 18+ is installed on your server.

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID` - Meta Pixel ID (optional)

### Tailwind
Edit `tailwind.config.ts` to customize colors, fonts, and design tokens.

### Content
Edit JSON files in `/data` directory for easy content updates without touching code.

## 📝 SEO

- Metadata configured per page
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- OpenGraph tags for social sharing
- Canonical URLs

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images (when added)

## 🎯 Performance

- Optimized for Lighthouse score ≥90
- Responsive images with next/image
- Prefetching on navigation links
- Minimal JavaScript footprint
- Efficient CSS with Tailwind

## 📱 Mobile Breakpoints

- Small: 375px
- Medium: 768px
- Large: 1280px

## 🤝 Contributing

This is a production website. For modifications:

1. Test thoroughly on all breakpoints
2. Ensure accessibility standards
3. Maintain SEO best practices
4. Update content in JSON files where possible

## 📄 License

Copyright © 2024 FreightSync TMS. All rights reserved.
