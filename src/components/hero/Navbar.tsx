'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { PillButton } from '@/components/ui/PillButton'
import { Logo } from '@/components/ui/Logo'
import { LocaleSwitcher } from '@/components/locale-switcher/LocaleSwitcher'
import { Link, usePathname } from '@/i18n/routing'

const NAV_LINK_KEYS = [
  { key: 'home', href: '#' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'features', href: '#features' },
  { key: 'tokens', href: '#tokens' },
  { key: 'perks', href: '#pricing' },
  { key: 'faq', href: '#faq' },
] as const

export function Navbar({ alwaysOpaque = false }: { alwaysOpaque?: boolean }) {
  const t = useTranslations('nav')
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
            ? 'max-w-5xl bg-white/90 backdrop-blur-xl rounded-full shadow-sm px-6 py-2'
            : 'max-w-7xl',
        ].join(' ')}
      >
        <Logo dark={showPill} />

        <div className="hidden md:flex items-center gap-2 ml-10">
          {NAV_LINK_KEYS.map((link) => (
            <Link
              key={link.key}
              href={resolveHref(link.href)}
              className={[
                'font-rubik font-medium text-[13px] px-3 py-1.5 rounded-full transition-colors',
                showPill
                  ? 'text-dark hover:bg-black-4 hover:text-dark-hard'
                  : 'bg-dark-hard text-white-80 hover:bg-dark hover:text-white',
              ].join(' ')}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 ml-auto">
          <LocaleSwitcher variant={showPill ? 'light' : 'dark'} />
          <PillButton variant="primary" size="sm">{t('launchApp')}</PillButton>
        </div>

        <button
          type="button"
          className={['md:hidden ml-auto', showPill ? 'text-dark' : 'text-white'].join(' ')}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? t('closeMenu') : t('openMenu')}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-grey-medium flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINK_KEYS.map((link) => (
            <Link
              key={link.key}
              href={resolveHref(link.href)}
              className="font-rubik font-medium text-[15px] transition-colors text-dark hover:text-dark-hard"
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <LocaleSwitcher variant="light" />
            <PillButton variant="primary" size="md">{t('launchApp')}</PillButton>
          </div>
        </div>
      )}
    </nav>
  )
}
