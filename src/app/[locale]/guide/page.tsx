import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { GUIDE_SECTION_KEYS, GUIDE_STEP_KEYS } from '@/data/guide'
import { PillButton } from '@/components/ui/PillButton'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { getGuideSchemas } from '@/lib/structured-data'
import type { Locale } from '@/i18n/locales'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale,
    titleKey: 'meta.guide.title',
    descriptionKey: 'meta.guide.description',
    ogDescriptionKey: 'meta.guide.ogDescription',
    ogAltKey: 'meta.guide.ogAlt',
    path: '/guide',
    ogType: 'article',
  })
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('guide')
  const tBrand = await getTranslations('brand')
  const schemas = await getGuideSchemas(locale)

  return (
    <>
      <JsonLd schemas={schemas} />
      <Navbar alwaysOpaque />
      <main className="bg-grey-light min-h-screen pt-24 pb-20 px-8 md:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
            {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
          </p>
          <h1 className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-4 text-center leading-tight">
            {t('title')}
          </h1>
          <p className="font-rubik text-[14px] md:text-[15px] text-dark text-center leading-relaxed mb-14 max-w-xl mx-auto">
            {t('intro')}
          </p>

          <div className="space-y-6">
            {GUIDE_SECTION_KEYS.map((sectionKey) => {
              const stepKeys = GUIDE_STEP_KEYS[sectionKey]
              return (
                <div
                  key={sectionKey}
                  className="relative overflow-hidden glass-card rounded-lg p-6 md:p-8"
                >
                  <h2 className="font-rubik font-bold text-[18px] md:text-[20px] text-dark-hard mb-5">
                    {t(`sections.${sectionKey}.title`)}
                  </h2>
                  <ol className="space-y-3 list-none">
                    {stepKeys.map((stepKey, i) => (
                      <li key={stepKey} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-ghost flex items-center justify-center font-rubik font-bold text-[11px] text-primary-medium mt-0.5">
                          {i + 1}
                        </span>
                        <p className="font-rubik text-[14px] text-dark leading-relaxed">
                          {t(`sections.${sectionKey}.steps.${stepKey}`)}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-block glass-card rounded-lg px-8 py-6 mb-8">
              <p className="font-rubik font-bold text-[20px] text-dark-hard mb-2">
                {t('cta.heading')}
              </p>
              <p className="font-rubik text-[13px] text-grey">
                {t('cta.body')}
              </p>
            </div>
            <div>
              <PillButton variant="primary" size="lg">{t('cta.button')}</PillButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
