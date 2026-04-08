import { VideoBackground } from './VideoBackground'
import { Navbar } from './Navbar'
import { HeroContent } from './HeroContent'
import { ConsultationCard } from './ConsultationCard'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-screen bg-black">
      <VideoBackground />
      <Navbar />
      <HeroContent />
      <ConsultationCard />
    </section>
  )
}
