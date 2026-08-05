import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Garforth | ARC Electrical & Gas',
  description: 'Looking for an electrician in Garforth? ARC Electrical & Gas are NAPIT & Part P accredited with 30+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-garforth' },
  openGraph: {
    title: 'Electrician in Garforth | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Garforth. EICR, fuse boards, sockets, lighting. 30+ years experience. Call 07810 413488.',
    url: '/electrician-garforth',
  },
  twitter: {
    title: 'Electrician in Garforth | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Garforth. EICR, fuse boards, sockets, lighting. 30+ years experience. Call 07810 413488.',
  },
}

export default function ElectricianGarforthPage() {
  return (
    <LocationPageTemplate
      town="Garforth"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide professional electrical services throughout Garforth and the LS25 area. NAPIT approved and Part P accredited, we handle everything from a tripped fuse to a full consumer unit replacement. Over 30 years serving local homes, landlords and businesses."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports for homes and landlords',
        'Consumer unit / fuse board replacement',
        'LED lighting, outdoor lighting and feature lighting installation',
        'Additional sockets, USB outlets and switch upgrades',
        'Cooker and electric hob connection and installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in Garforth',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
        { name: 'Gas Engineer in Garforth', href: '/gas-engineer-garforth' },
      ]}
      faqs={[
        { question: 'Do you cover all of Garforth?', answer: 'Yes. We cover all of Garforth and the surrounding LS25 area including Micklefield and Kippax.' },
        { question: 'Can you do an EICR in Garforth?', answer: 'Yes. We carry out EICR testing throughout Garforth for homeowners and landlords. A full written report is issued and can be emailed to you or your letting agent on the same day.' },
        { question: 'Do you replace fuse boards in Garforth?', answer: 'Yes. We carry out consumer unit upgrades throughout Garforth. A modern RCD-protected fuse board is safer and more reliable. All work is carried out under Part P and fully certified.' },
        { question: 'Do you work on commercial properties in Garforth?', answer: 'Yes. We are NAPIT approved domestic and commercial installers, so we can carry out electrical work in both residential and commercial properties in Garforth.' },
        { question: 'How do I get a quote for electrical work in Garforth?', answer: 'Call us on 07810 413488 or use the contact form and we will get back to you promptly. We offer free, no-obligation quotes.' },
      ]}
    />
  )
}
