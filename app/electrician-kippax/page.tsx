import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Kippax | ARC Electrical & Gas',
  description: 'Looking for an electrician in Kippax? ARC Electrical & Gas are NAPIT & Part P accredited with 30+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-kippax' },
  openGraph: {
    title: 'Electrician in Kippax | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Kippax. EICR, fuse boards, sockets, lighting. 30+ years experience. Call 07810 413488.',
    url: '/electrician-kippax',
  },
  twitter: {
    title: 'Electrician in Kippax | ARC Electrical & Gas',
    description: 'NAPIT & Part P accredited electrician in Kippax. EICR, fuse boards, sockets, lighting. 30+ years experience. Call 07810 413488.',
  },
}

export default function ElectricianKippaxPage() {
  return (
    <LocationPageTemplate
      town="Kippax"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide professional electrical services throughout Kippax and the surrounding LS25 area. We are NAPIT approved and Part P accredited, with over 30 years of experience serving local homes and businesses. All work is fully insured and certified on completion."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'Lighting installation — LED, outdoor and feature lighting',
        'Additional sockets, USB sockets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in Kippax',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
        { name: 'Gas Engineer in Kippax', href: '/gas-engineer-kippax' },
      ]}
      faqs={[
        { question: 'Do you cover all of Kippax?', answer: 'Yes. We cover all areas of Kippax and the surrounding LS25 postcode including Great Preston and Allerton Bywater.' },
        { question: 'Can you carry out an EICR in Kippax?', answer: 'Yes. We carry out EICR testing for homeowners and landlords throughout Kippax. A full written report is issued on completion and can be emailed directly to you or your letting agent.' },
        { question: 'Do you handle landlord electrical certificates in Kippax?', answer: 'Yes. We regularly carry out landlord EICR certificates for rental properties throughout Kippax. Reports are issued electronically and can be sent directly to letting agents.' },
        { question: 'How quickly can you visit Kippax?', answer: 'We aim to arrange visits at a time to suit you. Call us on 07810 413488 and we will do our best to accommodate your schedule.' },
        { question: 'Is all your work certified?', answer: 'Yes. All notifiable electrical work receives a Part P certificate, and all EICR inspections produce a full condition report. These are issued electronically on completion.' },
      ]}
    />
  )
}
