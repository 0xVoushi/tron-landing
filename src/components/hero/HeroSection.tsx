import { Navbar } from './Navbar'
import { HeroContent } from './HeroContent'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden w-full h-dvh bg-dark-hard">
      <div className="absolute inset-0 z-0">
        <HeroVisual />
      </div>
      <Navbar />
      <div className="absolute inset-y-0 w-full max-w-7xl left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <HeroContent />
      </div>
    </section>
  )
}
