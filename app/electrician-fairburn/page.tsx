import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Fairburn | ARC Electrical & Gas',
  description: 'Looking for an electrician in Fairburn? ARC Electrical & Gas are NAPIT & Part P accredited with 20+ years experience. EICR, fuse boards, sockets, lighting and more. Call 07810 413488.',
  alternates: { canonical: '/electrician-fairburn' },
}

export default function ElectricianFairburnPage() {
  return (
    <LocationPageTemplate
      town="Fairburn"
      serviceType="electrician"
      intro="ARC Electrical & Gas are NAPIT approved, Part P accredited electricians covering Fairburn and the nearby area around Castleford. With over 20 years of local experience, we look after homes and businesses throughout the village. Every job is fully insured and certified on completion."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'Lighting installation — LED, outdoor and feature lighting',
        'Additional sockets, USB sockets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties in Fairburn',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Castleford', href: '/electrician-castleford' },
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
        { name: 'Gas Engineer in Fairburn', href: '/gas-engineer-fairburn' },
      ]}
      faqs={[
        { question: 'Do you cover all of Fairburn?', answer: 'Yes. We cover all of Fairburn and the nearby area, including Castleford and Allerton Bywater. All work is carried out by fully qualified, insured electricians.' },
        { question: 'Can you carry out an EICR in Fairburn?', answer: 'Yes. We carry out EICR testing for homeowners and landlords throughout Fairburn. A full written report is issued on completion and can be emailed directly to you or your letting agent.' },
        { question: 'Do you handle landlord electrical certificates in Fairburn?', answer: 'Yes. We regularly carry out landlord EICR certificates for rental properties throughout Fairburn. Reports are issued electronically and can be sent directly to letting agents.' },
        { question: 'How quickly can you visit Fairburn?', answer: 'We aim to arrange visits at a time to suit you. Call us on 07810 413488 and we will do our best to accommodate your schedule.' },
        { question: 'Is all your electrical work certified?', answer: 'Yes. All notifiable electrical work receives a Part P certificate, and all EICR inspections produce a full condition report. These are issued electronically on completion.' },
      ]}
    />
  )
}
