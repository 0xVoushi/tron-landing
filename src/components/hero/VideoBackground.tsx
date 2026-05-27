import Image from 'next/image'

export function VideoBackground() {
  return (
    <div className="absolute inset-y-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 overflow-hidden">
      {/* Saturation pulse via CSS filter */}
      <Image
        src="/image-hero.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover animate-saturate-pulse"
      />

      {/* Dark overlay for text legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-dark-hard/60 pointer-events-none" />

      {/* Side gradient fades to dark-hard */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #161616 0%, transparent 8%, transparent 92%, #161616 100%)' }}
      />
    </div>
  )
}
