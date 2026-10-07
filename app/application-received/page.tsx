import type { Metadata } from 'next'
import { ApplicationReceivedClient } from '@/components/carrier-network/ApplicationReceivedClient'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Application Received | FreightSync',
  description: 'Your FreightSync Carrier Network application status and next steps.',
  robots: { index: false, follow: false },
}

export default function ApplicationReceivedPage() {
  return <ApplicationReceivedClient confirmed={cookies().get('fs-carrier-received')?.value === '1'} />
}
