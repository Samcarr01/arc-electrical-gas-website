import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Castleford | ARC Electrical & Gas',
  description: 'Looking for an electrician in Castleford? ARC Electrical & Gas are NAPIT & Part P accredited with 20+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-castleford' },
  openGraph: {
    title: 'Electrician in Castleford | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Castleford. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
    url: '/electrician-castleford',
  },
  twitter: {
    title: 'Electrician in Castleford | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Castleford. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
  },
}

export default function ElectricianCastlefordPage() {
  return (
    <LocationPageTemplate
      town="Castleford"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide reliable electrical services across Castleford and the wider WF10 area. We are NAPIT approved and Part P accredited, with over 20 years of experience serving homes and businesses throughout the town. All work is fully insured and certified on completion."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'Lighting installation — LED, outdoor and feature lighting',
        'Additional sockets, USB sockets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in Castleford',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
        { name: 'Electrician in Fairburn', href: '/electrician-fairburn' },
        { name: 'Gas Engineer in Castleford', href: '/gas-engineer-castleford' },
      ]}
      faqs={[
        { question: 'Do you cover all of Castleford?', answer: 'Yes. We cover all of Castleford and the surrounding WF10 area, including Allerton Bywater and Fairburn. All work is carried out by fully qualified, insured electricians.' },
        { question: 'Can you carry out an EICR in Castleford?', answer: 'Yes. We carry out EICR testing for homeowners and landlords throughout Castleford. A full written report is issued on completion and can be emailed directly to you or your letting agent.' },
        { question: 'Do you handle landlord electrical certificates in Castleford?', answer: 'Yes. We regularly carry out landlord EICR certificates for rental properties throughout Castleford. Reports are issued electronically and can be sent directly to letting agents.' },
        { question: 'How quickly can you visit Castleford?', answer: 'We aim to arrange visits at a time to suit you. Call us on 07810 413488 and we will do our best to accommodate your schedule.' },
        { question: 'Is all your electrical work certified?', answer: 'Yes. All notifiable electrical work receives a Part P certificate, and all EICR inspections produce a full condition report. These are issued electronically on completion.' },
      ]}
    />
  )
}
