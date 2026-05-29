'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
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
 * WebGL gate: only mount the PixelBlast canvas (and trigger its three.js +
 * postprocessing chunk download) on desktop after the first real pointer
 * interaction. First paint uses `StaticHeroBackground` on every viewport, so
 * Lighthouse and passive visitors don't pay the decorative WebGL startup cost.
 *
 * Verify after deploy via a desktop network trace: the PixelBlast dynamic
 * chunk should not be requested before pointer movement/click.
 */
export function HeroVisual() {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )
  const [hasPointerIntent, setHasPointerIntent] = useState(false)

  useEffect(() => {
    if (!isDesktop) return
    if (hasPointerIntent) return

    const activate = () => setHasPointerIntent(true)
    // `once` cleans up after the first interaction; this effect cleanup covers
    // viewport changes or unmount before any pointer event fires.
    window.addEventListener('pointermove', activate, { once: true, passive: true })
    window.addEventListener('pointerdown', activate, { once: true, passive: true })

    return () => {
      window.removeEventListener('pointermove', activate)
      window.removeEventListener('pointerdown', activate)
    }
  }, [isDesktop, hasPointerIntent])

  if (!isDesktop || !hasPointerIntent) return null

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
      transparent={false}
    />
  )
}
