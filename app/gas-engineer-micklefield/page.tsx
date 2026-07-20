import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Gas Engineer in Micklefield | ARC Electrical & Gas',
  description: 'Gas Safe registered engineer in Micklefield. ARC Electrical & Gas. Boiler servicing, repairs, installations and CP12 gas safety records. Call 07810 413488.',
  alternates: { canonical: '/gas-engineer-micklefield' },
  openGraph: {
    title: 'Gas Engineer in Micklefield | ARC Electrical & Gas',
    description: 'Gas Safe registered engineer in Micklefield. Boiler servicing, repairs, installations and CP12 certificates. Call 07810 413488.',
    url: '/gas-engineer-micklefield',
  },
  twitter: {
    title: 'Gas Engineer in Micklefield | ARC Electrical & Gas',
    description: 'Gas Safe registered engineer in Micklefield. Boiler servicing, repairs, installations and CP12 certificates. Call 07810 413488.',
  },
}

export default function GasEngineerMicklefieldPage() {
  return (
    <LocationPageTemplate
      town="Micklefield"
      serviceType="gas-engineer"
      intro="ARC Electrical & Gas is a Gas Safe registered engineer covering Micklefield and the surrounding LS25 area. We carry out boiler servicing, repairs, new installations and gas safety records for homeowners and landlords. All gas work is fully insured with electronic records issued on completion."
      services={[
        'Annual boiler servicing — all brands and models',
        'Boiler repairs and fault diagnosis',
        'New boiler installation and commissioning',
        'Gas Safety Records (CP12) for landlords in Micklefield',
        'Gas pipe work inspection and testing',
        'Gas fire servicing and safety checks',
        'Gas appliance servicing',
      ]}
      nearbyAreas={[
        { name: 'Gas Engineer in Garforth', href: '/gas-engineer-garforth' },
        { name: 'Gas Engineer in Kippax', href: '/gas-engineer-kippax' },
        { name: 'Gas Engineer in Allerton Bywater', href: '/gas-engineer-allerton-bywater' },
        { name: 'Electrician in Micklefield', href: '/electrician-micklefield' },
      ]}
      faqs={[
        { question: 'Do you cover Micklefield for gas work?', answer: 'Yes. Micklefield is within our regular service area. We carry out gas work including boiler servicing, CP12 certificates and repairs for homeowners and landlords in the village.' },
        { question: 'Can you service my boiler in Micklefield?', answer: 'Yes. We carry out annual boiler servicing in Micklefield on all major makes and models. An electronic service record is provided on completion.' },
        { question: 'Are Gas Safety Records available for landlords in Micklefield?', answer: 'Yes. We provide Gas Safety Records (CP12) for rental properties in Micklefield. Records are issued electronically and can be emailed to you and your tenants on the day.' },
        { question: 'How do I get in touch about gas work in Micklefield?', answer: 'Call 07810 413488 or use the contact form on this website. We respond promptly and can arrange a visit at a time to suit you.' },
      ]}
    />
  )
}
