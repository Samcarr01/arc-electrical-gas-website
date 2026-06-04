import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Gas Engineer in Garforth | ARC Electrical & Gas',
  description: 'Gas Safe registered engineer in Garforth. ARC Electrical & Gas. Boiler servicing, repairs, new boilers and CP12 gas safety records. Worcester Bosch accredited. Call 07810 413488.',
  alternates: { canonical: '/gas-engineer-garforth' },
}

export default function GasEngineerGarforthPage() {
  return (
    <LocationPageTemplate
      town="Garforth"
      serviceType="gas-engineer"
      intro="ARC Electrical & Gas is a Gas Safe registered engineer providing boiler servicing, repairs, installations and gas safety records throughout Garforth and the LS25 area. Worcester Bosch accredited installers with over 20 years of experience. Electronic records provided on all gas work."
      services={[
        'Annual boiler servicing — all makes and models',
        'Boiler fault finding and repair',
        'New boiler installation — supply and fit',
        'Gas Safety Records (CP12) for landlords in Garforth',
        'Gas pipework and gas meter connections',
        'Gas fire servicing and inspection',
        'Gas appliance servicing — cookers, stoves and water heaters',
      ]}
      nearbyAreas={[
        { name: 'Gas Engineer in Kippax', href: '/gas-engineer-kippax' },
        { name: 'Gas Engineer in Allerton Bywater', href: '/gas-engineer-allerton-bywater' },
        { name: 'Gas Engineer in Micklefield', href: '/gas-engineer-micklefield' },
        { name: 'Electrician in Garforth', href: '/electrician-garforth' },
      ]}
      faqs={[
        { question: 'Are you Gas Safe registered to work in Garforth?', answer: 'Yes. We are Gas Safe registered (Reg. No. 584102). Our registration can be verified at gassaferegister.co.uk.' },
        { question: 'Can you service my boiler in Garforth?', answer: 'Yes. We carry out annual boiler servicing throughout Garforth on all major brands. An electronic service record is issued on completion.' },
        { question: 'Do you issue Gas Safety Records for landlords in Garforth?', answer: 'Yes. We issue CP12 Gas Safety Records for landlords throughout Garforth. Records can be emailed to you, your tenant or your letting agent on the day of inspection.' },
        { question: 'Are you Worcester Bosch accredited?', answer: 'Yes. We are Worcester Bosch accredited installers. This means extended warranties are available when we install a Worcester Bosch boiler in your Garforth property.' },
        { question: 'How do I book a boiler service in Garforth?', answer: 'Call us on 07810 413488 or use the contact form. We aim to arrange appointments at a time that suits you.' },
      ]}
    />
  )
}
