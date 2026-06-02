import Link from 'next/link'

interface Props {
  title?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  bg?: 'dark' | 'yellow' | 'light'
}

export default function CTABanner({
  title = 'Ready to get started?',
  description = "Call us today or send a message and we'll get back to you promptly.",
  primaryCTA = { label: 'Call 07810 413488', href: 'tel:07810413488' },
  secondaryCTA = { label: 'Get a Free Quote', href: '/contact' },
  bg = 'dark',
}: Props) {
  const bgClass = bg === 'dark' ? 'bg-gray-900' : bg === 'yellow' ? 'bg-yellow-400' : 'bg-gray-50'
  const textClass = bg === 'light' ? 'text-gray-900' : bg === 'yellow' ? 'text-gray-900' : 'text-white'
  const subTextClass = bg === 'light' ? 'text-gray-600' : bg === 'yellow' ? 'text-gray-800' : 'text-gray-300'

  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold ${textClass} mb-3`}>{title}</h2>
        <p className={`${subTextClass} mb-8 text-lg max-w-xl mx-auto`}>{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA.href.startsWith('tel:') ? (
            <a href={primaryCTA.href} className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              {primaryCTA.label}
            </a>
          ) : (
            <Link href={primaryCTA.href} className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-md">
              {primaryCTA.label}
            </Link>
          )}
          <Link href={secondaryCTA.href} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
            {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
