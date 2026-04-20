import { useTranslations } from 'next-intl'
import { Wallet, Upload, SlidersHorizontal, Zap, type LucideIcon } from 'lucide-react'

const STEP_KEYS = ['connect', 'recipients', 'amounts', 'send'] as const
type StepKey = (typeof STEP_KEYS)[number]

const STEP_ICONS: Record<StepKey, LucideIcon> = {
  connect: Wallet,
  recipients: Upload,
  amounts: SlidersHorizontal,
  send: Zap,
}

const STEP_NUMBERS: Record<StepKey, string> = {
  connect: '01',
  recipients: '02',
  amounts: '03',
  send: '04',
}

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative bg-grey-light py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="how-it-works-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-12 md:mb-16 text-center"
        >
          {t('title')}
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-grey-medium to-primary/30" />
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-grey-medium to-primary/30" />

          {STEP_KEYS.map((stepKey, i) => {
            const Icon = STEP_ICONS[stepKey]
            const number = STEP_NUMBERS[stepKey]
            const title = t(`steps.${stepKey}.title`)
            const description = t(`steps.${stepKey}.description`)
            const isLeft = i % 2 === 0

            return (
              <div key={stepKey} className="relative flex items-start mb-12 last:mb-0">
                <div className="md:hidden absolute left-5 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-grey-light z-10" />
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-grey-light z-10" />

                <div className="md:hidden pl-10 w-full">
                  <TimelineCard number={number} title={title} description={description} Icon={Icon} />
                </div>

                <div
                  className={[
                    'hidden md:block w-[calc(50%-2rem)]',
                    isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8',
                  ].join(' ')}
                >
                  <TimelineCard number={number} title={title} description={description} Icon={Icon} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  number,
  title,
  description,
  Icon,
}: {
  number: string
  title: string
  description: string
  Icon: LucideIcon
}) {
  return (
    <div className="relative overflow-hidden glass-card rounded-lg p-6 group hover:shadow-md hover:-translate-y-1 transition-all duration-500">
      <span className="absolute -top-3 -right-1 font-rubik font-extrabold text-[72px] text-black-4 leading-none select-none pointer-events-none">
        {number}
      </span>
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
          <Icon size={20} className="text-primary" />
        </div>
        <div className="font-rubik font-bold text-[11px] text-primary-medium uppercase tracking-[2px] mb-2">
          {number}
        </div>
        <h3 className="font-rubik font-bold text-[16px] text-dark-hard mb-2">
          {title}
        </h3>
        <p className="font-rubik text-[13px] text-dark leading-relaxed tracking-[-0.01em]">
          {description}
        </p>
      </div>
    </div>
  )
}
