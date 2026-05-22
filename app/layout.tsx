import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChatbotWidget } from '@/components/ChatbotWidget'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FreightSync TMS | Logistics Services & Transportation Management Software',
    template: '%s | FreightSync TMS'
  },
  description: 'FreightSync TMS provides logistics services and transportation management software for dispatch, fleet operations, load tracking, driver settlements, reporting, and growing logistics companies.',
  keywords: [
    'transportation management system',
    'logistics services',
    'fleet management',
    'dispatch software',
    'load tracking',
    'driver settlements',
    'freight operations',
    'Charlotte logistics company',
    'TMS portal',
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
    title: 'FreightSync TMS | Logistics Services & Transportation Management Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, driver settlements, and reporting.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreightSync TMS — Logistics Services + Transportation Management Software',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FreightSyncTMS',
    title: 'FreightSync TMS | Logistics Services & TMS Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, and driver settlements.',
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
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}
