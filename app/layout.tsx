import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Electrician & Gas Engineer in Kippax, Garforth | ARC Electrical & Gas',
    template: '%s | ARC Electrical & Gas',
  },
  description:
    'ARC Electrical & Gas — NAPIT & Gas Safe registered electrician and gas engineer serving Kippax, Garforth, Allerton Bywater, Micklefield and surrounding areas. Call 07810 413488.',
  metadataBase: new URL('https://www.arcelectricalandgas.co.uk'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'ARC Electrical & Gas',
    title: 'Electrician & Gas Engineer in Kippax, Garforth | ARC Electrical & Gas',
    description: 'NAPIT & Gas Safe registered electrician and gas engineer serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
  },
  twitter: {
    card: 'summary',
    title: 'Electrician & Gas Engineer in Kippax, Garforth | ARC Electrical & Gas',
    description: 'NAPIT & Gas Safe registered electrician and gas engineer serving Kippax, Garforth and West Yorkshire. Call 07810 413488.',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: 'ARC Electrical & Gas',
  legalName: 'Arc Electrical And Gas (Leeds) Ltd',
  description:
    'NAPIT and Gas Safe registered electrician and gas engineer serving Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, Castleford, Fairburn, South Milford and surrounding Leeds areas.',
  url: 'https://www.arcelectricalandgas.co.uk',
  telephone: ['+447810413488', '+441132866140'],
  email: 'chris@arcelectricalandgas.co.uk',
  areaServed: [
    'Kippax', 'Garforth', 'Allerton Bywater', 'Micklefield',
    'Sherburn in Elmet', 'South Milford', 'Castleford', 'Fairburn',
    'Great Preston', 'Swillington', 'Rothwell', 'Cross Gates', 'Selby', 'Leeds',
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  }],
  identifier: { '@type': 'PropertyValue', name: 'Companies House', value: '10263305' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
