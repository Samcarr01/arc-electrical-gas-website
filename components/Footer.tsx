import Link from 'next/link'
import { LOGO_DATA_URL } from '@/components/logo'

const services = [
  { name: 'Electrical Services', href: '/electrical-services' },
  { name: 'Gas Services', href: '/gas-services' },
  { name: 'EICR Testing', href: '/eicr' },
  { name: 'Boiler Servicing', href: '/boiler-servicing' },
  { name: 'Landlord Certificates', href: '/landlord-certificates' },
  { name: 'Areas We Cover', href: '/areas-we-cover' },
]

const locs = [
  { name: 'Electrician in Kippax', href: '/electrician-kippax' },
  { name: 'Electrician in Garforth', href: '/electrician-garforth' },
  { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
  { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
  { name: 'Gas Engineer in Kippax', href: '/gas-engineer-kippax' },
  { name: 'Gas Engineer in Garforth', href: '/gas-engineer-garforth' },
  { name: 'Gas Engineer in Allerton Bywater', href: '/gas-engineer-allerton-bywater' },
  { name: 'Gas Engineer in Micklefield', href: '/gas-engineer-micklefield' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_DATA_URL}
                alt="Arc Electrical & Gas (Leeds) Ltd"
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              NAPIT and Gas Safe registered electricians and gas engineers. Serving Kippax, Garforth,
              Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford, Fairburn and surrounding Leeds areas.
            </p>
            <div className="space-y-2.5">
              <a href="tel:07810413488" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                07810 413488
              </a>
              <a href="tel:01132866140" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                0113 286 6140
              </a>
              <a href="mailto:chris@arcelectricalandgas.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                chris@arcelectricalandgas.co.uk
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(s => <li key={s.name}><Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">{s.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locs.map(l => <li key={l.name}><Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">{l.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Arc Electrical And Gas (Leeds) Ltd</li>
              <li>Company No: 10263305</li>
              <li>Gas Safe Reg: 584102</li>
              <li>Mon&ndash;Fri: 8am &ndash; 5pm</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs text-gray-500 leading-relaxed">NAPIT Approved &middot; Part P Accredited<br/>Gas Safe Registered &middot; Worcester Bosch Accredited</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Arc Electrical And Gas (Leeds) Ltd. All rights reserved.</p>
          <Link href="/contact" className="text-gray-500 hover:text-white text-xs transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  )
}
