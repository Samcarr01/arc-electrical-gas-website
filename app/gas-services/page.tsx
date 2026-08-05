import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'

export const metadata: Metadata = {
  title: 'Gas Engineer Services in Kippax, Garforth & West Yorkshire',
  description: 'Gas Safe registered engineer in Kippax, Garforth, Allerton Bywater, Sherburn in Elmet and Castleford. Boiler servicing, repairs, installation, radiators and gas safety records. Call 07810 413488.',
  alternates: { canonical: '/gas-services' },
  openGraph: {
    title: 'Gas Engineer Services in Kippax, Garforth & West Yorkshire',
    description: 'Gas Safe registered engineer. Boiler servicing, repairs, installation and CP12 certificates. Serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
    url: '/gas-services',
  },
  twitter: {
    title: 'Gas Engineer Services in Kippax, Garforth & West Yorkshire',
    description: 'Gas Safe registered engineer. Boiler servicing, repairs, installation and CP12 certificates. Serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
  },
}

const services = [
  { name: 'Boiler Servicing', desc: 'Annual boiler servicing to manufacturer’s instructions. Gas leak check, flue inspection, combustion analysis and electronic service record on completion.', icon: '🔧', href: '/boiler-servicing' },
  { name: 'Boiler Repairs', desc: 'Diagnosing and repairing faults on all major boiler brands using genuine parts.', icon: '🛠️' },
  { name: 'Boiler Installation', desc: 'New boiler supply and installation. Worcester Bosch accredited installers — extended warranties available.', icon: '⬆️' },
  { name: 'Gas Safety Records (CP12)', desc: 'Gas safety inspections and CP12 certificates for landlords. Electronic record emailed to you or your letting agent on completion.', icon: '📋', href: '/landlord-certificates' },
  { name: 'Gas Installations', desc: 'New gas pipe work, meter connections and appliance connections by Gas Safe registered engineer.', icon: '🔧' },
  { name: 'Gas Fire Servicing', desc: 'Gas fire inspection, service and safety check. Service record issued on completion.', icon: '🔥' },
  { name: 'Gas Fault Finding', desc: 'Investigating and safely repairing gas faults including leaks, pressure issues and appliance faults.', icon: '⚠️' },
  { name: 'Replacement Radiators & Small Plumbing Repairs', desc: 'Radiator replacements and minor plumbing repairs carried out by our Gas Safe registered engineer.', icon: '🔧' },
  { name: 'Appliance Servicing', desc: 'Servicing of gas fires, stoves, water heaters, cookers and hobs to manufacturer’s instructions.', icon: '🍳' },
]

const checks = [
  'Test on gas meter and pipe work — check for leaks',
  'Inspection of flue and chimney for correct operation',
  'Condition check — seals, gaskets, heat distress signs',
  'Service to appliance-specific manufacturer’s instructions',
  'Combustion gas analysis for safe and efficient burning',
  'Electronic service record issued on completion',
]

const faqs = [
  { question: 'Do I need a Gas Safe registered engineer?', answer: 'Yes. By law, all gas work must be carried out by a Gas Safe registered engineer. You can verify our registration at gassaferegister.co.uk (Reg. No. 584102).' },
  { question: 'How often should I service my boiler?', answer: 'Annually. Regular servicing keeps your boiler safe and efficient, prevents costly breakdowns and is usually required to maintain your manufacturer’s warranty.' },
  { question: 'What is a Gas Safety Record (CP12)?', answer: 'A legal requirement for landlords. It confirms all gas appliances and pipework in a rental property have been checked and are safe. Must be renewed every 12 months.' },
  { question: 'Are you a Worcester Bosch accredited installer?', answer: 'Yes. We have completed specific training on Worcester Bosch products and can offer extended manufacturer warranties on new boiler installations.' },
  { question: 'Do you use genuine parts for repairs?', answer: 'Yes. We only use genuine parts on all boiler repairs and gas work, ensuring reliability and maintaining your warranty where applicable.' },
  { question: 'Can you replace radiators and do small plumbing repairs?', answer: 'Yes. We carry out radiator replacements and minor plumbing repairs, all carried out by our Gas Safe registered engineer.' },
]

export default function GasServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <span className="text-yellow-400">Gas Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Gas Engineer Services</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Gas Safe registered engineer serving Kippax, Garforth, Allerton Bywater, Sherburn in Elmet, Castleford and surrounding areas. Boiler servicing, repairs, installations, radiator replacements and landlord gas safety records.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>{' '}
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* ── Prominent accreditation logos row ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
            Fully Accredited &amp; Certified
          </p>
          <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/napit.png" alt="NAPIT Part P Approved Electrician" className="h-20 sm:h-24 w-auto object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/gas-safe.png" alt="Gas Safe Registered" className="h-20 sm:h-24 w-auto object-contain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/worcester-bosch.png" alt="Worcester Bosch Accredited Installer" className="h-20 sm:h-24 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Gas Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(s => (
                  <div key={s.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">
                      {s.href ? <Link href={s.href} className="hover:text-navy">{s.name}</Link> : s.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">What&apos;s Included in a Boiler Service?</h2>
              <ul className="space-y-3 mb-8">
                {checks.map(d => (
                  <li key={d} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">Worcester Bosch Accredited Installer</p>
                <p className="text-gray-600 text-sm">Accredited Worcester Bosch installers. Extended warranties available. Genuine parts used on all repairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Gas Services FAQs" />
      <CTABanner title="Need a Gas Engineer?" description="Call ARC Electrical & Gas for boiler servicing, repairs, radiator replacement or a gas safety record." />
    </>
  )
}
