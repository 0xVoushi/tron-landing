import type { ReactNode } from 'react'

interface FeatureCardProps {
  number: string
  title: string
  description: string
  illustration: ReactNode
  extras?: ReactNode
  footer?: ReactNode
  className?: string
  bodyClassName?: string
  textColClassName?: string
  illustrationClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  layout?: 'row' | 'column'
  noFooterBorder?: boolean
}

const BASE_CLASSES =
  'group relative flex flex-col rounded-lg p-6 overflow-hidden ' +
  'bg-white border border-[#ececec] ' +
  'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.025)] ' +
  'transition-all duration-500 ease-out ' +
  'hover:-translate-y-[2px] hover:border-primary/25 ' +
  'hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)]'

const ROW_DEFAULT = 'grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-5 md:gap-6 items-start'
const COL_DEFAULT = 'grid grid-rows-[auto_1fr] gap-5'

export function FeatureCard({
  number,
  title,
  description,
  illustration,
  extras,
  footer,
  className = '',
  bodyClassName = '',
  textColClassName = '',
  illustrationClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  layout = 'row',
  noFooterBorder = false,
}: FeatureCardProps) {
  const isRow = layout === 'row'
  const bodyClasses = bodyClassName || (isRow ? ROW_DEFAULT : COL_DEFAULT)

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

      <div className={`mt-5 min-h-0 ${bodyClasses}`}>
        <div className={`flex flex-col min-w-0 ${textColClassName}`}>
          <h3
            className={`font-rubik font-semibold leading-[1.2] tracking-[-0.015em] text-dark-hard mb-3 ${
              titleClassName || 'text-[20px] md:text-[22px]'
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-rubik leading-[1.6] tracking-[-0.005em] text-dark/75 ${
              descriptionClassName || 'text-[13.5px] max-w-[44ch]'
            }`}
          >
            {description}
          </p>
          {extras ? <div className="mt-5">{extras}</div> : null}
        </div>

        <div
          aria-hidden="true"
          className={`relative min-w-0 min-h-0 flex items-center justify-center ${illustrationClassName}`}
        >
          {illustration}
        </div>
      </div>

      {footer ? (
        <div
          className={`mt-auto pt-5 ${
            noFooterBorder ? '' : 'border-t border-[#ececec]'
          }`}
        >
          <div className="pt-1">{footer}</div>
        </div>
      ) : null}
    </article>
  )
}
