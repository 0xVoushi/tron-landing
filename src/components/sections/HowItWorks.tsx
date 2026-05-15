import { useTranslations } from 'next-intl'
import { HowItWorksStep } from './how-it-works/HowItWorksStep'

const STEP_KEYS = ['connect', 'prepare', 'approve', 'multisend'] as const
type StepKey = (typeof STEP_KEYS)[number]

const STEP_NUMBERS: Record<StepKey, string> = {
  connect: '01',
  prepare: '02',
  approve: '03',
  multisend: '04',
}

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative bg-grey-light py-12 md:py-16 lg:py-20 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          {tBrand('name')}{' '}
          <span className="text-primary font-light">[ </span>
          {t('eyebrow')}
          <span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="how-it-works-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-12 md:mb-16 text-center"
        >
          {t('title')}
        </h2>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {STEP_KEYS.map((key) => (
            <HowItWorksStep
              key={key}
              number={STEP_NUMBERS[key]}
              title={t(`steps.${key}.title`)}
              description={t(`steps.${key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
