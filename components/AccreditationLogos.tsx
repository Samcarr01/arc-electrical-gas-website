const logos = [
  { src: '/logos/napit.png', alt: 'NAPIT Part P Approved Electrician' },
  { src: '/logos/gas-safe.png', alt: 'Gas Safe Registered' },
  { src: '/logos/worcester-bosch.png', alt: 'Worcester Bosch Accredited Installer' },
]

export default function AccreditationLogos() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Trusted &amp; Accredited
        </p>
        <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
          {logos.map(l => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.src}
              src={l.src}
              alt={l.alt}
              className="h-20 sm:h-24 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
