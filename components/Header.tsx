'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '/features' },
    { name: 'TMS Portal', href: '/integrations' },
    { name: 'Solutions', href: '/solutions/last-mile' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies/fleetco' },
    { name: 'Blog', href: '/blog' },
    { name: 'Owner Portal', href: 'https://portal.freightsynctms.com', external: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" aria-label="FreightSync TMS home">
              <Image
                src="/freightsync-logo.png"
                alt="FreightSync TMS logo"
                width={48}
                height={48}
                priority
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-navy via-royal to-cyan bg-clip-text text-transparent hidden sm:inline">
                FreightSync TMS
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
              className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan to-teal text-white hover:from-teal hover:to-cyan shadow-md transition-all whitespace-nowrap"
            >
              Access Owner Dashboard
            </a>
            <Button href="/contact" size="sm" variant="teal">
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
                className="block w-full text-center px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-cyan to-teal text-white hover:from-teal hover:to-cyan transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Access Owner Dashboard
              </a>
              <Button href="/contact" className="w-full" variant="teal">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
