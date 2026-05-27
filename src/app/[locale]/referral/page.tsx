import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Share2, Wallet, Zap, ArrowLeft, Gift, type LucideIcon } from 'lucide-react'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { Link } from '@/i18n/routing'
import { buildMetadata } from '@/lib/metadata'
import { getReferralSchemas } from '@/lib/structured-data'
import type { Locale } from '@/i18n/locales'

const STAT_KEYS = ['youEarn', 'referralGets', 'codes'] as const
type StatKey = (typeof STAT_KEYS)[number]

const STEP_KEYS = ['connect', 'create', 'earn'] as const
type StepKey = (typeof STEP_KEYS)[number]

const STEP_ICONS: Record<StepKey, LucideIcon> = {
  connect: Wallet,
  create: Share2,
  earn: Zap,
}

const STEP_NUMBERS: Record<StepKey, string> = {
  connect: '01',
  create: '02',
  earn: '03',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale,
    titleKey: 'meta.referral.title',
    descriptionKey: 'meta.referral.description',
    ogAltKey: 'meta.referral.ogAlt',
    path: '/referral',
  })
}

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('referral')
  const tBrand = await getTranslations('brand')
  const schemas = await getReferralSchemas(locale)

  return (
    <>
      <JsonLd schemas={schemas} />
      <Navbar alwaysOpaque />
      <main className="bg-grey-light min-h-screen">
        <section className="relative bg-grey-light pt-32 md:pt-40 pb-16 md:pb-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-rubik text-[12px] text-grey hover:text-dark-hard transition-colors mb-8 uppercase tracking-[0.05em]"
            >
              <ArrowLeft size={13} />
              {t('backToHome')}
            </Link>
            <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
              {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
            </p>
            <h1 className="font-rubik font-light text-[38px] md:text-[52px] text-dark-hard tracking-[-0.04em] leading-[1.0] mb-5 whitespace-pre-line">
              {t('headline')}
            </h1>
            <p className="font-rubik text-[15px] text-dark leading-relaxed max-w-lg">
              {t('intro')}
            </p>
          </div>
        </section>

        <section className="relative bg-white py-12 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {STAT_KEYS.map((statKey: StatKey) => {
              const hasValue = statKey !== 'codes'
              return (
                <div key={statKey} className="relative overflow-hidden glass-card rounded-lg p-6 text-center">
                  <div className="h-[52px] flex items-center justify-center mb-2">
                    {hasValue ? (
                      <span className="font-rubik font-extrabold text-[42px] text-primary leading-none">{t(`stats.${statKey}.value`)}</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 32 32" aria-hidden="true" className="text-primary">
                        <path fill="currentColor" d="M23 23c-5.656 0-7.858-6.41-7.949-6.684C15.034 16.265 13.208 11 9 11c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.588 0 3.013-.732 4.237-2.176l1.526 1.293C13.164 22.003 11.172 23 9 23c-3.86 0-7-3.14-7-7s3.14-7 7-7c5.656 0 7.858 6.41 7.949 6.684C16.966 15.735 18.792 21 23 21c2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.588 0-3.013.732-4.237 2.176l-1.526-1.293C18.836 9.997 20.828 9 23 9c3.86 0 7 3.14 7 7s-3.14 7-7 7"/>
                      </svg>
                    )}
                  </div>
                  <div className="font-rubik font-semibold text-[13px] text-dark-hard mb-1">{t(`stats.${statKey}.label`)}</div>
                  <div className="font-rubik text-[12px] text-grey">{t(`stats.${statKey}.sub`)}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative bg-grey-light py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
              {tBrand('name')} <span className="text-primary font-light">[ </span>{t('howItWorks.eyebrow')}<span className="text-primary font-light"> ]</span>
            </p>
            <h2 className="font-rubik font-light text-[30px] md:text-[38px] text-dark-hard tracking-[-0.04em] mb-12 text-center">
              {t('howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {STEP_KEYS.map((stepKey) => {
                const Icon = STEP_ICONS[stepKey]
                const number = STEP_NUMBERS[stepKey]
                return (
                  <div key={stepKey} className="relative overflow-hidden glass-card rounded-lg p-6 group hover:border-primary/30 hover:scale-[1.02] transition-all duration-500">
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
                      <h3 className="font-rubik font-bold text-[16px] text-dark-hard mb-2">{t(`howItWorks.steps.${stepKey}.title`)}</h3>
                      <p className="font-rubik text-[13px] text-grey leading-relaxed">{t(`howItWorks.steps.${stepKey}.description`)}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative overflow-hidden glass-card rounded-lg p-8 md:p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-ghost flex items-center justify-center mb-4 mx-auto">
                <Gift size={22} className="text-primary" />
              </div>
              <h3 className="font-rubik font-bold text-[22px] text-dark-hard mb-3">{t('cta.title')}</h3>
              <p className="font-rubik text-[13px] text-dark leading-relaxed mb-6 max-w-md mx-auto">
                {t('cta.description')}
              </p>
              <a
                href="https://tron.multisender.app/referral"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-8 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
              >
                {t('cta.button')}
              </a>
              <p className="font-rubik text-[11px] text-grey mt-4">
                {t('cta.footnote')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
