import { PillButton } from '@/components/ui/PillButton'

const STATS = [
  { value: '1,000+', label: 'Recipients per Tx', sub: 'Per transaction' },
  { value: '3', label: 'Token Types', sub: 'TRX / TRC-20 / TRC-10' },
  { value: '~90%', label: 'Fee Savings', sub: 'vs manual sending' },
  { value: 'Zero', label: 'Custody', sub: 'Fully on-chain' },
]

export function HeroContent() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
      <p className="font-rubik font-normal text-[15px] md:text-[17px] text-white tracking-[-0.02em] mb-[14px] bg-dark-hard px-4 py-1.5 rounded-full">
        TRON Multisender <span className="text-primary font-light">[ </span>Batch Transfer<span className="text-primary font-light"> ]</span>
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

      <p className="font-rubik text-[14px] md:text-[15px] text-white leading-relaxed mb-7 max-w-[480px] bg-dark-hard px-5 py-2.5 rounded-lg">
        Send USDT, TRX, or any TRC-20 token to 1,000+ addresses in one transaction — no registration, fully non-custodial.
      </p>

      <PillButton variant="primary" size="lg">Launch dApp</PillButton>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12 w-full max-w-3xl">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-lg p-4 text-center">
            <p className="font-rubik font-bold text-[24px] md:text-[28px] text-white leading-none mb-1">{stat.value}</p>
            <p className="font-rubik font-semibold text-[12px] text-white mb-0.5 bg-dark-hard inline-block px-2 py-0.5 rounded-lg">{stat.label}</p>
            <p className="font-rubik text-[11px] text-white bg-dark-hard inline-block px-2 py-0.5 rounded-lg">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
