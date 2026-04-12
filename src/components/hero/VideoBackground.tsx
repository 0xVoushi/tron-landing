import Image from 'next/image'

export function VideoBackground() {
  return (
    <div className="absolute inset-y-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2">
      <Image
        src="/image-hero.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover"
      />
      {/* Dark overlay for text legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/50 pointer-events-none" />
      {/* Side gradient fades to black */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #000 0%, transparent 8%, transparent 92%, #000 100%)' }}
      />
    </div>
  )
}
