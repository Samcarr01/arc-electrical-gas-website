import { MetadataRoute } from 'next'

const BASE = 'https://www.arcelectricalandgas.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/electrical-services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/gas-services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/eicr', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/boiler-servicing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/landlord-certificates', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/areas-we-cover', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/electrician-kippax', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/electrician-garforth', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/electrician-allerton-bywater', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/electrician-micklefield', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-kippax', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-garforth', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-allerton-bywater', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-micklefield', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/electrician-sherburn-in-elmet', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-sherburn-in-elmet', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/electrician-south-milford', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-south-milford', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/electrician-castleford', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-castleford', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/electrician-fairburn', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/gas-engineer-fairburn', priority: 0.8, changeFrequency: 'monthly' as const },
  ]
  return pages.map(p => ({
    url: `${BASE}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
