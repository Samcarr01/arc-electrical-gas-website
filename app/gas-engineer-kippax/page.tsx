import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Gas Engineer in Kippax | ARC Electrical & Gas',
  description: 'Looking for a gas engineer in Kippax? ARC Electrical & Gas are Gas Safe registered & Worcester Bosch accredited. Boiler servicing, repairs, installations and CP12 certificates. Call 07810 413488.',
  alternates: { canonical: '/gas-engineer-kippax' },
}

export default function GasEngineerKippaxPage() {
  return (
    <LocationPageTemplate
      town="Kippax"
      serviceType="gas-engineer"
      intro="ARC Electrical & Gas are Gas Safe registered engineers providing boiler servicing, repairs and installations throughout Kippax and the surrounding LS25 area. Worcester Bosch accredited with over 20 years of experience. All gas work is fully insured and an electronic record is issued on completion."
      services={[
        'Annual boiler servicing to manufacturer’s instructions',
        'Boiler fault diagnosis and repair',
        'New boiler supply and installation',
        'Gas Safety Records (CP12) for landlords in Kippax',
        'Gas pipework inspection and testing',
        'Gas fire servicing and safety checks',
        'Gas appliance servicing — cookers, water heaters and stoves',
      ]}
      nearbyAreas={[
        { name: 'Gas Engineer in Garforth', href: '/gas-engineer-garforth' },
        { name: 'Gas Engineer in Allerton Bywater', href: '/gas-engineer-allerton-bywater' },
        { name: 'Gas Engineer in Micklefield', href: '/gas-engineer-micklefield' },
        { name: 'Electrician in Kippax', href: '/electrician-kippax' },
      ]}
      faqs={[
        { question: 'Are you Gas Safe registered to work in Kippax?', answer: 'Yes. We are Gas Safe registered (Reg. No. 584102). All our gas engineers are fully qualified and registered. You can verify our registration at gassaferegister.co.uk.' },
        { question: 'Can you service my boiler in Kippax?', answer: 'Yes. We carry out annual boiler servicing throughout Kippax. We service all major makes and models and issue an electronic service record on completion.' },
        { question: 'Do you carry out Gas Safety Records for landlords in Kippax?', answer: 'Yes. We carry out CP12 Gas Safety Records for landlords with rental properties in Kippax. Records are issued electronically and can be emailed directly to your letting agent.' },
        { question: 'Do you install Worcester Bosch boilers in Kippax?', answer: 'Yes. We are Worcester Bosch accredited installers, which means we can offer new boilers with extended manufacturer warranties. Contact us to discuss your options.' },
        { question: 'What should I do if I smell gas?', answer: 'If you smell gas, do not use any switches or flames. Open windows and doors, leave the property and call the National Gas Emergency Service on 0800 111 999. Once safe, call us to help identify the source and carry out any repairs.' },
      ]}
    />
  )
}
