'use client'

import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // React doesn't forward the `muted` prop to the DOM — set it via ref
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      loop
      playsInline
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}
