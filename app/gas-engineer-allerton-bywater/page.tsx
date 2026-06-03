import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Gas Engineer in Allerton Bywater | ARC Electrical & Gas',
  description: 'Gas Safe registered engineer in Allerton Bywater. ARC Electrical & Gas. Boiler servicing, repairs, installations and CP12 gas safety records. Call 07810 413488.',
  alternates: { canonical: '/gas-engineer-allerton-bywater' },
}

export default function GasEngineerAllertonBywaterPage() {
  return (
    <LocationPageTemplate
      town="Allerton Bywater"
      serviceType="gas-engineer"
      intro="ARC Electrical & Gas provide Gas Safe registered gas engineering services in Allerton Bywater and the surrounding area. From annual boiler servicing and repairs to new installations and landlord gas safety records, we cover all aspects of residential and commercial gas work."
      services={[
        'Annual boiler servicing to manufacturer’s specification',
        'Boiler fault diagnosis and repair',
        'New boiler installation — Worcester Bosch and other major brands',
        'Gas Safety Records (CP12) for landlords in Allerton Bywater',
        'Gas pipework inspection and testing',
        'Gas fire servicing and safety inspection',
        'Appliance servicing — cookers, water heaters and stoves',
      ]}
      nearbyAreas={[
        { name: 'Gas Engineer in Kippax', href: '/gas-engineer-kippax' },
        { name: 'Gas Engineer in Garforth', href: '/gas-engineer-garforth' },
        { name: 'Gas Engineer in Micklefield', href: '/gas-engineer-micklefield' },
        { name: 'Electrician in Allerton Bywater', href: '/electrician-allerton-bywater' },
      ]}
      faqs={[
        { question: 'Do you cover Allerton Bywater for gas work?', answer: 'Yes. Allerton Bywater is well within our service area. We carry out boiler servicing, repairs and gas safety inspections in the village regularly.' },
        { question: 'Can you carry out a boiler service in Allerton Bywater?', answer: 'Yes. We carry out annual boiler servicing throughout Allerton Bywater on all makes and models. An electronic service record is issued on completion.' },
        { question: 'Do you issue Gas Safety Records for Allerton Bywater landlords?', answer: 'Yes. We issue CP12 Gas Safety Records for landlords in Allerton Bywater. Records are provided electronically and can be emailed to you, your tenant or letting agent.' },
        { question: 'What if my boiler breaks down in Allerton Bywater?', answer: 'Call us on 07810 413488. We will diagnose the fault and advise on the best course of action, whether repair or replacement. We carry common spare parts and aim to resolve faults efficiently.' },
      ]}
    />
  )
}
