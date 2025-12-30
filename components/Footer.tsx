import Link from 'next/link'
import { Container } from './ui/Container'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

export function Footer() {
  const navigation = {
    services: [
      { name: 'Less Than Truckload (LTL)', href: '/features' },
      { name: 'Next-Day Delivery', href: '/features' },
      { name: 'Real-Time Tracking', href: '/features' },
      { name: 'Damage-Free Transport', href: '/features' },
    ],
    solutions: [
      { name: 'Last-Mile Delivery', href: '/solutions/last-mile' },
      { name: '3PL Providers', href: '/solutions/3pl' },
      { name: 'Retail Delivery', href: '/solutions/retail' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Pricing', href: '/pricing' },
    ],
  }

  return (
    <footer className="bg-navy text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">Freight</span>
                <span className="text-teal">Sync</span>
                <span className="text-white"> TMS</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your Complete Blueprint for Launching and Scaling a Full-Service Logistics Business
            </p>
            <div className="space-y-2">
              <a href="tel:281-310-1114" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-teal" />
                <span>281-310-1114</span>
              </a>
              <a href="mailto:Admin@FreightSyncTMS.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-teal" />
                <span>Admin@FreightSyncTMS.com</span>
              </a>
              <a href="https://www.freightsynctms.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="h-4 w-4 text-teal" />
                <span>www.freightsynctms.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" />
                <span>Charlotte, North Carolina</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} FreightSync TMS. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
