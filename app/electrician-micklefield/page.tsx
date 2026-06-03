import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician in Micklefield | ARC Electrical & Gas',
  description: 'Local electrician in Micklefield. ARC Electrical & Gas are NAPIT & Part P accredited. EICR, fuse boards, sockets, lighting, landlord certificates. Call 07810 413488.',
  alternates: { canonical: '/electrician-micklefield' },
}

export default function ElectricianMicklefieldPage() {
  return (
    <LocationPageTemplate
      town="Micklefield"
      serviceType="electrician"
      intro="ARC Electrical & Gas provide professional electrical services in Micklefield and the surrounding LS25 area. NAPIT approved and Part P accredited, we cover all aspects of domestic and commercial electrical work with full certification on every job."
      services={[
        'Electrical fault finding and diagnosis',
        'EICR — Electrical Installation Condition Reports for homes and landlords',
        'Consumer unit and fuse board replacement',
        'Lighting installation — LED, outdoor and security lighting',
        'Additional sockets and USB outlets',
        'Cooker installation and connection',
        'Extractor fan installation',
        'Electric shower installation',
        'Landlord electrical certificates',
      ]}
      nearbyAreas={[
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
        { name: 'Gas Engineer in Micklefield', href: '/gas-engineer-micklefield' },
      ]}
      faqs={[
        { question: 'Do you cover Micklefield?', answer: 'Yes. Micklefield is within our service area. We cover the village and surrounding LS25 area for both residential and commercial electrical work.' },
        { question: 'Can I book an EICR in Micklefield?', answer: 'Yes. We carry out Electrical Installation Condition Reports for homeowners and landlords in Micklefield. A full report is issued and can be emailed on the day.' },
        { question: 'Do you cover Micklefield for fuse board replacements?', answer: 'Yes. We replace consumer units throughout Micklefield. Modern RCD fuse boards offer much better protection than older-style boards and we can fit and certify these quickly.' },
        { question: 'How do I contact you about electrical work in Micklefield?', answer: 'Call 07810 413488, use our contact form, or email chris@arcelectricalandgas.co.uk. We aim to respond the same day.' },
      ]}
    />
  )
}
