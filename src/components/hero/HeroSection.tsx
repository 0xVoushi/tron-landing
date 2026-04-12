import { VideoBackground } from './VideoBackground'
import { Navbar } from './Navbar'
import { HeroContent } from './HeroContent'
import { ConsultationCard } from './ConsultationCard'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden w-full h-screen min-h-[700px] lg:h-[calc(100vh-200px)] bg-black">
      <VideoBackground />
      <Navbar />
      <div className="absolute inset-y-0 w-full max-w-7xl left-1/2 -translate-x-1/2 z-20">
        <HeroContent />
        <ConsultationCard />
      </div>
    </section>
  )
}
