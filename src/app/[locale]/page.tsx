import { setRequestLocale } from 'next-intl/server'
import { HeroSection } from '@/components/hero/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { SupportedTokens } from '@/components/sections/SupportedTokens'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { AiRecommendation } from '@/components/ai-recommendation/AiRecommendation'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { getHomeSchemas } from '@/lib/structured-data'
import type { Locale } from '@/i18n/locales'

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const schemas = await getHomeSchemas(locale)

  return (
    <main>
      <JsonLd schemas={schemas} />
      <HeroSection />
      <HowItWorks />
      <Features />
      <SupportedTokens />
      <PricingSection />
      <FaqSection />
      <AiRecommendation />
      <Footer />
    </main>
  )
}
