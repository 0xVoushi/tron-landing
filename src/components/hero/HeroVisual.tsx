'use client'

import dynamic from 'next/dynamic'

const PixelBlast = dynamic(
  () => import('./PixelBlast').then((m) => ({ default: m.PixelBlast })),
  { ssr: false, loading: () => null }
)

export function HeroVisual() {
  return (
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
  )
}
