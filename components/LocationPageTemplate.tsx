import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'

export interface LocationPageProps {
  town: string
  serviceType: 'electrician' | 'gas-engineer'
  intro: string
  services: string[]
  nearbyAreas: { name: string; href: string }[]
  faqs: { question: string; answer: string }[]
}

export default function LocationPageTemplate({ town, serviceType, intro, services, nearbyAreas, faqs }: LocationPageProps) {
  const label = serviceType === 'gas-engineer' ? 'Gas Engineer' : 'Electrician'
  const isEl = serviceType === 'electrician'

  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: label,
    provider: { '@type': 'LocalBusiness', name: 'ARC Electrical & Gas', telephone: '+447810413488', url: 'https://www.arcelectricalandgas.co.uk' },
    areaServed: { '@type': 'City', name: town },
    description: intro,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/areas-we-cover" className="hover:text-white transition-colors">Areas</Link><span>/</span>
              <span className="text-yellow-400">{town}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">{label} in {town}</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>{' '}
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{label} Services in {town}</h2>
              <p className="text-gray-600 mb-6">ARC Electrical &amp; Gas cover {town} and the surrounding area. All work is carried out by a fully qualified, insured engineer with over 30 years of experience. A certificate is issued on every job.</p>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Why Choose ARC Electrical &amp; Gas?</h3>
              <div className="space-y-4">
                {[['NAPIT & Gas Safe Registered','Fully accredited for electrical and gas work.'],['30+ Years Experience','Trusted local family business with a proven record.'],['Certificates on Completion','All work is certified as required by law.'],['Fully Insured','Complete peace of mind on every job.'],['Genuine Parts Only','We only fit genuine, reliable components.'],['5.0 Google Rating','12 five-star reviews from local customers.']]
                  .map(([t,d]) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="bg-yellow-100 rounded-lg p-1.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <div><p className="font-semibold text-gray-900 text-sm">{t}</p><p className="text-gray-500 text-sm">{d}</p></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isEl ? (
              <>
                <Link href="/electrical-services" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">Electrical Services &rarr;</p><p className="text-sm text-gray-500">Fault finding, fuse boards, lighting, sockets and more</p></Link>
                <Link href="/eicr" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">EICR Testing &rarr;</p><p className="text-sm text-gray-500">Condition reports for homeowners and landlords</p></Link>
                <Link href="/landlord-certificates" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">Landlord Certificates &rarr;</p><p className="text-sm text-gray-500">Electrical certificates for rental properties</p></Link>
              </>
            ) : (
              <>
                <Link href="/gas-services" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">Gas Services &rarr;</p><p className="text-sm text-gray-500">Boiler servicing, repairs, installs and gas safety records</p></Link>
                <Link href="/boiler-servicing" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">Boiler Servicing &rarr;</p><p className="text-sm text-gray-500">Annual servicing to keep your heating safe and efficient</p></Link>
                <Link href="/landlord-certificates" className="bg-white rounded-xl border border-gray-200 p-5 hover:border-navy hover:shadow-md transition-all group"><p className="font-semibold text-gray-900 group-hover:text-navy mb-1">Gas Safety Records &rarr;</p><p className="text-sm text-gray-500">CP12 certificates for landlords and letting agents</p></Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">We Also Cover Nearby Areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map(a => (
              <Link key={a.name} href={a.href} className="inline-block bg-gray-100 hover:bg-navy hover:text-white text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm">{a.name}</Link>
            ))}
            <Link href="/areas-we-cover" className="inline-block bg-yellow-50 hover:bg-yellow-400 hover:text-gray-900 text-yellow-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm">View All Areas &rarr;</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`${label} FAQs — ${town}`} />
      <CTABanner title={`Need a ${label} in ${town}?`} description="Call us today for a free, no-obligation quote. We cover the whole local area." />
    </>
  )
}
