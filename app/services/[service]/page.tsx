import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/carrier-network/ServiceContent'
import { services } from '@/lib/carrier-network'

export function generateStaticParams() {
  return services.map(service => ({ service: service.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = services.find(item => item.slug === params.service)
  return {
    title: service ? `${service.name} | FreightSync` : 'Service | FreightSync',
    description: service?.description || 'FreightSync Carrier Network services.',
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  return <ServiceDetail slug={params.service} />
}
