'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOGO_DATA_URL } from '@/components/logo'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Electrical', href: '/electrical-services', children: [
    { name: 'All Electrical Services', href: '/electrical-services' },
    { name: 'EICR Testing', href: '/eicr' },
    { name: 'Landlord Certificates', href: '/landlord-certificates' },
  ]},
  { name: 'Gas', href: '/gas-services', children: [
    { name: 'All Gas Services', href: '/gas-services' },
    { name: 'Boiler Servicing', href: '/boiler-servicing' },
  ]},
  { name: 'Areas We Cover', href: '/areas-we-cover' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Logo:
          Below 2xl (mobile/tablet/laptop): absolute-centred, 170px wide
          2xl+: static in flow on the left, h-16
          Use relative on the row so absolute positioning is contained.
        */}
        <div className="flex items-center justify-between h-20 md:h-24 relative">

          {/* 2xl+ only logo — left-aligned, in normal flow */}
          <Link href="/" className="hidden 2xl:flex flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_DATA_URL}
              alt="Arc Electrical & Gas (Leeds) Ltd"
              className="h-16 w-auto"
            />
          </Link>

          {/* Below 2xl logo — absolutely centred */}
          <Link href="/" className="2xl:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_DATA_URL}
              alt="Arc Electrical & Gas (Leeds) Ltd"
              style={{ width: '170px' }}
              className="w-auto h-auto"
            />
          </Link>

          {/* Desktop nav — only at 2xl+ */}
          <nav className="hidden 2xl:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href ? 'text-yellow-400' : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 hidden group-hover:block pt-1 min-w-52 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.children.map((c) => (
                        <Link key={c.name} href={c.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy hover:text-white transition-colors">
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: social + phone + hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://www.facebook.com/arcelectricalandgas" target="_blank" rel="noopener noreferrer"
              aria-label="Follow ARC Electrical & Gas on Facebook"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/christopher-algar-5a4a5249" target="_blank" rel="noopener noreferrer"
              aria-label="ARC Electrical & Gas on LinkedIn"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>

            <a href="tel:07810413488"
              className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              07810 413488
            </a>

            <button onClick={() => setOpen(!open)}
              className="2xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="2xl:hidden border-t border-white/10 py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setOpen(false)}
                  className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link key={c.name} href={c.href} onClick={() => setOpen(false)}
                        className="block text-gray-300 hover:text-white px-3 py-1.5 text-sm transition-colors">
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a href="tel:07810413488"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-3 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>
              <a href="https://www.facebook.com/arcelectricalandgas" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 text-blue-200 hover:text-white px-4 py-2.5 transition-colors text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Follow us on Facebook
              </a>
              <a href="https://www.linkedin.com/in/christopher-algar-5a4a5249" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-1 text-blue-200 hover:text-white px-4 py-2.5 transition-colors text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
