# FreightSync TMS - Modern Marketing Website

## Overview
FreightSync TMS is a modern, production-ready marketing website for a Transportation Management System built specifically for last-mile delivery operations. The site showcases the platform's features, solutions, pricing, and case studies with a clean, professional design.

**Locations**: Charlotte, NC | Houston, TX (planned expansion)

## Tech Stack
- **Framework**: Next.js 14.2.5 (App Router) - Stable
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.14 (Stable, Vercel-compatible)
- **Icons**: Lucide React
- **Deployment**: Autoscale (Vercel-optimized)

## Project Structure
```
.
├── app/                      # Next.js App Router pages
│   ├── (pages)/             # All page routes
│   ├── api/contact/         # Contact form API route
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles (Tailwind v4)
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── Header.tsx           # Sticky header with navigation
│   └── Footer.tsx           # Site footer
├── data/                    # Content as JSON
│   ├── features.json        # Feature data
│   ├── stats.json          # Statistics data
│   ├── integrations.json   # Integration partners
│   └── testimonials.json   # Customer testimonials
├── lib/                     # Utilities
│   └── analytics.ts        # Analytics helpers (GA/Meta)
├── public/                  # Static assets
│   └── robots.txt          # SEO robots file
└── tailwind.config.ts      # Tailwind configuration
```

## Pages & Routes
- `/` - Home page (hero, features, stats, testimonials, FAQ)
- `/features` - All features overview
- `/solutions/last-mile` - Last-mile delivery solution
- `/solutions/3pl` - 3PL provider solution
- `/solutions/retail` - Retail delivery solution
- `/integrations` - Integrations & architecture
- `/pricing` - Pricing plans with FAQ
- `/case-studies/fleetco` - FleetCo case study
- `/about` - About us & company values
- `/blog` - Blog index
- `/blog/how-to-choose-a-tms` - Featured article
- `/contact` - Contact form with API

## Setup & Configuration

### Workflow
- **Server**: Runs `npm run dev` for development
- **Port**: 5000 (required for Replit)
- **Host**: Configured for 0.0.0.0 to allow external access
- **Hot Reload**: Fast Refresh enabled

### Deployment
- **Type**: Autoscale (serverless)
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Platform**: Optimized for Vercel

### Environment Variables (Optional)
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX    # Meta Pixel
```

## Running Locally
```bash
# Install dependencies
npm install

# Development server (port 5000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Design System

### Brand Colors (Updated October 2025)
- **Primary**: #0066FF (Bright Blue)
- **Secondary**: #1a1a1a (Almost Black)
- **Accent**: #00D4AA (Teal Green)
- **Neutral**: #333333 (Dark Gray)
- **Muted**: #f8f9fa (Light Gray Background)
- **Border**: #e5e7eb (Light Gray Border)

### Components
All components are in `/components/ui`:
- `Button` - CTA buttons (primary, secondary, outline)
- `Container` - Max-width wrapper
- `SectionHeading` - Page/section headers
- `FeatureCard` - Feature display cards
- `Stat` - Statistics display
- `Testimonial` - Customer quotes
- `PricingCard` - Pricing plans
- `FAQ` - Accordion FAQ
- `ContactForm` - Form with spam protection
- `Badge` - Labels and tags

## Features

### Accessibility ♿
- Semantic HTML throughout
- ARIA labels on navigation and buttons
- Keyboard navigation support
- Focus states on all interactive elements

### SEO 🔍
- Per-page metadata (title, description, OG tags)
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt configured
- Canonical URLs

### Performance ⚡
- Lighthouse score ≥90
- Responsive images with next/image
- Prefetching on nav links
- Minimal JavaScript footprint
- Tailwind CSS optimization

### Mobile-First 📱
- Tested at 375px, 768px, 1280px
- Touch-friendly navigation
- Responsive grids and layouts

## Content Management
All content stored in `/data/*.json` for easy editing:
- `features.json` - Feature list
- `stats.json` - Performance statistics
- `integrations.json` - Integration partners
- `testimonials.json` - Customer quotes

Edit these files to update content without touching code.

## Recent Changes
- **2025-10-11 (v5)**: Added AI-Powered Chatbot with Transportation Expertise!
  - Integrated OpenAI GPT-4o-mini for intelligent customer support
  - Comprehensive knowledge base: FreightSync TMS + transportation industry expertise
  - Answers questions about LTL/FTL, 3PL/4PL, industry challenges, best practices
  - Covers transportation modes, logistics concepts, industry metrics, and solutions
  - Provides smart contextual suggestions for follow-up questions
  - Works on Replit (Replit AI) and Vercel (OpenAI API key required)
  - Widget appears on all pages with 💬 icon in bottom-right
  - See CHATBOT_SETUP.md for Vercel deployment instructions

- **2025-10-10 (v4)**: Deployed successfully to Vercel!
  - Fixed Vercel configuration: Set Framework Preset to Next.js (was treating as static site)
  - Fixed blog article text readability: removed all dark mode variants, now using text-neutral
  - Site is live and working perfectly on freightsynctms.com
  
- **2025-10-09 (v3)**: Fixed Vercel deployment compatibility
  - Downgraded to stable versions: Next.js 14.2.5 + React 18.3.1
  - Migrated from Tailwind CSS v4 (beta) to v3.4.14 (stable)
  - Fixed syntax errors in about page that were breaking builds
  - Removed all dark mode variants for consistent text readability
  - Fixed text contrast issues on pricing, blog, and case study pages
  - Updated PostCSS configuration for Tailwind v3 compatibility
  - Build now passes successfully and deploys to Vercel without errors
  
- **2025-10-09 (v2)**: Complete design overhaul - modern, clean, minimal
  - New color palette: bright blue (#0066FF), teal (#00D4AA), clean grays
  - Redesigned all pages with Sylectus-inspired clean aesthetic
  - White backgrounds with subtle gray (#f8f9fa) sections
  - Bold, large headlines (text-5xl to text-7xl)
  - Simplified button styles with better contrast
  - Removed gradients for cleaner, more professional look
  - Updated all components (Button, FeatureCard, SectionHeading)
  - Consistent spacing and typography throughout
  - Improved readability with proper text colors
  
- **2025-10-09 (v1)**: Complete rebuild with Next.js 14
  - Migrated from static site to Next.js App Router
  - Implemented TypeScript for type safety
  - Configured Tailwind CSS v4 with @tailwindcss/postcss
  - Built 12+ pages with full content
  - Created reusable component library
  - Added contact form with API route
  - Implemented SEO (sitemap, robots.txt, metadata)
  - Mobile-first responsive design
  - Accessibility features (ARIA, semantic HTML)

## User Preferences
- **Design**: Clean and minimal (inspired by Sylectus.net)
- **Style**: Light/bright website with white backgrounds
- **Hero**: Big bold headlines with action buttons
- **Goals**: Demo requests, feature showcase, trust building (all equally important)
- **Tech**: Modern, fast, performant, accessible
- **AI Support**: Fast, accurate chatbot providing best information
