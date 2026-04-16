import { HeroSection } from '@/components/hero/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { SupportedTokens } from '@/components/sections/SupportedTokens'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { Footer } from '@/components/layout/Footer'

function SectionDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-grey-medium to-transparent" />
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Dark-to-light gradient transition */}
      <div className="h-24 bg-gradient-to-b from-dark-hard to-grey-light" />
      <SectionDivider />
      <StatsBar />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <SupportedTokens />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <FaqSection />
      <Footer />
    </main>
  )
}
