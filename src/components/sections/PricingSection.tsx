import Link from 'next/link'
import { Crown, Star, Zap, ArrowRight } from 'lucide-react'

const CARDS = [
  {
    icon: Crown,
    label: 'VIP Access',
    title: 'No Service Fee',
    description:
      'Upgrade to VIP and skip the per-batch service fee entirely. Pay only standard TRON network costs. Plans from 1,000 TRX/day.',
    ctaLabel: 'Get VIP',
    ctaHref: '/vip',
  },
  {
    icon: Star,
    label: 'Referral Program',
    title: 'Earn by Referring',
    description:
      'Invite others to TRON Multisender and earn rewards for every active referral. No limit on earnings.',
    ctaLabel: 'View Referral Program',
    ctaHref: '/referral',
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
      className="relative bg-white py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          TRON Multisender <span className="text-primary font-light">[ </span>Perks<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="pricing-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-4 text-center"
        >
          More Ways To Use TRON Multisender
        </h2>
        <p className="font-rubik text-[14px] md:text-[15px] text-grey text-center mb-12 md:mb-16 max-w-lg mx-auto leading-relaxed">
          VIP plans, referral rewards, and a free testnet — built for every type of user.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className="relative overflow-hidden glass-card rounded-lg p-6 flex flex-col group hover:shadow-md transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="font-rubik font-semibold text-[11px] text-primary-medium uppercase tracking-[2px] mb-2">
                  {card.label}
                </div>
                <h3 className="font-rubik font-bold text-[20px] text-dark-hard mb-3">
                  {card.title}
                </h3>
                <p className="font-rubik text-[13px] text-grey leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.ctaHref}
                  className="inline-flex items-center gap-1.5 font-rubik font-semibold text-[12px] text-primary-medium uppercase tracking-[0.05em] hover:text-primary-light transition-colors"
                >
                  {card.ctaLabel}
                  <ArrowRight size={13} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
