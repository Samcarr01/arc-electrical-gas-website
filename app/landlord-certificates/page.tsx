import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Landlord Certificates in Kippax, Garforth & Leeds Area',
  description: 'Landlord EICR and Gas Safety Records (CP12) in Kippax, Garforth, Allerton Bywater and Micklefield. NAPIT & Gas Safe registered. Reports emailed to agents. Call 07810 413488.',
}

const faqs = [
  { question: 'What landlord certificates are legally required?', answer: 'In England, landlords must have an Electrical Installation Condition Report (EICR) every 5 years and a Gas Safety Record (CP12) every 12 months. Copies must be given to tenants within 28 days.' },
  { question: 'How long does an EICR take for a rental property?', answer: 'A standard 2–3 bedroom rental property typically takes 2–4 hours. Larger properties may take longer. Power may need to be off briefly during the inspection.' },
  { question: 'Can you email the certificate to my letting agent?', answer: 'Yes. We can email all certificates — EICR reports and Gas Safety Records — directly to you, your letting agent or your property management company.' },
  { question: 'Do you carry out any remedial work needed?', answer: 'Yes. If the EICR identifies any C1 or C2 issues, we can carry out the remedial work to bring the installation up to standard and re-certify. For gas work, we can carry out any repairs or replacements required.' },
  { question: 'Can you manage multiple properties?', answer: 'Yes. We work with landlords managing multiple rental properties and can coordinate visits and issue all certificates efficiently. Contact us to discuss your portfolio requirements.' },
]

export default function LandlordCertificatesPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-orange-400">Landlord Certificates</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Landlord Electrical &amp; Gas Certificates</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">EICR reports and Gas Safety Records (CP12) for landlords across Kippax, Garforth, Allerton Bywater, Micklefield and the wider Leeds area. All certificates can be emailed to you or your letting agent.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">Book a Certificate</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">EICR — Electrical Certificate</h2>
              <p className="text-gray-600 mb-4 text-sm">Required every 5 years for private rental properties. Inspects the full electrical installation and issues a pass or fail report. Mandatory since July 2020.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {['Full inspection of wiring and consumer unit','Socket and switch testing','RCD protection checks','Earthing and bonding assessment','Full written report with certificate','Remedial work available if required'].map(i => (
                  <li key={i} className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{i}</li>
                ))}
              </ul>
              <Link href="/eicr" className="text-navy font-semibold text-sm hover:underline">More about EICR testing →</Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-3">🔥</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Gas Safety Record (CP12)</h2>
              <p className="text-gray-600 mb-4 text-sm">Required every 12 months for properties with gas appliances. Checks all gas pipework and appliances are safe. Mandatory for all landlords with gas in their properties.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {['Visual inspection of all accessible gas pipework','Check all appliances for safe operation','Flue and ventilation checks','Safety device testing','Electronic record issued and emailed','Landlord and tenant copies provided'].map(i => (
                  <li key={i} className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{i}</li>
                ))}
              </ul>
              <Link href="/gas-services" className="text-navy font-semibold text-sm hover:underline">More about gas services →</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Landlord Certificate FAQs" />
      <CTABanner title="Book Landlord Certificates" description="We cover Kippax, Garforth and surrounding areas. Call now or send a message to book." />
    </>
  )
}
