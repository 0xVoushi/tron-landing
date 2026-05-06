'use client'

import dynamic from 'next/dynamic'
import { Navbar } from './Navbar'
import { HeroContent } from './HeroContent'

const PixelBlast = dynamic(
  () => import('./PixelBlast').then(m => ({ default: m.PixelBlast })),
  { ssr: false, loading: () => null }
)

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden w-full h-dvh bg-dark-hard">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#c43631"
          patternScale={2}
          patternDensity={0.95}
          pixelSizeJitter={0.65}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.5}
          edgeFade={0}
          transparent
        />
      </div>
      <Navbar />
      <div className="absolute inset-y-0 w-full max-w-7xl left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <HeroContent />
      </div>
    </section>
  )
}
