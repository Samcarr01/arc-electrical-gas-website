'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
    <header className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Arc Electrical & Gas (Leeds) Ltd"
              width={188}
              height={74}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href ? 'text-yellow-400' : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 hidden group-hover:block pt-1 min-w-52 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.children.map((c) => (
                        <Link key={c.name} href={c.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a href="tel:07810413488"
            className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            07810 413488
          </a>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
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
                        className="block text-gray-400 hover:text-white px-3 py-1.5 text-sm transition-colors">
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
