'use client'

import { useEffect, useState } from 'react'

type HeroSlide = {
  key: string
  src: string
  alt: string
}

type JoinedSlide = {
  key: string
  type: 'joined'
  leftSrc: string
  rightSrc: string
  alt: string
}

type Slide = HeroSlide | JoinedSlide

const slides: Slide[] = [
  {
    type: 'joined',
    key: 'new-van-gas-joined',
    leftSrc: '/van.jpg',
    rightSrc: '/old-gas-services-bg.jpg',
    alt: 'ARC Electrical & Gas company van beside gas flame services image',
  },
  {
    key: 'old-lightbulbs',
    src: '/old-lightbulbs.jpg',
    alt: 'Electrical services — lightbulbs and lighting installation work',
  },
  {
    key: 'old-flame-bg',
    src: '/old-flame-bg.jpg',
    alt: 'Gas services — Gas Safe boiler and gas engineer work',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="relative overflow-hidden h-72 sm:h-80 md:h-96 2xl:h-[26rem] 2xl:rounded-2xl 2xl:shadow-2xl bg-navy-800">
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {'type' in slide && slide.type === 'joined' ? (
              <div className="grid grid-cols-2 gap-0 h-full w-full">
                <div className="relative h-full min-w-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.leftSrc}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-full min-w-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.rightSrc}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={(slide as HeroSlide).src}
                alt={(slide as HeroSlide).alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2.5 mt-4 px-4 sm:px-6 2xl:px-0">
        {slides.map((slide, i) => (
          <button
            key={slide.key}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show hero slide ${i + 1} of ${slides.length}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? 'w-7 bg-yellow-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <a
        href="tel:07810413488"
        className="2xl:hidden mt-5 mx-4 sm:mx-6 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-4 rounded-xl text-xl shadow-lg transition-colors"
      >
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        07810 413488
      </a>
    </div>
  )
}