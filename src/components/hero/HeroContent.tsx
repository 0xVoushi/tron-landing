import { PillButton } from '@/components/ui/PillButton'

export function HeroContent() {
  return (
    <div className="absolute top-[80px] left-8 z-10 max-w-[540px] md:top-[90px] md:left-10 lg:top-[108px] lg:left-12">
      <p className="font-rubik font-normal text-[15px] md:text-[17px] text-white-80 tracking-[-0.02em] mb-[14px]">
        Multisender <span className="text-primary font-light">[ </span>Batch Transfer<span className="text-primary font-light"> ]</span>
      </p>

      <h1
        className={[
          'font-rubik font-medium text-white',
          'text-[38px] md:text-[48px] lg:text-[58px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-5',
          'hero-headline-shadow',
        ].join(' ')}
      >
        Batch Send TRX &amp; TRC-20 Tokens
      </h1>

      <p className="font-rubik text-[14px] md:text-[15px] text-white-40 leading-relaxed mb-7 max-w-[420px]">
        Send USDT, TRX, or any TRC-20 token to 1,000+ addresses in one transaction — no registration, fully non-custodial.
      </p>

      <PillButton variant="primary" size="lg">Launch dApp</PillButton>

      {/* Floating decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none"
      />
    </div>
  )
}
