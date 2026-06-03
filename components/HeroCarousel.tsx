'use client'
import { useState, useEffect } from 'react'

const slides = [
  { src: '/van.jpg', alt: 'ARC Electrical & Gas company van' },
  { src: '/lightbulbs.jpg', alt: 'Electrical services — lighting and installation work' },
  { src: '/flames.jpg', alt: 'Gas services — boiler and gas engineer work' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // Respect users who prefer reduced motion — hold on the first image
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 sm:h-80 lg:h-[26rem] bg-navy-800">
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 mt-5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setCurrent(i)}
            aria-label={`Show image ${i + 1} of ${slides.length}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? 'w-7 bg-yellow-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
