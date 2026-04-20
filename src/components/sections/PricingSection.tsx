import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'

type CardKey = 'vip' | 'referral' | 'testnet'

type Card = {
  key: CardKey
  href: string
  external?: boolean
  image: string | null
}

const CARDS: Card[] = [
  { key: 'vip', href: '/vip', image: '/images/crown.webp' },
  { key: 'referral', href: '/referral', image: '/images/percents.webp' },
  { key: 'testnet', href: 'https://tron.multisender.app', external: true, image: null },
]

export function PricingSection() {
  const t = useTranslations('pricing')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-white py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="pricing-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-4 text-center"
        >
          {t('title')}
        </h2>
        <p className="font-rubik text-[14px] md:text-[15px] text-grey text-center mb-12 md:mb-16 max-w-lg mx-auto leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => {
            const ctaClassName =
              "inline-flex items-center gap-1.5 font-rubik font-semibold text-[12px] text-primary-medium uppercase tracking-[0.05em] hover:text-primary-light transition-colors after:absolute after:inset-0 after:content-[''] after:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            return (
              <div
                key={card.key}
                className="relative overflow-hidden glass-card rounded-lg p-6 min-h-[320px] flex flex-col group cursor-pointer transition-colors duration-200 hover:bg-grey-light"
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt=""
                    aria-hidden
                    width={220}
                    height={220}
                    className="pointer-events-none select-none absolute -top-4 -right-4 w-[140px] h-[140px] md:w-[160px] md:h-[160px] object-contain opacity-95 transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                <div className="relative z-10 max-w-[70%]">
                  <div className="font-rubik font-semibold text-[11px] text-primary-medium uppercase tracking-[2px] mb-2">
                    {t(`cards.${card.key}.label`)}
                  </div>
                  <h3 className="font-rubik font-bold text-[20px] text-dark-hard tracking-[-0.01em]">
                    {t(`cards.${card.key}.title`)}
                  </h3>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <p className="font-rubik text-[13px] text-grey leading-relaxed mb-5">
                    {t(`cards.${card.key}.description`)}
                  </p>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClassName}
                    >
                      {t(`cards.${card.key}.cta`)}
                      <ArrowRight size={13} className="-rotate-45" aria-hidden />
                    </a>
                  ) : (
                    <Link href={card.href} className={ctaClassName}>
                      {t(`cards.${card.key}.cta`)}
                      <ArrowRight size={13} className="-rotate-45" aria-hidden />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
