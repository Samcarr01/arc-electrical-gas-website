import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBadges from '@/components/TrustBadges'
import AccreditationLogos from '@/components/AccreditationLogos'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import HeroCarousel from '@/components/HeroCarousel'

export const metadata: Metadata = {
  title: 'Electrician & Gas Engineer in Kippax, Garforth | ARC Electrical & Gas',
  description: 'ARC Electrical & Gas — trusted local electrician and gas engineer serving Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford and surrounding Leeds areas. NAPIT & Gas Safe registered. 5.0 Google rating. Call 07810 413488.',
  alternates: { canonical: '/' },
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
  { name: 'Boiler Repairs', desc: 'Diagnosing and repairing all makes and models using genuine parts.' },
  { name: 'Boiler Installation', desc: 'New boiler installation by Worcester Bosch accredited engineers.' },
  { name: 'Gas Safety Records', desc: 'CP12 landlord gas safety certificates for rental properties.' },
  { name: 'Gas Fault Finding', desc: 'Identifying and safely repairing gas faults.' },
  { name: 'Gas Fire Servicing', desc: 'Gas fire inspection, servicing and safety checks.' },
  { name: 'Replacement Radiators & Small Plumbing Repairs', desc: 'Radiator replacements and minor plumbing repairs by our Gas Safe engineers.' },
]

const primaryAreas = [
  { name: 'Kippax', href: '/electrician-kippax' },
  { name: 'Garforth', href: '/electrician-garforth' },
  { name: 'Allerton Bywater', href: '/electrician-allerton-bywater' },
  { name: 'Micklefield', href: '/electrician-micklefield' },
  { name: 'Sherburn in Elmet', href: '/electrician-sherburn-in-elmet' },
  { name: 'South Milford', href: '/electrician-south-milford' },
  { name: 'Castleford', href: '/electrician-castleford' },
  { name: 'Fairburn', href: '/electrician-fairburn' },
  { name: 'Great Preston', href: '/areas-we-cover' },
  { name: 'Swillington', href: '/areas-we-cover' },
]

const reviews = [
  { text: "Fantastic job. Highly recommend ARC electrical & gas. The price quoted was great and we were kept informed at all times. Hit a snag when past work wasn't up to scratch, Chris put it all right and has left us feeling safe. Will always use Chris, thank you for a great job.", author: 'B Wood', stars: 5 },
  { text: "Chris has been maintaining my central heating system for many years. When my boiler started to drip he re-arranged his schedule and came first thing the next morning. The fault was quickly diagnosed and fixed. Outstanding service from a really nice bloke. I can't recommend him highly enough.", author: 'Jonathan Clay', stars: 5 },
  { text: 'Chris responded immediately to my query and came at 9 the next morning. Sorted out a dodgy switch quickly and with no fuss, just for his call out charge. Would recommend.', author: 'Kevin Oldershaw', stars: 5 },
  { text: 'Responded quickly, was very professional and kept us updated throughout. Fitted repair in around our availability. Price was fair. Will definitely use again.', author: 'Dan Norvell', stars: 5 },
]

const faqs = [
  { question: 'What areas do ARC Electrical & Gas cover?', answer: 'We cover Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, South Milford, Castleford, Fairburn, Great Preston, Swillington, Rothwell, Cross Gates, Selby and surrounding areas.' },
  { question: 'Are you Gas Safe registered?', answer: 'Yes. We are Gas Safe registered (Reg. No. 584102). By law, all gas work must be carried out by a Gas Safe registered engineer. You can verify our registration at gassaferegister.co.uk.' },
  { question: 'Are you NAPIT approved?', answer: 'Yes. We are NAPIT approved domestic and commercial installers. This means all our electrical work meets UK Building Regulations and we can self-certify electrical installation work under Part P.' },
  { question: 'Do you provide certificates for completed work?', answer: 'Yes. We provide a test certificate for all electrical installation work and an electronic service record or gas safety record on completion of gas work. These can be emailed to you, your letting agent or property manager.' },
  { question: 'Can you carry out landlord electrical and gas safety checks?', answer: 'Yes. We carry out EICR (Electrical Installation Condition Reports) for landlords and Gas Safety Records (CP12). Both are legal requirements for private rental properties in England.' },
  { question: 'How do I book or get a quote?', answer: 'Call us on 07810 413488 or 0113 286 6140, or use the contact form on this website. We respond promptly and can usually arrange a visit at a time to suit you.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
          {/*
            Mobile:  carousel first (order-1), then text (order-2)
            Desktop: text left (lg:order-1), carousel right (lg:order-2)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Carousel — mobile: top; desktop: right
                FIX 5: negative margins on mobile break out of the px-4/px-6 container
                so the image goes full-bleed edge-to-edge. Reset to mx-0 on lg+. */}
            <div className="order-1 lg:order-2 -mx-4 sm:-mx-6 lg:mx-0">
              <HeroCarousel />
            </div>

            {/* Text — mobile: below carousel; desktop: left */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                NAPIT &amp; Gas Safe Registered &middot; 5.0 &#11088; on Google
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Local Electrician &amp; Gas Engineer in{' '}
                <span className="text-yellow-400">Kippax, Garforth</span>{' '}&amp; Surrounding Areas
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                ARC Electrical &amp; Gas is a family-run business serving Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford and the surrounding Leeds area. Fully qualified, insured and accredited &mdash; we handle it all safely and professionally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-xl shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  07810 413488
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                  Get a Free Quote
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-4">Mon&ndash;Fri 8am&ndash;5pm &middot; Fully insured &middot; Certified on completion</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Task 2: Accreditation logos row ── */}
      <AccreditationLogos />

      <TrustBadges />

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Electrical &amp; Gas Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We handle it all safely and professionally.</p>
            {/* Task 5 — extra phone link in middle of page */}
            <a href="tel:07810413488" className="inline-flex items-center gap-2 mt-4 text-navy font-semibold hover:text-navy-700 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              Call 07810 413488 to book
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Electrical card ── */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">

              {/* Card header — Task 6: yellow bolt on navy circle */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-navy to-navy-800">
                <svg className="absolute -right-5 -bottom-7 w-48 h-48 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    {/* Task 6: navy bg, yellow icon */}
                    <div className="bg-navy border-2 border-yellow-400 rounded-xl p-2.5">
                      <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Electrical Services</h3>
                  </div>
                </div>
              </div>

              {/* Card body — FIX 4: consumer-unit circuit-breaker photo at ~45% visibility */}
              <div className="p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "url('/img/consumer-unit-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                {/* Overlay at 55% opacity → ~45% of photo shows through */}
                <div className="absolute inset-0 bg-gray-50/[0.55]" />
                <div className="relative z-10">
                  <div className="space-y-2.5 mb-6">
                    {elServices.map(s => (
                      <div key={s.name} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-navy flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <div><span className="font-medium text-gray-900 text-sm">{s.name}</span><span className="text-gray-500 text-sm"> &mdash; {s.desc}</span></div>
                      </div>
                    ))}
                  </div>

                  {/* Task 3: NAPIT 27992 logo */}
                  <div className="border-t border-gray-200 pt-4 mb-5 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/napit-27992.png" alt="NAPIT Part P Approved Electrician No. 27992" className="h-16 w-auto object-contain flex-shrink-0" />
                    <p className="text-xs text-gray-500 leading-snug">NAPIT Part P Approved<br />Electrician No. 27992</p>
                  </div>

                  <Link href="/electrical-services" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">View All Electrical Services &rarr;</Link>
                </div>
              </div>
            </div>

            {/* ── Gas card ── */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">

              {/* Card header — Task 7: light-blue flame on navy */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy">
                <svg className="absolute -right-5 -bottom-7 w-48 h-48 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9 6.5 6.5 10.5 6.5 14.5a5.5 5.5 0 0011 0C17.5 10.5 15 6.5 12 2z"/></svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    {/* FIX 3: navy bg, light-blue FILLED teardrop flame SVG */}
                    <div className="bg-navy border-2 border-[#7EC8E3] rounded-xl p-2.5">
                      <svg className="w-7 h-7 text-[#7EC8E3]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C9 6.5 6.5 10.5 6.5 14.5a5.5 5.5 0 0011 0C17.5 10.5 15 6.5 12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Gas Services</h3>
                  </div>
                </div>
              </div>

              {/* Card body — FIX 4: blue flames photo at ~40% visibility */}
              <div className="p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "url('/flames-new.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                {/* Overlay at 62% opacity → ~38% flames shows through */}
                <div className="absolute inset-0 bg-gray-50/[0.62]" />
                <div className="relative z-10">
                  <div className="space-y-2.5 mb-6">
                    {gasServices.map(s => (
                      <div key={s.name} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <div><span className="font-medium text-gray-900 text-sm">{s.name}</span><span className="text-gray-500 text-sm"> &mdash; {s.desc}</span></div>
                      </div>
                    ))}
                  </div>

                  {/* Task 4: Gas Safe logo + reg number */}
                  <div className="border-t border-gray-200 pt-4 mb-5 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/gas-safe.png" alt="Gas Safe Register" className="h-16 w-auto object-contain flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Gas Safe Registered</p>
                      <p className="text-gray-500 text-sm">Reg. No. <strong className="text-gray-700">584102</strong></p>
                    </div>
                  </div>

                  <Link href="/gas-services" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">View All Gas Services &rarr;</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why choose us + van photo ── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ARC Electrical &amp; Gas?</h2>
              <p className="text-blue-100 text-lg mb-8">We&apos;re a family business, not a large national company. You get direct communication, an honest service and a team that cares about its local reputation.</p>
              <div className="space-y-4">
                {[
                  ['NAPIT Approved & Part P Accredited', 'All electrical work self-certified under Part P of the Building Regulations.'],
                  ['Gas Safe Registered', 'All gas work by Gas Safe registered engineers (Reg. 584102).'],
                  ['Worcester Bosch Accredited', 'Specialist recognised installer for Worcester Bosch boilers.'],
                  ['Over 20 Years Experience', 'Long track record of quality across the Leeds area.'],
                  ['Fully Insured', 'Complete cover for all electrical and gas installation work.'],
                  ['Genuine Parts Used', 'We only use genuine parts on every job.'],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="bg-yellow-400 rounded-lg p-1.5 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div><p className="font-semibold text-white">{t}</p><p className="text-blue-200 text-sm">{d}</p></div>
                  </div>
                ))}
              </div>
              {/* Task 5 — extra phone link in Why Choose Us section */}
              <a href="tel:07810413488" className="mt-8 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                Call 07810 413488
              </a>
            </div>
            {/* Van photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/van-2.jpg" alt="ARC Electrical & Gas company van — 100% electric, Gas Safe & NAPIT registered" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 rounded-xl px-4 py-3 font-bold text-sm shadow-lg">
                5.0 &#11088; Google &middot; 12 Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-600">Based in the Leeds area, we serve Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford, Fairburn, South Milford and surrounding towns.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {primaryAreas.map(a => (
              <Link key={a.name} href={a.href} className="bg-gray-50 hover:bg-navy hover:text-white text-gray-700 font-medium rounded-xl p-4 text-center transition-all text-sm border border-gray-100 hover:border-navy hover:shadow-md">
                {a.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas-we-cover" className="inline-flex items-center gap-2 text-navy hover:text-navy-700 font-semibold">View All Areas We Cover &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl font-bold text-gray-900">5.0</span>
              <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
            </div>
            <p className="text-gray-600 font-medium">12 Google reviews &middot; Our reputation is built on customer recommendations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({length: r.stars}).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-4 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-navy rounded-full flex items-center justify-center text-xs font-bold text-white">{r.author[0]}</div>
                  <p className="text-sm font-semibold text-gray-900">{r.author}</p>
                </div>
              </div>
            ))}
          </div>
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
