import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Allerton Bywater | ARC Electrical & Gas',
  description: 'Local electrician in Allerton Bywater. ARC Electrical & Gas are NAPIT & Part P accredited. EICR, fuse boards, sockets, lighting, landlord certificates. Call 07810 413488.',
  alternates: { canonical: '/electrician-allerton-bywater' },
}

export default function ElectricianAllertonBywaterPage() {
  return (
    <LocationPageTemplate
      town="Allerton Bywater"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide trusted electrical services in Allerton Bywater and the surrounding area. A family-run business with over 20 years of experience, NAPIT approved and Part P accredited. We are fully insured and issue certificates on completion of all work."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports',
        'Fuse board and consumer unit replacement',
        'LED lighting and feature lighting installation',
        'Additional sockets, USB outlets and switch upgrades',
        'Cooker and electric hob installation',
        'Extractor fan installation in kitchens and bathrooms',
        'Electric shower installation and replacement',
        'Landlord electrical certificates for rental properties',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
        { name: 'Gas Engineer in Allerton Bywater', href: '/gas-engineer-allerton-bywater' },
      ]}
      faqs={[
        { question: 'Do you cover Allerton Bywater?', answer: 'Yes. Allerton Bywater is well within our service area. We regularly carry out electrical work in the village for homeowners and landlords.' },
        { question: 'Can I get an EICR in Allerton Bywater?', answer: 'Yes. We carry out EICR electrical condition reports throughout Allerton Bywater. The report is issued on the same day and can be emailed directly to you, your agent or property manager.' },
        { question: 'Do you handle older properties in Allerton Bywater?', answer: 'Yes. We have experience working in older properties and can advise on whether a fuse board upgrade or rewire is needed. All assessment work is carried out by NAPIT approved electricians.' },
        { question: 'Are you able to carry out same-day or urgent visits?', answer: 'Please call us on 07810 413488 to discuss availability for urgent electrical work. We will always do our best to accommodate where possible.' },
        { question: 'Can you issue landlord certificates for properties in Allerton Bywater?', answer: 'Yes. We carry out EICR inspections for landlords in Allerton Bywater and issue all certificates electronically, which can be emailed to your letting agent.' },
      ]}
    />
  )
}
