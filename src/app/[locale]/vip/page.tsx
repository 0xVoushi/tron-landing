import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Zap, Star, Building2, Crown, Check, ArrowLeft, type LucideIcon } from 'lucide-react'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { Link } from '@/i18n/routing'
import { buildMetadata } from '@/lib/metadata'
import { getVipSchemas } from '@/lib/structured-data'
import type { Locale } from '@/i18n/locales'

const PLAN_KEYS = ['starter', 'professional', 'business', 'enterprise'] as const
type PlanKey = (typeof PLAN_KEYS)[number]

const PLAN_ICONS: Record<PlanKey, LucideIcon> = {
  starter: Zap,
  professional: Star,
  business: Building2,
  enterprise: Crown,
}

const BENEFIT_KEYS = ['feeWaived', 'networkOnly', 'unlimited', 'multipleCodes', 'support'] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale,
    titleKey: 'meta.vip.title',
    descriptionKey: 'meta.vip.description',
    ogAltKey: 'meta.vip.ogAlt',
    path: '/vip',
  })
}

export default async function VipPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('vip')
  const tBrand = await getTranslations('brand')
  const schemas = await getVipSchemas(locale)

  return (
    <>
      <JsonLd schemas={schemas} />
      <Navbar alwaysOpaque />
      <main className="bg-grey-light min-h-screen">
        <section className="relative bg-grey-light pt-32 md:pt-40 pb-16 md:pb-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              prefetch={false}
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

        <section className="relative bg-white py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {PLAN_KEYS.map((planKey) => {
                const Icon = PLAN_ICONS[planKey]
                return (
                  <div key={planKey} className="relative overflow-hidden glass-card rounded-lg p-6 flex flex-col group hover:border-primary/20 hover:scale-[1.02] transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="font-rubik font-bold text-[15px] text-dark-hard mb-1">{t(`plans.${planKey}.name`)}</div>
                    <div className="font-rubik font-extrabold text-[26px] text-dark-hard leading-none mb-1">{t(`plans.${planKey}.price`)}</div>
                    <div className="font-rubik text-[12px] text-grey mb-6">{t(`plans.${planKey}.period`)}</div>
                    <a
                      href="https://tron.multisender.app/vip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
                    >
                      {t(`plans.${planKey}.cta`)}
                    </a>
                  </div>
                )
              })}
            </div>
            <p className="font-rubik text-[12px] text-grey text-center">
              {t('plansFootnote')}
            </p>
          </div>
        </section>

        <section className="relative bg-grey-light py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
                {tBrand('name')} <span className="text-primary font-light">[ </span>{t('benefits.eyebrow')}<span className="text-primary font-light"> ]</span>
              </p>
              <h2 className="font-rubik font-light text-[30px] md:text-[38px] text-dark-hard tracking-[-0.04em] mb-8">
                {t('benefits.title')}
              </h2>
              <ul className="space-y-4">
                {BENEFIT_KEYS.map((benefitKey) => (
                  <li key={benefitKey} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-ghost flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="font-rubik text-[14px] text-dark leading-relaxed">{t(`benefits.items.${benefitKey}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden glass-card rounded-lg p-8">
              <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
                {tBrand('name')} <span className="text-primary font-light">[ </span>{t('forYou.eyebrow')}<span className="text-primary font-light"> ]</span>
              </p>
              <h3 className="font-rubik font-bold text-[20px] text-dark-hard mb-4">
                {t('forYou.title')}
              </h3>
              <p className="font-rubik text-[13px] text-dark leading-relaxed mb-6">
                {t('forYou.description')}
              </p>
              <a
                href="https://tron.multisender.app/vip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-6 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
              >
                {t('forYou.cta')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
