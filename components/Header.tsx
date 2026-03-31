'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { Button } from './ui/Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '/features' },
    { name: 'Solutions', href: '/solutions/last-mile' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies/fleetco' },
    { name: 'Blog', href: '/blog' },
    { name: 'Owner Portal', href: 'https://portal.freightsynctms.com', external: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Truck className="h-8 w-8 text-teal" />
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                  <div className="w-1 h-0.5 bg-teal rounded-full"></div>
                  <div className="w-1.5 h-0.5 bg-teal rounded-full"></div>
                  <div className="w-2 h-0.5 bg-teal rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-navy">Freight</span>
                <span className="text-teal">Sync</span>
                <span className="text-navy"> TMS</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral hover:text-navy transition-colors font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral hover:text-navy transition-colors font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://portal.freightsynctms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-lg bg-teal text-white hover:bg-teal/90 transition-colors whitespace-nowrap"
            >
              Access Owner Dashboard
            </a>
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>
          
          <div className="lg:hidden">
            <button
              type="button"
              className="text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral hover:text-navy font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-neutral hover:text-navy font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="https://portal.freightsynctms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 font-semibold rounded-lg bg-teal text-white hover:bg-teal/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Access Owner Dashboard
              </a>
              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
