import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FreightSync TMS | Vehicle Ownership & Managed Trucking Operations',
    template: '%s | FreightSync TMS'
  },
  description: 'FreightSync helps investors and owner-partners buy or finance trucking vehicles, navigate insurance and onboarding, and operate through managed dispatch, reporting, and trucking operations support.',
  keywords: [
    'trucking investment',
    'carrier accelerator program',
    'managed trucking operations',
    'vehicle ownership',
    'freight operations',
    'owner portal',
    'dispatch support',
    'trucking investors',
    'FreightSync TMS',
  ],
  authors: [{ name: 'FreightSync TMS' }],
  metadataBase: new URL('https://www.freightsynctms.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-square.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.freightsynctms.com',
    siteName: 'FreightSync TMS',
    title: 'FreightSync TMS | Vehicle Ownership & Managed Trucking Operations',
    description: 'Vehicle ownership guidance and managed trucking operations for investors and owner-partners.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreightSync TMS - Vehicle ownership and managed trucking operations',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FreightSyncTMS',
    title: 'FreightSync TMS | Managed Trucking Operations',
    description: 'Vehicle ownership guidance, owner reporting, and managed trucking operations.',
    images: ['/og-image.png'],
  },
  other: {
    'theme-color': '#0a1f44',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script src="https://freight-sync-tms-bot.replit.app/widget.js" async></script>
      </body>
    </html>
  )
}
