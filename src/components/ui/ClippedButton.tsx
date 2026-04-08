import { ReactNode } from 'react'

type Variant = 'red' | 'white'
type Size = 'sm' | 'md' | 'lg'

interface ClippedButtonProps {
  variant: Variant
  size?: Size
  children: ReactNode
  onClick?: () => void
  className?: string
}

const variantClasses: Record<Variant, string> = {
  red: 'bg-brand-red text-white',
  white: 'bg-white text-black',
}

const sizeClasses: Record<Size, string> = {
  sm: 'btn-clipped-sm py-2 px-4 text-[11px]',
  md: 'btn-clipped-md py-[9px] px-[18px] text-[12px]',
  lg: 'btn-clipped-lg py-[14px] px-[28px] text-[13px]',
}

export function ClippedButton({
  variant,
  size = 'sm',
  children,
  onClick,
  className = '',
}: ClippedButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        variantClasses[variant],
        sizeClasses[size],
        'font-rubik font-bold uppercase tracking-[0.05em]',
        'border-none cursor-pointer',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </button>
  )
}
