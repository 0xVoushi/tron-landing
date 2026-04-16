'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { PillButton } from '@/components/ui/PillButton'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Tokens', href: '#tokens' },
  { label: 'Perks', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const


export function Navbar({ alwaysOpaque = false }: { alwaysOpaque?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  function resolveHref(href: string) {
    if (isHome) return href
    return href === '#' ? '/' : `/${href}`
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showPill = scrolled || alwaysOpaque

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 py-4 px-8 md:py-[22px] md:px-10 lg:px-12',
        'transition-all duration-500',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex items-center transition-all duration-500',
          showPill
            ? 'max-w-5xl bg-white/90 backdrop-blur-xl rounded-full border border-grey-medium shadow-sm px-6 py-2'
            : 'max-w-7xl',
        ].join(' ')}
      >
        <Logo dark={showPill} />

        <div className="hidden md:flex items-center gap-6 ml-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              className={[
                'font-rubik font-medium text-[13px] transition-colors',
                showPill ? 'text-dark hover:text-dark-hard' : 'text-white-40 hover:text-white',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block ml-auto">
          <PillButton variant="primary" size="sm">Launch dApp</PillButton>
        </div>

        <button
          type="button"
          className={['md:hidden ml-auto', showPill ? 'text-dark' : 'text-white'].join(' ')}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-grey-medium flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              className="font-rubik font-medium text-[15px] transition-colors text-dark hover:text-dark-hard"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <PillButton variant="primary" size="md">Launch dApp</PillButton>
          </div>
        </div>
      )}
    </nav>
  )
}
