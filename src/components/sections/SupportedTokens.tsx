import { useTranslations } from 'next-intl'

type TokenTypeKey = 'native' | 'trc20' | 'trc10'

const TYPE_STYLES: Record<TokenTypeKey, string> = {
  native: 'bg-primary-ghost text-primary',
  trc20: 'bg-[hsla(156,70%,90%,1)] text-[hsla(160,80%,26%,1)]',
  trc10: 'bg-[hsla(42,95%,88%,1)] text-[hsla(35,85%,32%,1)]',
}

const TOKENS = [
  { symbol: 'TRX', key: 'trx', typeKey: 'native' as TokenTypeKey, icon: '/tokens/TRON-Coin.svg' },
  { symbol: 'USDT', key: 'usdt', typeKey: 'trc20' as TokenTypeKey, icon: '/tokens/Tether.svg' },
  { symbol: 'USDC', key: 'usdc', typeKey: 'trc20' as TokenTypeKey, icon: '/tokens/USD-Coin.svg' },
  { symbol: 'WTRX', key: 'wtrx', typeKey: 'trc20' as TokenTypeKey, icon: '/tokens/TRON-Coin.svg' },
  { symbol: 'BTT', key: 'btt', typeKey: 'trc10' as TokenTypeKey, icon: '/tokens/BitTorrent-Coin.svg' },
] as const

export function SupportedTokens() {
  const t = useTranslations('supportedTokens')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="tokens"
      aria-labelledby="tokens-heading"
      className="relative bg-white py-16 md:py-24 px-8 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
          {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="tokens-heading"
          className="font-rubik font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em] mb-4 text-center"
        >
          {t('title')}
        </h2>
        <p className="font-rubik text-[14px] text-dark text-center mb-12 md:mb-16 max-w-lg mx-auto tracking-[-0.01em]">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {TOKENS.map((token) => (
            <div
              key={token.symbol}
              className="relative overflow-hidden glass-card rounded-lg p-5 text-center transition-colors duration-200 hover:bg-grey-light"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={token.icon}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 mx-auto mb-3"
                loading="lazy"
                decoding="async"
              />
              <div className="font-rubik font-extrabold text-[22px] text-dark-hard mb-1">
                {token.symbol}
              </div>
              <div className="font-rubik text-[11px] text-grey">{t(`tokens.${token.key}`)}</div>
              <span
                className={[
                  'absolute top-2.5 right-2.5 z-10',
                  'font-rubik font-semibold text-[9px] uppercase tracking-[1.2px] px-2 py-0.5 rounded-full',
                  TYPE_STYLES[token.typeKey],
                ].join(' ')}
              >
                {t(`types.${token.typeKey}`)}
              </span>
            </div>
          ))}
        </div>

        <p className="font-rubik text-[13px] text-grey text-center">
          {t('footnote')}
        </p>
      </div>
    </section>
  )
}
