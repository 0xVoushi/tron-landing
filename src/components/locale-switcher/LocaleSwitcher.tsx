'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { ChevronDown, Globe } from 'lucide-react'
import { Link, usePathname } from '@/i18n/routing'
import { locales, type Locale } from '@/i18n/locales'

type LocaleSwitcherProps = {
  variant?: 'dark' | 'light'
}

export function LocaleSwitcher({ variant = 'light' }: LocaleSwitcherProps) {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  const triggerClass =
    variant === 'dark'
      ? 'bg-dark-hard text-white-80 hover:text-white'
      : 'text-dark hover:bg-black-4 hover:text-dark-hard'

  if (!mounted) {
    return (
      <div className={`flex items-center gap-1.5 font-rubik font-medium text-[13px] px-3 py-1.5 rounded-full ${triggerClass}`}>
        <Globe size={14} aria-hidden="true" />
        <span>{current.name}</span>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 font-rubik font-medium text-[13px] px-3 py-1.5 rounded-full transition-colors ${triggerClass}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.name}
      >
        <Globe size={14} aria-hidden="true" />
        <span>{current.name}</span>
        <ChevronDown size={12} aria-hidden="true" className={open ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[160px] rounded-xl bg-white shadow-lg border border-grey-medium py-2 z-50"
        >
          {locales.map((option) => {
            const isCurrent = option.code === locale
            return (
              <li key={option.code} role="none">
                {isCurrent ? (
                  <span
                    role="option"
                    aria-selected="true"
                    className="block px-4 py-2 font-rubik text-[13px] text-grey cursor-default"
                  >
                    {option.name}
                  </span>
                ) : (
                  <Link
                    role="option"
                    aria-selected="false"
                    href={pathname}
                    locale={option.code}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 font-rubik text-[13px] text-dark hover:bg-grey-light hover:text-dark-hard transition-colors"
                  >
                    {option.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
