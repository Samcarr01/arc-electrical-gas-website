import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBadges from '@/components/TrustBadges'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Electrician & Gas Engineer in Kippax, Garforth | ARC Electrical & Gas',
  description: 'ARC Electrical & Gas — trusted local electricians and gas engineers serving Kippax, Garforth, Allerton Bywater, Micklefield and surrounding Leeds areas. NAPIT & Gas Safe registered. Call 07810 413488.',
}

const elServices = [
  { name: 'Electrical Fault Finding', desc: 'Diagnosing and fixing electrical faults quickly and safely.' },
  { name: 'EICR Testing', desc: 'Electrical installation condition reports for homes and landlords.' },
  { name: 'Fuse Board Upgrades', desc: 'Modern consumer unit replacement and upgrades.' },
  { name: 'Lighting Installation', desc: 'LED downlights, outdoor lighting and smart controls.' },
  { name: 'Sockets & Switches', desc: 'Additional sockets, USB outlets and switch upgrades.' },
  { name: 'Cooker Installation', desc: 'Safe installation of electric cookers and hobs.' },
  { name: 'Extractor Fans', desc: 'Kitchen and bathroom extractor fan installation.' },
  { name: 'Electric Showers', desc: 'Installation and replacement of electric showers.' },
  { name: 'Landlord Certificates', desc: 'Electrical certificates for rental properties.' },
]

const gasServices = [
  { name: 'Boiler Servicing', desc: 'Annual servicing to keep your boiler safe and efficient.' },
  { name: 'Boiler Repairs', desc: 'Diagnosing and repairing all makes and models.' },
  { name: 'Boiler Installation', desc: 'New boiler installation by Worcester Bosch accredited engineers.' },
  { name: 'Gas Safety Records', desc: 'CP12 landlord gas safety certificates for rental properties.' },
  { name: 'Gas Fault Finding', desc: 'Identifying and safely repairing gas faults.' },
  { name: 'Gas Fire Servicing', desc: 'Gas fire inspection, servicing and safety checks.' },
]

const areas = [
  { name: 'Kippax', href: '/electrician-kippax' },
  { name: 'Garforth', href: '/electrician-garforth' },
  { name: 'Allerton Bywater', href: '/electrician-allerton-bywater' },
  { name: 'Micklefield', href: '/electrician-micklefield' },
  { name: 'Great Preston', href: '/areas-we-cover' },
  { name: 'Swillington', href: '/areas-we-cover' },
  { name: 'Rothwell', href: '/areas-we-cover' },
  { name: 'Cross Gates', href: '/areas-we-cover' },
  { name: 'Castleford', href: '/areas-we-cover' },
  { name: 'Sherburn in Elmet', href: '/areas-we-cover' },
]

const reviews = [
  { text: 'ARC completed our EICR in Kippax and were professional throughout. Quick, tidy and great value. Highly recommended.', author: 'Homeowner, Kippax', stars: 5 },
  { text: 'Chris carried out the annual boiler service and gas safety record for our rental property in Garforth. Efficient, properly certified and reasonably priced.', author: 'Landlord, Garforth', stars: 5 },
  { text: 'Had a new consumer unit fitted in Allerton Bywater. Excellent work, completed in one day with full certification. Very happy with the service.', author: 'Homeowner, Allerton Bywater', stars: 5 },
]

const faqs = [
  { question: 'What areas do ARC Electrical & Gas cover?', answer: 'We cover Kippax, Garforth, Allerton Bywater, Micklefield, Great Preston, Swillington, Rothwell, Cross Gates, Castleford, Sherburn in Elmet and surrounding areas in the Leeds region.' },
  { question: 'Are you Gas Safe registered?', answer: 'Yes. We are Gas Safe registered (Reg. No. 584102). By law, all gas work must be carried out by a Gas Safe registered engineer. You can verify our registration at gassaferegister.co.uk.' },
  { question: 'Are you NAPIT approved?', answer: 'Yes. We are NAPIT approved domestic and commercial installers. This means all our electrical work meets UK Building Regulations and we can self-certify electrical installation work under Part P.' },
  { question: 'Do you provide certificates for completed work?', answer: 'Yes. We provide a test certificate for all electrical installation work and an electronic service record or gas safety record on completion of gas work. These can be emailed to you, your letting agent or property manager.' },
  { question: 'Can you carry out landlord electrical and gas safety checks?', answer: 'Yes. We carry out EICR (Electrical Installation Condition Reports) for landlords and Gas Safety Records (CP12). Both are legal requirements for private rental properties in England.' },
  { question: 'How do I book or get a quote?', answer: 'Call us on 07810 413488 or 0113 286 6140, or use the contact form on this website. We respond promptly and can usually arrange a visit at a time to suit you.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              NAPIT &amp; Gas Safe Registered · 20+ Years Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Local Electricians &amp; Gas Engineers in{' '}
              <span className="text-orange-400">Kippax, Garforth</span>{' '}&amp; Surrounding Areas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ARC Electrical &amp; Gas is a family-run business serving Kippax, Garforth, Allerton Bywater, Micklefield and the surrounding Leeds area. Fully qualified, insured and accredited — we do the job right, first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-xl shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                07810 413488
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                Get a Free Quote
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">Mon–Fri 8am–6pm · Fully insured · Certified on completion</p>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Electrical &amp; Gas Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From a blown fuse to a full rewire, boiler service to new installation — we handle it all safely and professionally.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 rounded-xl p-2.5">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electrical Services</h3>
              </div>
              <div className="space-y-2.5 mb-6">
                {elServices.map(s => (
                  <div key={s.name} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <div><span className="font-medium text-gray-900 text-sm">{s.name}</span><span className="text-gray-500 text-sm"> — {s.desc}</span></div>
                  </div>
                ))}
              </div>
              <Link href="/electrical-services" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">View All Electrical Services →</Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500 rounded-xl p-2.5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Gas Services</h3>
              </div>
              <div className="space-y-2.5 mb-6">
                {gasServices.map(s => (
                  <div key={s.name} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <div><span className="font-medium text-gray-900 text-sm">{s.name}</span><span className="text-gray-500 text-sm"> — {s.desc}</span></div>
                  </div>
                ))}
              </div>
              <Link href="/gas-services" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">View All Gas Services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ARC Electrical &amp; Gas?</h2>
              <p className="text-gray-300 text-lg mb-8">We&apos;re a family business, not a large national company. You get direct communication, an honest service and a team that cares about its local reputation.</p>
              <div className="space-y-4">
                {[
                  ['NAPIT Approved & Part P Accredited', 'All electrical work self-certified under Part P of the Building Regulations.'],
                  ['Gas Safe Registered', 'All gas work by Gas Safe registered engineers (Reg. 584102).'],
                  ['Worcester Bosch Accredited', 'Specialist recognised installer for Worcester Bosch boilers.'],
                  ['Over 20 Years Experience', 'Long track record of quality across the Leeds area.'],
                  ['Fully Insured', 'Complete cover for all electrical and gas installation work.'],
                  ['Family Run Business', 'Built on customer recommendations — your satisfaction is our reputation.'],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-lg p-1.5 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div><p className="font-semibold text-white">{t}</p><p className="text-gray-400 text-sm">{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['20+','Years Experience'],['100%','Accredited Work'],['4','Trade Accreditations'],['⭐⭐⭐⭐⭐','Customer Rated']].map(([stat, label]) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">{stat}</div>
                  <div className="text-gray-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-600">Based in the Leeds area, we serve Kippax, Garforth, Allerton Bywater, Micklefield and surrounding towns.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {areas.map(a => (
              <Link key={a.name} href={a.href} className="bg-gray-50 hover:bg-navy hover:text-white text-gray-700 font-medium rounded-xl p-4 text-center transition-all text-sm border border-gray-100 hover:border-navy hover:shadow-md">
                {a.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas-we-cover" className="inline-flex items-center gap-2 text-navy hover:text-blue-700 font-semibold">View All Areas We Cover →</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Our reputation is built on customer recommendations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({length: r.stars}).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{r.author}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">* Review examples shown for illustrative purposes. Real customer reviews available on request and via Google.</p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Common Questions" />

      <CTABanner
        title="Need an Electrician or Gas Engineer?"
        description="Call ARC Electrical & Gas today for honest advice and a free, no-obligation quote."
        primaryCTA={{ label: 'Call 07810 413488', href: 'tel:07810413488' }}
        secondaryCTA={{ label: 'Send a Message', href: '/contact' }}
      />
    </>
  )
}
