import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import TrustBadges from '@/components/TrustBadges'

export const metadata: Metadata = {
  title: 'Electrical Services in Kippax, Garforth & Leeds Area',
  description: 'Professional electrical services in Kippax, Garforth, Allerton Bywater and Micklefield. NAPIT & Part P accredited. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrical-services' },
}

const services = [
  { name: 'Electrical Fault Finding', desc: 'Diagnosing and fixing electrical faults quickly and safely.', icon: '⚡' },
  { name: 'EICR Testing', desc: 'Electrical installation condition reports for homeowners and landlords. Required every 5 years for rental properties.', icon: '📋', href: '/eicr' },
  { name: 'Fuse Board Upgrades', desc: 'Replacement and upgrade of old consumer units to modern RCD-protected fuse boards. All work certified under Part P.', icon: '🔲' },
  { name: 'Lighting Installation', desc: 'LED downlights, pendant lighting, outdoor security lighting and smart lighting systems.', icon: '💡' },
  { name: 'Sockets & Switches', desc: 'Additional power sockets, USB sockets, outdoor sockets and switch replacements.', icon: '🔌' },
  { name: 'Cooker Installation', desc: 'Safe installation of electric cookers, double ovens and electric hobs.', icon: '🍳' },
  { name: 'Extractor Fans', desc: 'Kitchen and bathroom extractor fan installation and replacement.', icon: '💨' },
  { name: 'Electric Showers', desc: 'Installation and replacement of electric showers. All work fully certified.', icon: '🚿' },
  { name: 'Landlord Certificates', desc: 'EICR reports and landlord electrical certificates for rental properties.', icon: '🏠', href: '/landlord-certificates' },
]

const faqs = [
  { question: 'Do I need an EICR for my home?', answer: 'An EICR is legally required every 5 years for private rental properties in England. For owner-occupied homes, it is strongly recommended — particularly if your home is over 25 years old or you are buying or selling.' },
  { question: 'Are you Part P accredited?', answer: 'Yes. We are NAPIT approved and Part P accredited. This means we can self-certify electrical installation work, and a Part P certificate is issued on completion of all notifiable work.' },
  { question: 'How long does a fuse board upgrade take?', answer: 'A standard consumer unit replacement typically takes one day. Power will be off for part of the day while the work is completed.' },
  { question: 'Do you cover commercial as well as domestic properties?', answer: 'Yes. We are NAPIT approved domestic and commercial installers, so we cover both homes and commercial premises.' },
  { question: 'Will I get a certificate for the work?', answer: 'Yes. All notifiable electrical work receives a Part P certificate. EICR testing produces a full condition report. All certificates can be emailed to you, your letting agent or property manager.' },
]

export default function ElectricalServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-yellow-400">Electrical Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Electrical Services</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              NAPIT and Part P accredited electricians serving Kippax, Garforth, Allerton Bywater, Micklefield and surrounding areas. Fully insured with certificates on completion of every job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07810413488" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Electrical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-navy transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {s.href ? <Link href={s.href} className="hover:text-navy">{s.name}</Link> : s.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover for Electrical Work</h2>
          <div className="flex flex-wrap gap-3">
            {[['Kippax','/electrician-kippax'],['Garforth','/electrician-garforth'],['Allerton Bywater','/electrician-allerton-bywater'],['Micklefield','/electrician-micklefield'],['Sherburn in Elmet','/areas-we-cover'],['Castleford','/areas-we-cover'],['Great Preston','/areas-we-cover'],['Swillington','/areas-we-cover']].map(([name, href]) => (
              <Link key={name} href={href} className="inline-block bg-white hover:bg-navy hover:text-white text-gray-700 font-medium px-4 py-2 rounded-lg border border-gray-200 transition-colors text-sm">{name}</Link>
            ))}
            <Link href="/areas-we-cover" className="inline-block bg-yellow-50 hover:bg-yellow-400 hover:text-gray-900 text-yellow-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm">All Areas →</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Electrical Services FAQs" />
      <CTABanner title="Need an Electrician?" description="Call us for a free, no-obligation quote. We cover Kippax, Garforth and surrounding areas." />
    </>
  )
}
