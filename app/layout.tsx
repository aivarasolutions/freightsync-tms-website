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
  icons: {
    icon: '/freightsync-logo.png',
    apple: '/freightsync-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.freightsynctms.com',
    siteName: 'FreightSync TMS',
    title: 'FreightSync TMS | Logistics Services & Transportation Management Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, driver settlements, and reporting.',
    images: [
      {
        url: 'https://www.freightsynctms.com/freightsync-logo.png',
        width: 1024,
        height: 1024,
        alt: 'FreightSync TMS logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreightSync TMS | Logistics Services & TMS Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, and driver settlements.',
    images: ['https://www.freightsynctms.com/freightsync-logo.png'],
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
