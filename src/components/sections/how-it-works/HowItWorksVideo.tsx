'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

type HowItWorksVideoProps = {
  stepNumber: string
  src?: string
}

function Poster() {
  return (
    <div className="w-14 h-14 rounded-full bg-primary-ghost flex items-center justify-center">
      <Play size={22} className="text-primary translate-x-[1px]" aria-hidden="true" />
    </div>
  )
}

export function HowItWorksVideo({ stepNumber, src }: HowItWorksVideoProps) {
  const hasSrc = typeof src === 'string' && src.length > 0

  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSrc, setActiveSrc] = useState<string | undefined>(undefined)
  const [autoplay, setAutoplay] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!hasSrc) return
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reduced =
              typeof window !== 'undefined' && typeof window.matchMedia === 'function'
                ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
                : false
            setActiveSrc(src)
            setAutoplay(!reduced)
            observer.disconnect()
            break
          }
        }
      },
      { rootMargin: '200px', threshold: 0 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [hasSrc, src])

  if (!hasSrc) {
    return (
      <div
        role="img"
        aria-label={`Step ${stepNumber} video placeholder`}
        className="aspect-[16/9] rounded-xl overflow-hidden glass-card border border-primary/10 flex flex-col items-center justify-center gap-3"
      >
        <Poster />
        <p className="font-rubik text-[13px] text-grey tracking-[-0.01em]">
          Video coming soon
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] rounded-xl overflow-hidden glass-card border border-primary/10"
    >
      <div
        data-testid="video-poster"
        aria-hidden="true"
        className={[
          'absolute inset-0 flex items-center justify-center',
          'transition-opacity duration-500',
          loaded ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <Poster />
      </div>
      <video
        src={activeSrc}
        autoPlay={autoplay}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`Step ${stepNumber} demo`}
        onLoadedData={() => setLoaded(true)}
        className={[
          'w-full h-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
    </div>
  )
}
