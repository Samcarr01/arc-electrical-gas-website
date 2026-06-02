import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'EICR Testing in Kippax, Garforth & Leeds Area',
  description: 'Electrical Installation Condition Reports (EICR) in Kippax, Garforth, Allerton Bywater and Micklefield. NAPIT & Part P accredited. Required for landlords every 5 years. Call 07810 413488.',
  alternates: { canonical: '/eicr' },
}

const faqs = [
  { question: 'What is an EICR?', answer: 'An Electrical Installation Condition Report (EICR) is a formal inspection of the electrical installation within a property. It assesses the safety and condition of the wiring, consumer unit, sockets, switches and other fixed electrical parts.' },
  { question: 'Is an EICR a legal requirement?', answer: 'Yes, for rental properties in England. Since July 2020, landlords must have an EICR carried out every 5 years and provide a copy to their tenants.' },
  { question: 'How long does an EICR take?', answer: 'A standard domestic EICR typically takes 2–4 hours depending on the size and condition of the property.' },
  { question: 'What happens if the EICR finds problems?', answer: 'The report classifies issues as C1 (danger present — immediate action), C2 (potentially dangerous — urgent attention) or C3 (improvement recommended). C1 or C2 codes require remedial work before the installation is satisfactory.' },
  { question: 'Do you carry out remedial work after the EICR?', answer: 'Yes. If the EICR identifies any C1 or C2 issues, we can carry out the remedial electrical work to bring the installation up to standard and re-certify.' },
  { question: 'What areas do you cover for EICR testing?', answer: 'We cover Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford, Fairburn, South Milford, Great Preston, Swillington and surrounding areas.' },
]

export default function EICRPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <Link href="/electrical-services" className="hover:text-white">Electrical Services</Link><span>/</span>
              <span className="text-yellow-400">EICR Testing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">EICR Testing</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Electrical Installation Condition Reports for homeowners and landlords across Kippax, Garforth, Allerton Bywater, Micklefield and the wider Leeds area. NAPIT & Part P accredited. Full report issued on completion.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Book an EICR
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an EICR?</h2>
              <p className="text-gray-600 mb-4">An Electrical Installation Condition Report (EICR) is a thorough inspection of all the fixed electrical wiring and components within your property. It checks the safety and condition of your electrical installation against current UK standards.</p>
              <p className="text-gray-600 mb-6">The inspection covers the consumer unit (fuse board), wiring, sockets, switches, light fittings and earthing. The engineer checks for deterioration, damage, defects and anything that could be a safety risk.</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">When is an EICR Required?</h3>
              <ul className="space-y-3">
                {['Every 5 years for private rental properties (legal requirement since 2020)','When buying or selling a property','If the property is over 25 years old and has never been inspected','After major flooding or fire damage','For landlord compliance and insurance purposes'].map(i => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-sm">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What the Report Covers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {['Consumer unit / fuse board inspection','Wiring condition and age assessment','Socket and switch testing','RCD testing','Earthing and bonding checks','Full written report with any recommendations'].map(i => (
                    <li key={i} className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-blue-900 mb-1">Landlord EICR</p>
                <p className="text-blue-800 text-sm">We deal directly with letting agents and property managers. Reports can be emailed to you, your agent or your property management company. <Link href="/landlord-certificates" className="underline">Learn more about landlord certificates →</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="EICR FAQs" />
      <CTABanner title="Book Your EICR Today" description="We cover Kippax, Garforth, Allerton Bywater, Micklefield and surrounding areas. Call now or request a quote." />
    </>
  )
}
