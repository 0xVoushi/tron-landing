'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

const NAV_LINKS = ['Home', 'About', 'Contact Us'] as const

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 8h16l8 8-8 8H4l8-8L4 8z" fill="white" opacity="0.9" />
      <path d="M10 8h10l6 8-6 8H10l6-8-6-8z" fill="white" opacity="0.3" />
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
      {/* Logo */}
      <div className="flex items-center gap-[10px] flex-shrink-0">
        <LogoMark />
        <span className="font-rubik font-bold text-[18px] text-white uppercase tracking-[3px]">
          targo
        </span>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8 ml-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="font-rubik font-medium text-[13px] text-white/75 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block ml-auto">
        <ClippedButton variant="red" size="sm">Contact Us</ClippedButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-rubik font-medium text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2">
            <ClippedButton variant="red" size="md">Contact Us</ClippedButton>
          </div>
        </div>
      )}
    </nav>
  )
}
