import { ClippedButton } from '@/components/ui/ClippedButton'

export function HeroContent() {
  return (
    <div className="absolute top-[80px] left-8 z-10 max-w-[520px] md:top-[90px] md:left-10 lg:top-[108px] lg:left-12">
      {/* Eyebrow */}
      <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-[14px]">
        Logistics &amp; Transport
      </p>

      {/* Headline */}
      <h1
        className={[
          'font-rubik font-extrabold uppercase text-white',
          'text-[42px] md:text-[52px] lg:text-[64px]',
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
