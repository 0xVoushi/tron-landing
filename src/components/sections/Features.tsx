import { useTranslations } from 'next-intl'

type Variant = 'hero' | 'standard' | 'dark'

type FeatureCard = { key: string; variant: Variant; wide?: boolean }

const FEATURE_KEYS: readonly FeatureCard[] = [
  { key: 'batchTrx', variant: 'hero', wide: true },
  { key: 'trc20', variant: 'standard' },
  { key: 'onChain', variant: 'dark' },
  { key: 'csv', variant: 'standard' },
  { key: 'fees', variant: 'standard' },
  { key: 'instant', variant: 'hero', wide: true },
]

const VARIANT_CLASSES: Record<Variant, string> = {
  standard: 'glass-card',
  hero: 'border border-primary/20 bg-gradient-to-br from-white to-[#fff8f6] shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
  dark: 'border border-dark bg-dark-hard text-grey-light',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURE_KEYS.map((feature) => {
            const isDark = feature.variant === 'dark'
            const className = [
              'group flex flex-col rounded-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-md',
              VARIANT_CLASSES[feature.variant],
              feature.wide ? 'md:col-span-2' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article key={feature.key} className={className}>
                <span
                  className={`self-start inline-block font-rubik text-[10px] font-semibold uppercase tracking-[0.06em] rounded-full px-2.5 py-0.5 border ${
                    isDark ? 'text-white border-white/40' : 'text-primary border-primary/40'
                  }`}
                >
                  [ {t(`items.${feature.key}.tag`)} ]
                </span>

                <div
                  className={`mt-5 mb-5 flex-1 min-h-[140px] rounded-lg border border-dashed flex items-center justify-center ${
                    isDark ? 'border-white/20' : 'border-primary/30'
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.04em] ${
                      isDark ? 'text-white/40' : 'text-grey'
                    }`}
                  >
                    {t('visualLabel')}
                  </span>
                </div>

                <h3
                  className={`font-rubik font-bold text-[15px] mb-2 ${
                    isDark ? 'text-grey-light' : 'text-dark-hard'
                  }`}
                >
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p
                  className={`font-rubik text-[13px] leading-relaxed tracking-[-0.01em] ${
                    isDark ? 'text-grey' : 'text-dark'
                  }`}
                >
                  {t(`items.${feature.key}.description`)}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
