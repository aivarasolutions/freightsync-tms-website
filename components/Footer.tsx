import Link from 'next/link'
import Image from 'next/image'
import { Container } from './ui/Container'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

export function Footer() {
  const navigation = {
    program: [
      { name: 'Carrier Accelerator Program', href: '/carrier-accelerator-program' },
      { name: 'Vehicle Ownership', href: '/carrier-accelerator-program#program-options' },
      { name: 'Consultation Form', href: '/carrier-accelerator-program#consultation' },
      { name: 'Pricing', href: '/pricing' },
    ],
    operations: [
      { name: 'Managed Trucking Operations', href: '/carrier-accelerator-program#consultation' },
      { name: 'Dispatch & Load Sourcing', href: '/carrier-accelerator-program#consultation' },
      { name: 'Driver Recruiting Support', href: '/carrier-accelerator-program#consultation' },
      { name: 'Owner Reporting', href: 'https://portal.freightsynctms.com', external: true },
      { name: 'Access Owner Dashboard', href: 'https://portal.freightsynctms.com', external: true },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-navy to-secondary text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 bg-white rounded-xl px-3 py-2 shadow-md">
              <Image
                src="/freightsync-logo.png"
                alt="FreightSync TMS logo"
                width={56}
                height={56}
                className="h-12 w-auto"
              />
              <span className="text-base font-bold text-navy">FreightSync TMS</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Vehicle ownership guidance, managed trucking operations, and FreightSync TMS visibility for investors and owner-partners building transportation assets.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:281-310-1114" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-cyan" />
                <span>281-310-1114</span>
              </a>
              <a href="mailto:Admin@FreightSyncTMS.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-cyan" />
                <span>Admin@FreightSyncTMS.com</span>
              </a>
              <a href="https://www.freightsynctms.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="h-4 w-4 text-cyan" />
                <span>www.freightsynctms.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan" />
                <span>Charlotte, North Carolina</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Carrier Program</h3>
            <ul className="space-y-2 text-sm">
              {navigation.program.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Owner Operations</h3>
            <ul className="space-y-2 text-sm">
              {navigation.operations.map((item) => (
                <li key={item.name}>
                  {'external' in item && item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
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
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} FreightSync TMS. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
