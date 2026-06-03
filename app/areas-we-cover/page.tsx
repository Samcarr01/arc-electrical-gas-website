import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Areas We Cover | Electrician & Gas Engineer',
  description: 'ARC Electrical & Gas cover Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, South Milford, Castleford, Fairburn, Great Preston, Swillington, Selby and surrounding Leeds areas.',
  alternates: { canonical: '/areas-we-cover' },
}

const primaryAreas = [
  { name: 'Kippax', desc: 'Residential town in the LS25 postcode area, close to Castleford and Allerton Bywater.', electricHref: '/electrician-kippax', gasHref: '/gas-engineer-kippax' },
  { name: 'Garforth', desc: 'Larger town in LS25, with a mix of residential and commercial properties.', electricHref: '/electrician-garforth', gasHref: '/gas-engineer-garforth' },
  { name: 'Allerton Bywater', desc: 'Village on the River Aire, between Kippax and Castleford.', electricHref: '/electrician-allerton-bywater', gasHref: '/gas-engineer-allerton-bywater' },
  { name: 'Micklefield', desc: 'Village in the LS25 area between Garforth and Sherburn in Elmet.', electricHref: '/electrician-micklefield', gasHref: '/gas-engineer-micklefield' },
  { name: 'Sherburn in Elmet', desc: 'Market town in North Yorkshire, south-east of Leeds.', electricHref: '/electrician-sherburn-in-elmet', gasHref: '/gas-engineer-sherburn-in-elmet' },
  { name: 'South Milford', desc: 'Village between Sherburn in Elmet and Selby in the LS25 area.', electricHref: '/electrician-south-milford', gasHref: '/gas-engineer-south-milford' },
  { name: 'Castleford', desc: 'West Yorkshire town, close to Kippax and Allerton Bywater.', electricHref: '/electrician-castleford', gasHref: '/gas-engineer-castleford' },
  { name: 'Fairburn', desc: 'Small village near Castleford and Kippax in the LS25 area.', electricHref: '/electrician-fairburn', gasHref: '/gas-engineer-fairburn' },
]

const secondaryAreas = ['Great Preston', 'Swillington', 'Rothwell', 'Cross Gates', 'Selby']

export default function AreasPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-yellow-400">Areas We Cover</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Areas We Cover</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">ARC Electrical &amp; Gas provide electrical and gas services across Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, South Milford, Castleford, Fairburn and surrounding areas of West and South Yorkshire.</p>
            <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              Check if we cover your area: 07810 413488
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Primary Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {primaryAreas.map(area => (
              <div key={area.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-5">{area.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  <Link href={area.electricHref} className="flex items-center justify-center text-center gap-2 h-12 bg-navy hover:bg-navy-700 text-white font-medium px-4 rounded-lg transition-colors text-sm leading-tight">
                    &#9889; Electrician in {area.name}
                  </Link>
                  <Link href={area.gasHref} className="flex items-center justify-center text-center gap-2 h-12 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium px-4 rounded-lg transition-colors text-sm leading-tight">
                    &#128293; Gas Engineer in {area.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Areas We Cover</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {secondaryAreas.map(a => (
              <span key={a} className="inline-block bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm">{a}</span>
            ))}
          </div>
          <p className="text-gray-600">Not sure if we cover your area? Call us on <a href="tel:07810413488" className="text-navy font-semibold hover:underline">07810 413488</a> and we&apos;ll let you know.</p>

          <div className="mt-10 bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900 mb-1">Opening Hours</p>
            <p className="text-gray-600">Monday &ndash; Friday: <strong>8am &ndash; 5pm</strong></p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Based Nearby? Get in Touch"
        description="We cover a wide area. Call us to check and arrange a visit."
        primaryCTA={{ label: 'Call 07810 413488', href: 'tel:07810413488' }}
        secondaryCTA={{ label: 'Send an Enquiry', href: '/contact' }}
      />
    </>
  )
}
