const STATS = [
  { value: '1,000+', label: 'Recipients per Tx', sublabel: 'Per transaction' },
  { value: '3', label: 'Token Types', sublabel: 'TRX / TRC-20 / TRC-10' },
  { value: '~90%', label: 'Fee Savings', sublabel: 'vs manual sending' },
  { value: 'Zero', label: 'Custody', sublabel: 'Fully on-chain' },
] as const

export function StatsBar() {
  return (
    <section
      aria-label="Key statistics"
      className="relative bg-white border-y border-grey-medium py-8 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden glass-card rounded-xl p-5 text-center group hover:shadow-md hover:scale-[1.02] transition-all duration-500"
          >
            <div className="font-rubik font-light text-[34px] md:text-[40px] text-primary leading-none mb-2 tracking-[-0.04em]">
              {stat.value}
            </div>
            <div className="font-rubik font-semibold text-[11px] text-dark-hard uppercase tracking-[2px] mb-1">
              {stat.label}
            </div>
            <div className="font-rubik text-[11px] text-grey">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
