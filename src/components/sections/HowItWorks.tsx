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
    description: 'Review and confirm. All recipients receive funds within 3\u20135 minutes via TRON\u2019s fast block time.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative bg-grey-light py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          Multisender <span className="text-primary font-light">[ </span>Process<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="how-it-works-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-12 md:mb-16 text-center"
        >
          How It Works
        </h2>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-grey-medium to-primary/30" />

          {/* Vertical left line (mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-grey-medium to-primary/30" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isLeft = i % 2 === 0

            return (
              <div key={step.number} className="relative flex items-start mb-12 last:mb-0">
                {/* Dot — mobile (left) */}
                <div className="md:hidden absolute left-5 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-grey-light z-10" />

                {/* Dot — desktop (center) */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-grey-light z-10" />

                {/* Mobile: single column with left offset */}
                <div className="md:hidden pl-10 w-full">
                  <TimelineCard step={step} Icon={Icon} />
                </div>

                {/* Desktop: alternating left/right */}
                <div
                  className={[
                    'hidden md:block w-[calc(50%-2rem)]',
                    isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8',
                  ].join(' ')}
                >
                  <TimelineCard step={step} Icon={Icon} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ step, Icon }: { step: Step; Icon: LucideIcon }) {
  return (
    <div className="relative overflow-hidden glass-card rounded-xl p-6 group hover:shadow-md hover:-translate-y-1 transition-all duration-500">
      <span className="absolute -top-3 -right-1 font-rubik font-extrabold text-[72px] text-black-4 leading-none select-none pointer-events-none">
        {step.number}
      </span>
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
          <Icon size={20} className="text-primary" />
        </div>
        <div className="font-rubik font-bold text-[11px] text-primary-medium uppercase tracking-[2px] mb-2">
          {step.number}
        </div>
        <h3 className="font-rubik font-bold text-[16px] text-dark-hard mb-2">
          {step.title}
        </h3>
        <p className="font-rubik text-[13px] text-dark leading-relaxed tracking-[-0.01em]">
          {step.description}
        </p>
      </div>
    </div>
  )
}
