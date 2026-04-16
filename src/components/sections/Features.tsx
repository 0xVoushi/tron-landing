type Variant = 'hero' | 'standard' | 'dark'

type Feature = {
  tag: string
  title: string
  description: string
  variant: Variant
  wide?: boolean
}

const FEATURES: Feature[] = [
  {
    tag: 'Hero',
    variant: 'hero',
    wide: true,
    title: 'Batch TRX Transfer',
    description: 'Send TRX to hundreds of wallets in a single transaction. No limit on recipients.',
  },
  {
    tag: '02',
    variant: 'standard',
    title: 'TRC-20 Token Support',
    description: 'USDT, USDC, WTRX, BTT and any TRC-20 token. Just paste the contract address.',
  },
  {
    tag: '03',
    variant: 'dark',
    title: 'Fully On-Chain',
    description: 'No custody, no registration. Your keys, your funds. Everything on-chain.',
  },
  {
    tag: '04',
    variant: 'standard',
    title: 'CSV Upload',
    description: 'Import your recipient list and amounts directly from a spreadsheet file.',
  },
  {
    tag: '05',
    variant: 'standard',
    title: 'Save on Fees',
    description: 'Batch transactions use significantly less bandwidth and energy than sending one by one.',
  },
  {
    tag: 'Hero',
    variant: 'hero',
    wide: true,
    title: 'Instant Confirmation',
    description: "TRON's 3-second block time means near-instant delivery to all recipients.",
  },
]

const VARIANT_CLASSES: Record<Variant, string> = {
  standard: 'glass-card',
  hero: 'border border-primary/20 bg-gradient-to-br from-white to-[#fff8f6] shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
  dark: 'border border-dark bg-dark-hard text-grey-light',
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-grey-light py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          TRON Multisender <span className="text-primary font-light">[ </span>Features<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="features-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-12 md:mb-16 text-center"
        >
          Why TRON Multisender
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((feature) => {
            const isDark = feature.variant === 'dark'
            const className = [
              'group flex flex-col rounded-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-md',
              VARIANT_CLASSES[feature.variant],
              feature.wide ? 'md:col-span-2' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article key={feature.title} className={className}>
                <span
                  className={`self-start inline-block font-rubik text-[10px] font-semibold uppercase tracking-[0.06em] rounded-full px-2.5 py-0.5 border ${
                    isDark ? 'text-white border-white/40' : 'text-primary border-primary/40'
                  }`}
                >
                  [ {feature.tag} ]
                </span>

                <div
                  className={`mt-5 mb-5 flex-1 min-h-[140px] rounded-lg border border-dashed flex items-center justify-center ${
                    isDark ? 'border-white/20' : 'border-primary/30'
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.04em] ${
                      isDark ? 'text-white/40' : 'text-grey'
                    }`}
                  >
                    [ visual ]
                  </span>
                </div>

                <h3
                  className={`font-rubik font-bold text-[15px] mb-2 ${
                    isDark ? 'text-grey-light' : 'text-dark-hard'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`font-rubik text-[13px] leading-relaxed tracking-[-0.01em] ${
                    isDark ? 'text-grey' : 'text-dark'
                  }`}
                >
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
