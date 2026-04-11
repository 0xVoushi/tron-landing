import { ClippedButton } from '@/components/ui/ClippedButton'

export function HeroContent() {
  return (
    <div className="absolute top-[80px] left-8 z-10 max-w-[540px] md:top-[90px] md:left-10 lg:top-[108px] lg:left-12">
      <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-[14px]">
        Tron Blockchain Tool
      </p>

      <h1
        className={[
          'font-rubik font-extrabold uppercase text-white',
          'text-[38px] md:text-[48px] lg:text-[58px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-5',
          'hero-headline-shadow',
        ].join(' ')}
      >
        Batch Send TRX &amp; TRC-20 Tokens
      </h1>

      <p className="font-rubik text-[14px] md:text-[15px] text-white/65 leading-relaxed mb-7 max-w-[420px]">
        Send to 1,000+ addresses in a single on-chain transaction. Save time and fees.
      </p>

      <ClippedButton variant="red" size="lg">Launch App</ClippedButton>
    </div>
  )
}
