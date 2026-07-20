import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Sherburn in Elmet | ARC Electrical & Gas',
  description: 'Looking for an electrician in Sherburn in Elmet? ARC Electrical & Gas are NAPIT & Part P accredited with 20+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-sherburn-in-elmet' },
  openGraph: {
    title: 'Electrician in Sherburn in Elmet | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Sherburn in Elmet. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
    url: '/electrician-sherburn-in-elmet',
  },
  twitter: {
    title: 'Electrician in Sherburn in Elmet | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Sherburn in Elmet. EICR, fuse boards, sockets, lighting. Call 07810 413488.',
  },
}

export default function ElectricianSherburnInElmetPage() {
  return (
    <LocationPageTemplate
      town="Sherburn in Elmet"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide professional electrical services throughout Sherburn in Elmet and the surrounding LS25 area. We are NAPIT approved and Part P accredited, with over 20 years of experience serving homes and businesses across this West Yorkshire market town. All work is fully insured and certified on completion."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'Lighting installation — LED, outdoor and feature lighting',
        'Additional sockets, USB sockets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in Sherburn in Elmet',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
        { name: 'Electrician in South Milford', href: '/electrician-south-milford' },
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
        { name: 'Gas Engineer in Sherburn in Elmet', href: '/gas-engineer-sherburn-in-elmet' },
      ]}
      faqs={[
        { question: 'Do you cover all of Sherburn in Elmet?', answer: 'Yes. We cover all of Sherburn in Elmet and the surrounding LS25 area, including Micklefield and South Milford. All work is carried out by fully qualified, insured electricians.' },
        { question: 'Can you carry out an EICR in Sherburn in Elmet?', answer: 'Yes. We carry out EICR testing for homeowners and landlords throughout Sherburn in Elmet. A full written report is issued on completion and can be emailed directly to you or your letting agent.' },
        { question: 'Do you handle landlord electrical certificates in Sherburn in Elmet?', answer: 'Yes. We regularly carry out landlord EICR certificates for rental properties throughout Sherburn in Elmet. Reports are issued electronically and can be sent directly to letting agents.' },
        { question: 'How quickly can you visit Sherburn in Elmet?', answer: 'We aim to arrange visits at a time to suit you. Call us on 07810 413488 and we will do our best to accommodate your schedule.' },
        { question: 'Is all your electrical work certified?', answer: 'Yes. All notifiable electrical work receives a Part P certificate, and all EICR inspections produce a full condition report. These are issued electronically on completion.' },
      ]}
    />
  )
}
