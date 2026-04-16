import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Star, Building2, Crown, Check, ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VIP Access — TRON Multisender',
  description: 'Upgrade to VIP and skip the per-batch service fee. Pay only TRON network costs. Plans from 1,000 TRX/day.',
}

const PLANS = [
  {
    name: 'Starter',
    price: '1,000 TRX',
    period: 'per day',
    icon: Zap,
  },
  {
    name: 'Professional',
    price: '5,000 TRX',
    period: 'per 7 days',
    icon: Star,
  },
  {
    name: 'Business',
    price: '10,000 TRX',
    period: 'per 30 days',
    icon: Building2,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Tailored to your needs',
    icon: Crown,
  },
]

const BENEFITS = [
  'Service fee waived on all transactions',
  'Pay only standard TRON network fees',
  'Unlimited batches during your plan period',
  'Multiple referral codes supported',
  'Priority support via Telegram',
]

export default function VipPage() {
  return (
    <>
      <Navbar alwaysOpaque />
      <main className="bg-grey-light min-h-screen">
        {/* Page header */}
        <section className="relative bg-grey-light pt-32 md:pt-40 pb-16 md:pb-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-rubik text-[12px] text-grey hover:text-dark-hard transition-colors mb-8 uppercase tracking-[0.05em]"
            >
              <ArrowLeft size={13} />
              Back to Home
            </Link>
            <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
              TRON Multisender <span className="text-primary font-light">[ </span>VIP<span className="text-primary font-light"> ]</span>
            </p>
            <h1 className="font-rubik font-light text-[38px] md:text-[52px] text-dark-hard tracking-[-0.04em] leading-[1.0] mb-5">
              No Service Fee.<br />Pay Only Network Costs.
            </h1>
            <p className="font-rubik text-[15px] text-dark leading-relaxed max-w-lg">
              Upgrade to VIP and get unlimited batch transfers with zero service fee. Keep paying only standard TRON network costs.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="relative bg-white py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {PLANS.map((plan) => {
                const Icon = plan.icon
                return (
                  <div key={plan.name} className="relative overflow-hidden glass-card rounded-lg p-6 flex flex-col group hover:border-primary/20 hover:scale-[1.02] transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="font-rubik font-bold text-[15px] text-dark-hard mb-1">{plan.name}</div>
                    <div className="font-rubik font-extrabold text-[26px] text-dark-hard leading-none mb-1">{plan.price}</div>
                    <div className="font-rubik text-[12px] text-grey mb-6">{plan.period}</div>
                    <a
                      href="https://tron.multisender.app/vip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
                    >
                      {plan.name === 'Enterprise' ? 'Contact Us' : 'Get VIP'}
                    </a>
                  </div>
                )
              })}
            </div>
            <p className="font-rubik text-[12px] text-grey text-center">
              * You will still need to pay TRON network energy and bandwidth fees.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative bg-grey-light py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
                TRON Multisender <span className="text-primary font-light">[ </span>Benefits<span className="text-primary font-light"> ]</span>
              </p>
              <h2 className="font-rubik font-light text-[30px] md:text-[38px] text-dark-hard tracking-[-0.04em] mb-8">
                VIP Benefits
              </h2>
              <ul className="space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-ghost flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="font-rubik text-[14px] text-dark leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden glass-card rounded-lg p-8">
              <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
                TRON Multisender <span className="text-primary font-light">[ </span>For You<span className="text-primary font-light"> ]</span>
              </p>
              <h3 className="font-rubik font-bold text-[20px] text-dark-hard mb-4">
                Best for high-volume senders
              </h3>
              <p className="font-rubik text-[13px] text-dark leading-relaxed mb-6">
                If you regularly send to hundreds of addresses — for payroll, airdrops, DAO distributions, or token sales — VIP pays for itself after just a few transactions.
              </p>
              <a
                href="https://tron.multisender.app/vip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-6 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
              >
                Upgrade to VIP
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
