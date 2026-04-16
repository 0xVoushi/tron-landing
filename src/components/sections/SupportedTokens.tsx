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
      className="relative bg-white py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          TRON Multisender <span className="text-primary font-light">[ </span>Tokens<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="tokens-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-4 text-center"
        >
          Supported Tokens
        </h2>
        <p className="font-rubik text-[14px] text-dark text-center mb-12 md:mb-16 max-w-lg mx-auto tracking-[-0.01em]">
          Send any TRC-20 token or native TRX to multiple recipients simultaneously.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {TOKENS.map((token) => (
            <div
              key={token.symbol}
              className="relative overflow-hidden glass-card rounded-lg p-5 text-center hover:scale-105 hover:shadow-md transition-all duration-500"
            >
              <div className="font-rubik font-extrabold text-[22px] text-dark-hard mb-1">
                {token.symbol}
              </div>
              <div className="font-rubik text-[11px] text-grey mb-3">{token.name}</div>
              <span
                className={[
                  'font-rubik font-semibold text-[10px] uppercase tracking-[1.5px] px-2 py-0.5 rounded-full',
                  token.type === 'Native'
                    ? 'bg-primary-ghost text-primary'
                    : 'bg-black-4 text-grey',
                ].join(' ')}
              >
                {token.type}
              </span>
            </div>
          ))}
        </div>

        <p className="font-rubik text-[13px] text-grey text-center">
          Any TRC-20 contract address is supported. Paste the contract address to get started.
        </p>
      </div>
    </section>
  )
}
