import { ClippedButton } from '@/components/ui/ClippedButton'

export function HeroContent() {
  return (
    <div className="absolute top-[108px] left-12 z-10 max-w-[520px] md:top-[90px] md:left-10 sm:top-[80px] sm:left-8">
      {/* Eyebrow */}
      <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-[14px]">
        Logistics &amp; Transport
      </p>

      {/* Headline */}
      <h1
        className={[
          'font-rubik font-extrabold uppercase text-white',
          'text-[64px] md:text-[52px] sm:text-[42px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-7',
          'hero-headline-shadow',
        ].join(' ')}
      >
        Swift and Simple Transport
      </h1>

      {/* CTA */}
      <ClippedButton variant="red" size="lg">Get Started</ClippedButton>
    </div>
  )
}
