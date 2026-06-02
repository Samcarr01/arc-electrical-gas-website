import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Electrician & Gas Engineer in Kippax, Garforth',
  description: 'Get in touch with ARC Electrical & Gas. Call 07810 413488 or send a message. We serve Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford and surrounding Leeds areas.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-yellow-400">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-xl">Call us, email us or use the form below. We aim to respond to all enquiries promptly.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-xl p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:07810413488" className="text-yellow-600 font-bold text-xl hover:text-yellow-700 block">07810 413488</a>
                    <a href="tel:01132866140" className="text-gray-600 hover:text-gray-900 block">0113 286 6140</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-xl p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:chris@arcelectricalandgas.co.uk" className="text-blue-600 hover:text-blue-700">chris@arcelectricalandgas.co.uk</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-xl p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Opening Hours</p>
                    <p className="text-gray-700 font-medium">Monday &#8211; Friday: 8am &#8211; 5pm</p>
                    <p className="text-gray-500 text-sm">Please call or message for availability outside these hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-xl p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Service Area</p>
                    <p className="text-gray-600">Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, South Milford, Castleford, Fairburn and surrounding Leeds areas</p>
                    <Link href="/areas-we-cover" className="text-gray-900 text-sm font-medium hover:underline">View all areas &#8594;</Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Accreditations</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {['NAPIT Approved Domestic & Commercial Installer','Part P Accredited','Gas Safe Registered (Reg. No. 584102)','Worcester Bosch Accredited Installer','Fully Insured &#8212; Genuine Parts &#8212; Certificates on All Work'].map(a => (
                    <li key={a} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span dangerouslySetInnerHTML={{__html: a}} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
