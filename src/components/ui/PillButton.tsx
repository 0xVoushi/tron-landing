'use client'

import { ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface PillButtonProps {
  variant: Variant
  size?: Size
  children: ReactNode
  onClick?: () => void
  className?: string
  /** When set, renders an <a> link instead of a <button>. */
  href?: string
  /** Open the link in a new tab (only relevant with href). */
  newTab?: boolean
  /** Placement label; fires a `launch_dapp_click` event with `{ placement }` on click. */
  track?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer shadow-lg shadow-primary/25',
  secondary:
    'bg-black-4 text-dark-hard border border-grey-medium hover:bg-black-10',
  ghost:
    'bg-transparent text-dark hover:bg-black-4',
}

const sizeClasses: Record<Size, string> = {
  sm: 'py-2 px-5 text-[11px]',
  md: 'py-[10px] px-6 text-[12px]',
  lg: 'py-[14px] px-8 text-[13px]',
}

export function PillButton({
  variant,
  size = 'sm',
  children,
  onClick,
  className = '',
  href,
  newTab = false,
  track,
}: PillButtonProps) {
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    'inline-block text-center no-underline',
    'rounded-full font-rubik font-bold uppercase tracking-[0.05em]',
    'border-none cursor-pointer',
    'hover:scale-105 active:scale-95 transition-all duration-500 ease-out',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  function handleClick() {
    if (track) trackEvent('launch_dapp_click', { placement: track })
    onClick?.()
  }

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener' : undefined}
        onClick={handleClick}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {children}
    </button>
  )
}
