import { HeroSection } from '@/components/hero/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { SupportedTokens } from '@/components/sections/SupportedTokens'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { AiRecommendation } from '@/components/ai-recommendation/AiRecommendation'
import { Footer } from '@/components/layout/Footer'


export default function Home() {
  return (
    <main>
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
