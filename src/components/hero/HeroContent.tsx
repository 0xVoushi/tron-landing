import { useTranslations } from 'next-intl'
import { PillButton } from '@/components/ui/PillButton'

const STAT_KEYS = ['recipients', 'tokenTypes', 'feeSavings', 'custody'] as const

export function HeroContent() {
  const t = useTranslations('hero')
  const tBrand = useTranslations('brand')

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_h1]:pointer-events-auto [&_p]:pointer-events-auto [&_span]:pointer-events-auto">
      <p className="font-rubik font-normal text-[15px] md:text-[17px] text-white tracking-[-0.02em] mb-[14px] bg-dark-hard px-4 py-1.5 rounded-full">
        {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
      </p>

      <h1
        className={[
          'font-rubik font-medium text-white',
          'text-[38px] md:text-[48px] lg:text-[58px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-5',
          'hero-headline-shadow',
        ].join(' ')}
      >
        {t('headline')}
      </h1>

      <p className="font-rubik text-[14px] md:text-[15px] text-white leading-relaxed mb-7 max-w-[480px] bg-dark-hard px-5 py-2.5 rounded-lg">
        {t('subheadline')}
      </p>

      <PillButton variant="primary" size="lg">{t('cta')}</PillButton>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12 w-full max-w-3xl">
        {STAT_KEYS.map((statKey) => (
          <div key={statKey} className="rounded-lg p-4 flex flex-col items-center text-center">
            <p className="font-rubik font-bold text-[24px] md:text-[28px] text-white leading-none mb-1">{t(`stats.${statKey}.value`)}</p>
            <p className="font-rubik font-semibold text-[12px] text-white mb-0.5 bg-dark-hard px-2 py-0.5 rounded-lg w-fit">{t(`stats.${statKey}.label`)}</p>
            <p className="font-rubik text-[11px] text-white bg-dark-hard px-2 py-0.5 rounded-lg w-fit">{t(`stats.${statKey}.sub`)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
