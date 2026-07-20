import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Boiler Servicing in Kippax, Garforth & West Yorkshire',
  description: 'Annual boiler servicing by Gas Safe registered engineer in Kippax, Garforth, Allerton Bywater and Micklefield. Worcester Bosch accredited. Electronic service record issued. Call 07810 413488.',
  alternates: { canonical: '/boiler-servicing' },
  openGraph: {
    title: 'Boiler Servicing in Kippax, Garforth & West Yorkshire',
    description: 'Annual boiler servicing by Gas Safe registered, Worcester Bosch accredited engineer. Serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
    url: '/boiler-servicing',
  },
  twitter: {
    title: 'Boiler Servicing in Kippax, Garforth & West Yorkshire',
    description: 'Annual boiler servicing by Gas Safe registered, Worcester Bosch accredited engineer. Serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
  },
}

const checks = [
  'Test carried out on gas meter and pipe work to check for leaks',
  'Inspection of flue and chimney for correct operation',
  'Condition check of appliance — seals, gaskets and heat distress',
  'Service completed to appliance-specific manufacturer’s instructions',
  'Combustion gas analysis to ensure safe and efficient burning',
  'Electronic service record issued on completion',
]

const faqs = [
  { question: 'How often should I service my boiler?', answer: 'It is recommended to have your boiler serviced every year. Annual servicing keeps your boiler running safely and efficiently, can identify problems before they become costly breakdowns, and is usually required to maintain your manufacturer’s warranty.' },
  { question: 'What does a boiler service include?', answer: 'Our boiler service includes a gas leak check, flue and combustion inspection, condition check of all components, service to manufacturer’s instructions, combustion analysis, and an electronic service record issued on completion.' },
  { question: 'Are you Gas Safe registered?', answer: 'Yes. Our engineer is Gas Safe registered (Reg. No. 584102). By law, all gas servicing and repair work must be carried out by a Gas Safe registered engineer.' },
  { question: 'Do you service all boiler brands?', answer: 'Yes. We service all major makes and models of gas boiler. As Worcester Bosch accredited installers, we have specialist knowledge of Worcester Bosch products, but we cover all brands.' },
  { question: 'Do you use genuine parts?', answer: 'Yes. We only use genuine parts on all boiler repairs. This ensures the repair is safe, reliable and maintains your warranty where applicable.' },
]

export default function BoilerServicingPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <Link href="/gas-services" className="hover:text-white">Gas Services</Link><span>/</span>
              <span className="text-yellow-400">Boiler Servicing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Boiler Servicing</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Annual boiler servicing by Gas Safe registered, Worcester Bosch accredited engineer. Serving Kippax, Garforth, Allerton Bywater, Micklefield and surrounding areas. Electronic service record on completion.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Book a Service
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Does a Boiler Service Include?</h2>
              <p className="text-gray-600 mb-6">Our Gas Safe registered engineer carries out a thorough boiler service to manufacturer’s instructions. An electronic service record is issued on completion and can be emailed to you.</p>
              <ul className="space-y-3">
                {checks.map(c => (
                  <li key={c} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Worcester Bosch Accredited Installer</h3>
                <p className="text-gray-600 text-sm">We are Worcester Bosch accredited installers. When we fit a Worcester Bosch boiler, you may be eligible for an extended manufacturer warranty of up to 10 years.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Also Available</h3>
                <ul className="space-y-2 text-sm">
                  {['Boiler repairs using genuine parts','New boiler installation','Gas Safety Records for landlords (CP12)','Gas fire servicing','Replacement radiators and small plumbing repairs'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Boiler Servicing FAQs" />
      <CTABanner title="Book Your Boiler Service" description="Gas Safe registered and Worcester Bosch accredited. Call us to arrange your annual boiler service." />
    </>
  )
}
