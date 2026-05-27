import { useTranslations } from 'next-intl'

const STAT_KEYS = ['recipients', 'tokenTypes', 'feeSavings', 'custody'] as const

export function StatsBar() {
  const t = useTranslations('stats')

  return (
    <section
      aria-label={t('ariaLabel')}
      className="relative bg-white border-y border-grey-medium py-8 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STAT_KEYS.map((statKey) => (
          <div
            key={statKey}
            className="relative overflow-hidden glass-card rounded-lg p-5 text-center group hover:shadow-md hover:scale-[1.02] transition-all duration-500"
          >
            <div className="font-rubik font-light text-[34px] md:text-[40px] text-primary leading-none mb-2 tracking-[-0.04em]">
              {t(`${statKey}.value`)}
            </div>
            <div className="font-rubik font-semibold text-[11px] text-dark-hard uppercase tracking-[2px] mb-1">
              {t(`${statKey}.label`)}
            </div>
            <div className="font-rubik text-[11px] text-grey">
              {t(`${statKey}.sublabel`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
