'use client'

export default function HeroCarousel() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {/* Left: van photo */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-40 sm:h-56 md:h-64">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/van-2.jpg"
          alt="ARC Electrical & Gas company van — 100% electric, Gas Safe & NAPIT registered"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle gradient at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Right: gas flame photo */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-40 sm:h-56 md:h-64">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/old-flame-bg.jpg"
          alt="Gas services — boiler and gas engineer work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle gradient at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  )
}