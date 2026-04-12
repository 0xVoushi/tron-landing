import { Crown, Star, Zap, ArrowRight } from 'lucide-react'

const CARDS = [
  {
    icon: Crown,
    label: 'VIP Access',
    title: 'No Service Fee',
    description:
      'Upgrade to VIP and skip the per-batch service fee entirely. Pay only standard TRON network costs. Plans from 1,000 TRX/day.',
    ctaLabel: 'Get VIP',
    ctaHref: 'https://tron.multisender.app/vip',
  },
  {
    icon: Star,
    label: 'Referral Program',
    title: 'Earn by Referring',
    description:
      'Invite others to Tron Multisender and earn rewards for every active referral. No limit on earnings.',
    ctaLabel: 'View Referral Program',
    ctaHref: 'https://tron.multisender.app/referral',
  },
  {
    icon: Zap,
    label: 'Testnet',
    title: 'Try for Free',
    description:
      'Not ready for mainnet? Run the full batch transfer flow on Shasta or Nile Testnet — no real funds needed.',
    ctaLabel: 'Open dApp on Testnet',
    ctaHref: 'https://tron.multisender.app',
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-[#050505] py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Access & Perks
        </p>
        <h2
          id="pricing-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-4 text-center"
        >
          More Ways To Use Multisender
        </h2>
        <p className="font-rubik text-[14px] md:text-[15px] text-white/50 text-center mb-12 md:mb-16 max-w-lg mx-auto leading-relaxed">
          VIP plans, referral rewards, and a free testnet — built for every type of user.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className="glass-card rounded-xl p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <div className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[2px] mb-2">
                  {card.label}
                </div>
                <h3 className="font-rubik font-bold text-[20px] text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-rubik text-[13px] text-white/55 leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <a
                  href={card.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-rubik font-semibold text-[12px] text-brand-red uppercase tracking-[0.05em] hover:opacity-80 transition-opacity"
                >
                  {card.ctaLabel}
                  <ArrowRight size={13} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
