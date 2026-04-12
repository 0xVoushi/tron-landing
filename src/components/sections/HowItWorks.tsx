import { Wallet, Upload, SlidersHorizontal, Zap, type LucideIcon } from 'lucide-react'

type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect TronLink or any compatible TRON wallet in one click. No account needed.',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Add Recipients',
    description: 'Paste addresses manually or upload a CSV file with addresses and amounts.',
  },
  {
    number: '03',
    icon: SlidersHorizontal,
    title: 'Set Amounts',
    description: 'Assign the same amount to all recipients or set custom amounts per address.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Send',
    description: 'One transaction. One confirmation. All recipients receive funds instantly.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#050505] py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Simple Process
        </p>
        <h2
          id="how-it-works-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative overflow-hidden glass-card rounded-xl p-6"
              >
                <span className="absolute -top-3 -right-1 font-rubik font-extrabold text-[72px] text-white/[0.04] leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <div className="font-rubik font-bold text-[11px] text-brand-red uppercase tracking-[2px] mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-rubik font-bold text-[16px] text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-rubik text-[13px] text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
