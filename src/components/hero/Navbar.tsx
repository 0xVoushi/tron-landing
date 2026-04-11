'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
] as const

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5"/>
      <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="white" opacity="0.85"/>
    </svg>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-20 flex items-center py-4 px-8 md:py-[22px] md:px-10 lg:px-12"
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)' }}
    >
      <div className="flex items-center gap-[10px] flex-shrink-0">
        <LogoMark />
        <span className="font-rubik font-bold text-[14px] text-white uppercase tracking-[3px]">
          TRON MULTISENDER
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 ml-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-rubik font-medium text-[13px] text-white/75 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block ml-auto">
        <ClippedButton variant="red" size="sm">Launch App</ClippedButton>
      </div>

      <button
        type="button"
        className="md:hidden ml-auto text-white"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rubik font-medium text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <ClippedButton variant="red" size="md">Launch App</ClippedButton>
          </div>
        </div>
      )}
    </nav>
  )
}
