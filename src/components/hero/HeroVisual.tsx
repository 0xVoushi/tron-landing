'use client'

import { useSyncExternalStore } from 'react'
import dynamic from 'next/dynamic'

const PixelBlast = dynamic(
  () => import('./PixelBlast').then((m) => ({ default: m.PixelBlast })),
  { ssr: false, loading: () => null }
)

const DESKTOP_QUERY = '(min-width: 768px)'

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches
}

// Server snapshot: render nothing during SSR so hydration doesn't have to
// match a server-rendered canvas. HeroVisual is gated by client matchMedia.
function getDesktopServerSnapshot() {
  return false
}

/**
 * Tier A WebGL gate: only mount the PixelBlast canvas (and trigger its
 * three.js + postprocessing chunk download) on desktop viewports. Mobile
 * users see only the static SVG noise from `StaticHeroBackground`, saving
 * ~140 KB gz / ~560 KB decoded.
 *
 * Verify after deploy via a mobile network trace — the dynamic chunk
 * (`_next/static/chunks/10v2swpoex55j.js` at audit time) should not be
 * requested at <768 px.
 */
export function HeroVisual() {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )

  if (!isDesktop) return null

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
