import {
  ArrowRightLeft,
  Coins,
  FileSpreadsheet,
  TrendingDown,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: ArrowRightLeft,
    title: 'Batch TRX Transfer',
    description: 'Send TRX to hundreds of wallets in a single transaction. No limit on recipients.',
  },
  {
    icon: Coins,
    title: 'TRC-20 Token Support',
    description: 'USDT, USDC, WTRX, BTT and any TRC-20 token. Just paste the contract address.',
  },
  {
    icon: FileSpreadsheet,
    title: 'CSV Upload',
    description: 'Import your recipient list and amounts directly from a spreadsheet file.',
  },
  {
    icon: TrendingDown,
    title: 'Save on Fees',
    description: 'Batch transactions use significantly less bandwidth and energy than sending one by one.',
  },
  {
    icon: Shield,
    title: 'Fully On-Chain',
    description: 'No custody, no registration. Your keys, your funds. Everything on-chain.',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: "TRON's 3-second block time means near-instant delivery to all recipients.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-black py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Built for Power Users
        </p>
        <h2
          id="features-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          Why Tron Multisender
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative overflow-hidden glass-card rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <h3 className="font-rubik font-bold text-[15px] text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-rubik text-[13px] text-white/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
