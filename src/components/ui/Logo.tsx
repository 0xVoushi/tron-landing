import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" aria-label="Home" className={`flex-shrink-0 ${className ?? ''}`}>
      <Image
        src="/logo.svg"
        alt="TRON Multisender"
        width={155}
        height={32}
        priority
        className={`h-7 w-auto ${dark ? 'brightness-0' : ''}`}
      />
    </Link>
  )
}
