import type { ReactNode } from 'react'

interface FeatureCardProps {
  number: string
  title: string
  description: string
  illustration: ReactNode
  extras?: ReactNode
  footer?: ReactNode
  className?: string
  illustrationClassName?: string
  layout?: 'row' | 'column'
}

const BASE_CLASSES =
  'group relative flex flex-col rounded-lg p-6 overflow-hidden ' +
  'bg-white border border-[#ececec] ' +
  'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.025)] ' +
  'transition-all duration-500 ease-out ' +
  'hover:-translate-y-[2px] hover:border-primary/25 ' +
  'hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)]'

export function FeatureCard({
  number,
  title,
  description,
  illustration,
  extras,
  footer,
  className = '',
  illustrationClassName = '',
  layout = 'row',
}: FeatureCardProps) {
  const isRow = layout === 'row'

  return (
    <article className={`${BASE_CLASSES} ${className}`}>
      <div className="flex items-center">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center font-rubik text-[11px] font-medium tracking-[0.08em] rounded-md px-2 py-[3px] border border-primary/35 bg-white text-primary"
        >
          {number}
        </span>
      </div>

      <div
        className={
          isRow
            ? 'mt-5 flex-1 flex flex-col md:flex-row gap-4 md:gap-5'
            : 'mt-5 flex-1 flex flex-col gap-4'
        }
      >
        <div className={isRow ? 'md:w-[42%] md:shrink-0 flex flex-col' : 'flex flex-col'}>
          <h3 className="font-rubik font-semibold text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.015em] text-dark-hard mb-3">
            {title}
          </h3>
          <p className="font-rubik text-[13.5px] leading-[1.6] tracking-[-0.005em] text-dark/75 max-w-[44ch]">
            {description}
          </p>
          {extras ? <div className="mt-5">{extras}</div> : null}
        </div>

        <div
          aria-hidden="true"
          className={
            (isRow
              ? 'relative flex-1 min-h-[180px] md:min-h-[200px] flex items-center justify-center'
              : 'relative w-full min-h-[160px] flex items-center justify-center') +
            ' ' +
            illustrationClassName
          }
        >
          {illustration}
        </div>
      </div>

      {footer ? (
        <div className="mt-6 pt-5 border-t border-[#ececec]">{footer}</div>
      ) : null}
    </article>
  )
}
