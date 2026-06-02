import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'

export const metadata: Metadata = {
  title: 'Gas Engineer Services in Kippax, Garforth & Leeds Area',
  description: 'Gas Safe registered engineers in Kippax, Garforth, Allerton Bywater and Micklefield. Boiler servicing, repairs, installation and gas safety records. Call 07810 413488.',
}

const services = [
  { name: 'Boiler Servicing', desc: 'Annual boiler servicing carried out to manufacturer’s instructions. We test for gas leaks, check the flue and combustion gases, inspect seals and issue an electronic service record on completion.', icon: '🔧', href: '/boiler-servicing' },
  { name: 'Boiler Repairs', desc: 'Diagnosing and repairing faults on all major boiler brands. We identify the issue quickly and carry out the repair using quality parts.', icon: '🛠️' },
  { name: 'Boiler Installation', desc: 'New boiler supply and installation. As Worcester Bosch accredited installers, we can offer Worcester Bosch boilers with extended warranties.', icon: '⬆️' },
  { name: 'Gas Safety Records (CP12)', desc: 'Gas safety inspections and CP12 certificates for landlords. All accessible gas pipework and appliances are checked and an electronic record issued. Can be emailed to letting agents.', icon: '📋', href: '/landlord-certificates' },
  { name: 'Gas Installations', desc: 'New gas pipe work, gas meter connections and appliance connections carried out by Gas Safe registered engineers.', icon: '🔧' },
  { name: 'Gas Fire Servicing', desc: 'Gas fire inspection, service and safety check. We check the flue, seals and that the appliance is burning correctly. A service record is issued on completion.', icon: '🔥' },
  { name: 'Gas Fault Finding', desc: 'Investigating and repairing gas faults including gas leaks, boiler pressure issues and appliance faults. Safety is always our first priority.', icon: '⚠️' },
  { name: 'Appliance Servicing', desc: 'Servicing of gas fires, stoves, water heaters, cookers and hobs. All work carried out to manufacturer’s instructions by Gas Safe registered engineers.', icon: '🍳' },
]

const gasServiceDetails = [
  'Test carried out on gas meter and pipe work to ensure there are no gas leaks',
  'Inspection of flue and chimney to check the appliance is operating correctly',
  'Condition check of appliance including seals, gaskets and heat distress signs',
  'Service carried out to appliance-specific manufacturer’s instructions',
  'Analysis of combustion exhaust gases to ensure safe and efficient burning',
  'Electronic service record issued on completion as proof of service',
]

const faqs = [
  { question: 'Do I need a Gas Safe registered engineer?', answer: 'Yes. By law, all gas work must be carried out by a Gas Safe registered engineer. Attempting gas work without registration is illegal and dangerous. You can verify any engineer’s registration at gassaferegister.co.uk.' },
  { question: 'How often should I service my boiler?', answer: 'It is recommended to have your boiler serviced annually. Regular servicing keeps your boiler running safely and efficiently, can prevent costly breakdowns and is often required to maintain your warranty.' },
  { question: 'What is a Gas Safety Record (CP12)?', answer: 'A Gas Safety Record (CP12) is a legal requirement for landlords. It confirms that all gas appliances and pipework in a rental property have been checked and are safe. It must be renewed every 12 months.' },
  { question: 'Are you a Worcester Bosch accredited installer?', answer: 'Yes. We are Worcester Bosch accredited installers. This means we have completed specific training on Worcester Bosch products and can offer boilers with extended manufacturer warranties.' },
  { question: 'Do you cover gas fires and other appliances?', answer: 'Yes. In addition to boilers, we service and repair gas fires, stoves, water heaters, cookers and hobs. All work is carried out to manufacturer’s instructions by Gas Safe registered engineers.' },
]

export default function GasServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <span className="text-orange-400">Gas Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Gas Engineer Services</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Gas Safe registered engineers serving Kippax, Garforth, Allerton Bywater, Micklefield and surrounding areas. Boiler servicing, repairs, installations and landlord gas safety records.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Gas Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map(s => (
                  <div key={s.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
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
                {gasServiceDetails.map(d => (
                  <li key={d} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">Worcester Bosch Accredited Installer</p>
                <p className="text-gray-600 text-sm">We are accredited Worcester Bosch installers, which means extended manufacturer warranties are available when we fit a Worcester Bosch boiler.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Gas Services FAQs" />
      <CTABanner title="Need a Gas Engineer?" description="Call ARC Electrical & Gas for boiler servicing, repairs or a gas safety record." />
    </>
  )
}
