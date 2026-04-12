type Token = {
  symbol: string
  name: string
  type: 'Native' | 'TRC-20' | 'TRC-10'
}

const TOKENS: Token[] = [
  { symbol: 'TRX', name: 'TRON', type: 'Native' },
  { symbol: 'USDT', name: 'Tether USD', type: 'TRC-20' },
  { symbol: 'USDC', name: 'USD Coin', type: 'TRC-20' },
  { symbol: 'WTRX', name: 'Wrapped TRX', type: 'TRC-20' },
  { symbol: 'BTT', name: 'BitTorrent', type: 'TRC-10' },
]

export function SupportedTokens() {
  return (
    <section
      id="tokens"
      aria-labelledby="tokens-heading"
      className="bg-[#050505] py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Multi-Token Support
        </p>
        <h2
          id="tokens-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-4 text-center"
        >
          Supported Tokens
        </h2>
        <p className="font-rubik text-[14px] text-white/50 text-center mb-12 md:mb-16 max-w-lg mx-auto">
          Send any TRC-20 token or native TRX to multiple recipients simultaneously.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {TOKENS.map((token) => (
            <div
              key={token.symbol}
              className="relative overflow-hidden glass-card rounded-xl p-5 text-center"
            >
              <div className="font-rubik font-extrabold text-[22px] text-white mb-1">
                {token.symbol}
              </div>
              <div className="font-rubik text-[11px] text-white/45 mb-3">{token.name}</div>
              <span
                className={[
                  'font-rubik font-semibold text-[10px] uppercase tracking-[1.5px] px-2 py-0.5 rounded-full',
                  token.type === 'Native'
                    ? 'bg-brand-red/20 text-brand-red'
                    : 'bg-white/[0.07] text-white/50',
                ].join(' ')}
              >
                {token.type}
              </span>
            </div>
          ))}
        </div>

        <p className="font-rubik text-[13px] text-white/50 text-center">
          Any TRC-20 contract address is supported. Paste the contract address to get started.
        </p>
      </div>
    </section>
  )
}
