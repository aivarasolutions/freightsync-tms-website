import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FreightSync TMS - The modern TMS for last-mile delivery',
    template: '%s | FreightSync TMS'
  },
  description: 'Plan routes, dispatch drivers, track live ETAs, and automate billing—all in one place.',
  keywords: ['TMS', 'transportation management', 'last-mile delivery', '3PL', 'logistics'],
  authors: [{ name: 'FreightSync TMS' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.freightsynctms.com',
    siteName: 'FreightSync TMS',
    title: 'FreightSync TMS - The modern TMS for last-mile delivery',
    description: 'Plan routes, dispatch drivers, track live ETAs, and automate billing—all in one place.',
    images: [
      {
        url: 'https://www.freightsynctms.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreightSync TMS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreightSync TMS - The modern TMS for last-mile delivery',
    description: 'Plan routes, dispatch drivers, track live ETAs, and automate billing—all in one place.',
    images: ['https://www.freightsynctms.com/og-image.png'],
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
        <script src="chat-widget.js"></script>
      </body>
    </html>
  )
}
