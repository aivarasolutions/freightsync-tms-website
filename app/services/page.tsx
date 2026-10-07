import type { Metadata } from 'next'
import { ServiceLanding } from '@/components/carrier-network/ServiceContent'

export const metadata: Metadata = {
  title: 'Carrier Network Services | FreightSync',
  description: 'Explore FreightSync Connect, Dispatch, and Fleet Management for practical transportation technology and operational support.',
}

export default function ServicesPage() {
  return <ServiceLanding />
}
