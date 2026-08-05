import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in South Milford | ARC Electrical & Gas',
  description: 'Looking for an electrician in South Milford? ARC Electrical & Gas are NAPIT & Part P accredited with 30+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-south-milford' },
  openGraph: {
    title: 'Electrician in South Milford | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in South Milford. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
    url: '/electrician-south-milford',
  },
  twitter: {
    title: 'Electrician in South Milford | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in South Milford. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
  },
}

export default function ElectricianSouthMilfordPage() {
  return (
    <LocationPageTemplate
      town="South Milford"
      serviceType="electrician"
      intro="ARC Electrical & Gas are NAPIT approved, Part P accredited electricians covering South Milford and the surrounding LS25 area. With over 30 years of experience, we look after homes and businesses in the village between Sherburn in Elmet and Selby. Every job is fully insured and certified on completion."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'Lighting installation — LED, outdoor and feature lighting',
        'Additional sockets, USB sockets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in South Milford',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Sherburn in Elmet', href: '/electrician-sherburn-in-elmet' },
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
        { name: 'Gas Engineer in South Milford', href: '/gas-engineer-south-milford' },
      ]}
      faqs={[
        { question: 'Do you cover all of South Milford?', answer: 'Yes. We cover all of South Milford and the surrounding LS25 area, including Sherburn in Elmet and Monk Fryston. All work is carried out by fully qualified, insured electricians.' },
        { question: 'Can you carry out an EICR in South Milford?', answer: 'Yes. We carry out EICR testing for homeowners and landlords throughout South Milford. A full written report is issued on completion and can be emailed directly to you or your letting agent.' },
        { question: 'Do you handle landlord electrical certificates in South Milford?', answer: 'Yes. We regularly carry out landlord EICR certificates for rental properties throughout South Milford. Reports are issued electronically and can be sent directly to letting agents.' },
        { question: 'How quickly can you visit South Milford?', answer: 'We aim to arrange visits at a time to suit you. Call us on 07810 413488 and we will do our best to accommodate your schedule.' },
        { question: 'Is all your electrical work certified?', answer: 'Yes. All notifiable electrical work receives a Part P certificate, and all EICR inspections produce a full condition report. These are issued electronically on completion.' },
      ]}
    />
  )
}
