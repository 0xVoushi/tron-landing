import type { ComponentType } from 'react'
import { useTranslations } from 'next-intl'
import {
  BatchTrxIllustration,
  CsvUploadIllustration,
  FeesIllustration,
  InstantConfirmationIllustration,
  OnChainIllustration,
  Trc20Illustration,
} from './FeatureIllustrations'

type Variant = 'hero' | 'standard' | 'dark'

type FeatureCard = {
  key: string
  variant: Variant
  wide?: boolean
  ghostNum: string
  Illustration: ComponentType
}

const FEATURE_CARDS: readonly FeatureCard[] = [
  { key: 'batchTrx', variant: 'hero', wide: true, ghostNum: '01', Illustration: BatchTrxIllustration },
  { key: 'trc20', variant: 'standard', ghostNum: '02', Illustration: Trc20Illustration },
  { key: 'onChain', variant: 'dark', ghostNum: '03', Illustration: OnChainIllustration },
  { key: 'csv', variant: 'standard', ghostNum: '04', Illustration: CsvUploadIllustration },
  { key: 'fees', variant: 'standard', ghostNum: '05', Illustration: FeesIllustration },
  { key: 'instant', variant: 'hero', wide: true, ghostNum: '06', Illustration: InstantConfirmationIllustration },
]

const VARIANT_CLASSES: Record<Variant, string> = {
  standard: 'bg-white border border-[#bbbbbb33] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.03)] hover:border-primary/25',
  hero: 'bg-gradient-to-br from-white to-[#fff6f4] border border-primary/20 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.03)] hover:border-primary/35',
  dark: 'bg-[#161616] border border-[#2a2a2a] text-grey-light hover:border-[#3a3a3a]',
}

export function Features() {
  const t = useTranslations('features')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-grey-light py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="features-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-12 md:mb-16 text-center"
        >
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURE_CARDS.map(({ key, variant, wide, ghostNum, Illustration }) => {
            const isDark = variant === 'dark'
            const cardClass = [
              'group relative flex flex-col rounded-lg p-6 overflow-hidden min-h-[360px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_12px_32px_rgba(0,0,0,0.05)]',
              VARIANT_CLASSES[variant],
              wide ? 'md:col-span-2' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article key={key} className={cardClass}>
                <span
                  aria-hidden="true"
                  className={`feat-ghost-num font-rubik ${isDark ? 'feat-ghost-num-dark' : ''}`}
                >
                  {ghostNum}
                </span>

                <span
                  className={`self-start inline-flex items-center gap-1.5 font-rubik text-[10px] font-semibold uppercase tracking-[0.12em] rounded-full px-2.5 py-[3px] border backdrop-blur-sm ${
                    isDark
                      ? 'text-white border-white/25 bg-white/5'
                      : 'text-primary border-primary/40 bg-white/60'
                  }`}
                >
                  [ {t(`items.${key}.tag`)} ]
                </span>

                <div
                  aria-hidden="true"
                  className={`relative flex-1 mx-[-8px] mt-4 mb-5 min-h-[180px] overflow-hidden rounded-md ${
                    isDark ? 'feat-grid-bg-dark' : 'feat-grid-bg'
                  }`}
                >
                  <Illustration />
                </div>

                <h3
                  className={`font-rubik font-bold text-[17px] leading-tight tracking-[-0.01em] mb-2 ${
                    isDark ? 'text-[#fafafa]' : 'text-dark-hard'
                  }`}
                >
                  {t(`items.${key}.title`)}
                </h3>
                <p
                  className={`font-rubik text-[13px] leading-[1.65] tracking-[-0.01em] max-w-[52ch] ${
                    isDark ? 'text-[#c7c7c7]' : 'text-dark'
                  }`}
                >
                  {t(`items.${key}.description`)}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
