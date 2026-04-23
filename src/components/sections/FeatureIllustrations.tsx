const CSS = {
  floatY: 'feat-float-y 5s ease-in-out infinite',
  dashFlow: 'feat-dash-flow 3s linear infinite',
  dashFlowSlow: 'feat-dash-flow 8s linear infinite',
  riseRow: 'feat-rise-row 4s ease-in-out infinite',
  spinSlow: 'feat-spin-slow 80s linear infinite',
  beat: 'feat-beat 4s ease-in-out infinite',
}

export function BatchTrxIllustration() {
  return (
    <svg viewBox="0 0 520 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <radialGradient id="trxGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c43631" stopOpacity="0.22" />
          <stop offset="70%" stopColor="#c43631" stopOpacity="0" />
        </radialGradient>
        <clipPath id="hero01Clip">
          <rect width="520" height="260" />
        </clipPath>
      </defs>

      <g clipPath="url(#hero01Clip)">
        <text
          x="-14"
          y="290"
          fontFamily="Rubik"
          fontSize="280"
          fontWeight="300"
          letterSpacing="-0.06em"
          fill="#c43631"
          fillOpacity="0.06"
        >
          1,000
        </text>

        <g fill="none" stroke="#c43631" strokeOpacity="0.18">
          <circle cx="130" cy="130" r="58" strokeWidth="1" />
          <circle cx="130" cy="130" r="92" strokeWidth="1" strokeDasharray="2 5" />
          <circle cx="130" cy="130" r="126" strokeWidth="1" />
          <circle cx="130" cy="130" r="160" strokeWidth="1" strokeDasharray="2 5" />
        </g>
        <circle cx="130" cy="130" r="130" fill="url(#trxGlow)" />

        <g transform="translate(130 130)">
          <circle r="44" fill="#ffffff" stroke="#c43631" strokeOpacity="0.35" strokeWidth="1" />
          <g transform="translate(-32 -32) scale(0.653)">
            <path
              d="M96.5435 60.8261C90.005 87.0601 63.4344 103.08 37.1522 96.5371C10.9182 89.9786 -5.07549 63.4078 1.46299 37.1739C8.00148 10.9399 34.5561 -5.07951 60.7741 1.46295C87.0723 7.92523 103.066 34.5761 96.5435 60.8261Z"
              fill="#c43631"
            />
            <path
              d="M78.2032 42.3428C75.3321 39.6918 71.3605 35.6436 68.1258 32.7726L67.9344 32.6386C67.6159 32.3829 67.2569 32.1823 66.8721 32.0452C59.0724 30.5906 22.7728 23.8053 22.0646 23.8914C21.8662 23.9192 21.6765 23.9912 21.5096 24.102L21.3277 24.2455C21.1038 24.4729 20.9338 24.7476 20.8301 25.0494L20.7822 25.1738V25.8533V25.9586C24.8687 37.3375 41.004 74.6134 44.1813 83.3606C44.3727 83.9539 44.7363 85.0832 45.4158 85.1406H45.5689C45.9326 85.1406 47.483 83.0926 47.483 83.0926C47.483 83.0926 75.1981 49.4821 78.0022 45.9029C78.3652 45.462 78.6856 44.9877 78.9592 44.4865C79.0291 44.0943 78.9961 43.6907 78.8636 43.315C78.7311 42.9393 78.5036 42.6044 78.2032 42.3428ZM54.5936 46.257L66.4223 36.4475L73.3607 42.8404L54.5936 46.257ZM49.9999 45.6158L29.6346 28.9254L62.5847 35.0024L49.9999 45.6158ZM51.8374 49.9893L72.6812 46.6302L48.8515 75.3408L51.8374 49.9893ZM26.8688 30.5906L48.2964 48.7739L45.1957 75.3599L26.8688 30.5906Z"
              fill="#ffffff"
            />
          </g>
        </g>

        <g transform="translate(264 130)">
          <circle r="4" fill="#c43631" />
          <circle r="10" fill="none" stroke="#c43631" strokeOpacity="0.35" strokeWidth="1" />
        </g>
        <line
          x1="176"
          y1="130"
          x2="260"
          y2="130"
          stroke="#c43631"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          style={{ animation: CSS.dashFlow }}
        />

        <g
          fill="none"
          stroke="#c43631"
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 4"
        >
          <path
            d="M 268 130 C 310 130, 326 72,  368 72"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 0s' }}
          />
          <path
            d="M 268 130 C 310 130, 326 102, 368 102"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 0.2s' }}
          />
          <path
            d="M 268 130 C 310 130, 326 130, 368 130"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 0.4s' }}
          />
          <path
            d="M 268 130 C 310 130, 326 158, 368 158"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 0.6s' }}
          />
          <path
            d="M 268 130 C 310 130, 326 188, 368 188"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 0.8s' }}
          />
          <path
            d="M 268 130 C 310 130, 326 218, 368 218"
            style={{ animation: 'feat-dash-flow 2.4s linear infinite 1s' }}
          />
        </g>

        <g fontFamily="ui-monospace,Menlo,Consolas,monospace" fontSize="10" fill="#161616">
          <g transform="translate(368 72)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#ffffff" stroke="#161616" strokeOpacity="0.12" />
            <text x="14" y="4">TX7f · · · a19c</text>
            <text x="118" y="4" textAnchor="end" fill="#c43631" fontWeight="700">42.0</text>
          </g>
          <g transform="translate(368 102)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#ffffff" stroke="#161616" strokeOpacity="0.12" />
            <text x="14" y="4">TN2b · · · 84e0</text>
            <text x="118" y="4" textAnchor="end" fill="#c43631" fontWeight="700">12.5</text>
          </g>
          <g transform="translate(368 130)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#ffffff" stroke="#c43631" strokeOpacity="0.8" />
            <text x="14" y="4">TS9k · · · c712</text>
            <text x="118" y="4" textAnchor="end" fill="#c43631" fontWeight="700">88.0</text>
          </g>
          <g transform="translate(368 158)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#ffffff" stroke="#161616" strokeOpacity="0.12" />
            <text x="14" y="4">TQ4r · · · 60ab</text>
            <text x="118" y="4" textAnchor="end" fill="#c43631" fontWeight="700">5.25</text>
          </g>
          <g transform="translate(368 188)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#ffffff" stroke="#161616" strokeOpacity="0.12" />
            <text x="14" y="4">TV8m · · · 11df</text>
            <text x="118" y="4" textAnchor="end" fill="#c43631" fontWeight="700">100</text>
          </g>
          <g transform="translate(368 218)">
            <rect x="0" y="-12" width="132" height="24" rx="12" fill="#fff6f4" stroke="#c43631" strokeOpacity="0.4" strokeDasharray="3 3" />
            <text x="66" y="4" textAnchor="middle" fill="#c43631" fontFamily="Rubik" fontSize="10" fontWeight="600" letterSpacing="1">
              + 994 MORE
            </text>
          </g>
        </g>

        <g transform="translate(32 36)" fontFamily="Rubik" fontWeight="600" letterSpacing="2">
          <text fontSize="10" fill="#aaaaaa">[ SOURCE ]</text>
          <text y="16" fontSize="12" fill="#161616">SINGLE TX</text>
        </g>
        <g transform="translate(500 36)" textAnchor="end" fontFamily="Rubik" fontWeight="600" letterSpacing="2">
          <text fontSize="10" fill="#aaaaaa">[ DEST ]</text>
          <text y="16" fontSize="12" fill="#c43631">1,000+ WALLETS</text>
        </g>

        <g transform="translate(368 244)" stroke="#161616" strokeOpacity="0.2">
          <line x1="0" y1="0" x2="0" y2="4" />
          <line x1="26" y1="0" x2="26" y2="4" />
          <line x1="52" y1="0" x2="52" y2="4" />
          <line x1="78" y1="0" x2="78" y2="4" />
          <line x1="104" y1="0" x2="104" y2="4" />
          <line x1="132" y1="0" x2="132" y2="4" />
        </g>
      </g>
    </svg>
  )
}

export function Trc20Illustration() {
  return (
    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <radialGradient id="trc20Glow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#c43631" stopOpacity="0.14" />
          <stop offset="80%" stopColor="#c43631" stopOpacity="0" />
        </radialGradient>

        <symbol id="coinTRX" viewBox="0 0 98 98">
          <path
            d="M96.5435 60.8261C90.005 87.0601 63.4344 103.08 37.1522 96.5371C10.9182 89.9786 -5.07549 63.4078 1.46299 37.1739C8.00148 10.9399 34.5561 -5.07951 60.7741 1.46295C87.0723 7.92523 103.066 34.5761 96.5435 60.8261Z"
            fill="#FF060A"
          />
          <path
            d="M78.2032 42.3428C75.3321 39.6918 71.3605 35.6436 68.1258 32.7726L67.9344 32.6386C67.6159 32.3829 67.2569 32.1823 66.8721 32.0452C59.0724 30.5906 22.7728 23.8053 22.0646 23.8914C21.8662 23.9192 21.6765 23.9912 21.5096 24.102L21.3277 24.2455C21.1038 24.4729 20.9338 24.7476 20.8301 25.0494L20.7822 25.1738V25.8533V25.9586C24.8687 37.3375 41.004 74.6134 44.1813 83.3606C44.3727 83.9539 44.7363 85.0832 45.4158 85.1406H45.5689C45.9326 85.1406 47.483 83.0926 47.483 83.0926C47.483 83.0926 75.1981 49.4821 78.0022 45.9029C78.3652 45.462 78.6856 44.9877 78.9592 44.4865C79.0291 44.0943 78.9961 43.6907 78.8636 43.315C78.7311 42.9393 78.5036 42.6044 78.2032 42.3428ZM54.5936 46.257L66.4223 36.4475L73.3607 42.8404L54.5936 46.257ZM49.9999 45.6158L29.6346 28.9254L62.5847 35.0024L49.9999 45.6158ZM51.8374 49.9893L72.6812 46.6302L48.8515 75.3408L51.8374 49.9893ZM26.8688 30.5906L48.2964 48.7739L45.1957 75.3599L26.8688 30.5906Z"
            fill="#ffffff"
          />
        </symbol>

        <symbol id="coinUSDT" viewBox="0 0 98 98">
          <path
            d="M96.5435 60.8261C90.005 87.0601 63.4344 103.08 37.1522 96.5371C10.9182 89.9786 -5.07549 63.4078 1.46299 37.1739C8.00148 10.9399 34.5561 -5.07951 60.7741 1.46295C87.0723 7.92523 103.066 34.5761 96.5435 60.8261Z"
            fill="#26A17B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.98 28.42H67.67A2.7 2.7 0 0 1 69.79 29.61L80.48 47.63C81.04 48.57 80.87 49.75 80.08 50.50L50.66 78.70A2.5 2.5 0 0 1 47.22 78.70L17.83 50.54A2.4 2.4 0 0 1 17.47 47.61L28.90 29.56A2.5 2.5 0 0 1 30.98 28.42ZM62.93 36.47V41.52H52.48V45.03C59.82 45.40 65.33 46.94 65.37 48.79V52.63C65.33 54.48 59.82 56.01 52.48 56.39V64.99H45.54V56.39C38.20 56.01 32.69 54.48 32.65 52.63V48.79C32.69 46.94 38.20 45.40 45.54 45.03V41.52H35.09V36.47H62.93ZM49.01 53.75C56.85 53.75 63.39 52.45 64.99 50.71C63.64 49.24 58.72 48.08 52.48 47.76V51.43A80 80 0 0 1 49.01 51.52A80 80 0 0 1 45.54 51.43V47.76C39.30 48.08 34.39 49.24 33.03 50.71C34.63 52.45 41.18 53.75 49.01 53.75Z"
            fill="white"
          />
        </symbol>

        <symbol id="coinUSDC" viewBox="0 0 98 98">
          <path
            d="M96.5435 60.8261C90.005 87.0601 63.4344 103.08 37.1522 96.5371C10.9182 89.9786 -5.07549 63.4078 1.46299 37.1739C8.00148 10.9399 34.5561 -5.07951 60.7741 1.46295C87.0723 7.92523 103.066 34.5761 96.5435 60.8261Z"
            fill="#2775CA"
          />
          <path
            d="M20.47 38.18C14.55 53.90 22.72 71.67 38.64 77.38C39.26 77.79 39.87 78.61 39.87 79.22V82.08C39.87 82.49 39.87 82.69 39.66 82.89C39.46 83.71 38.64 84.12 37.83 83.71C26.39 80.04 17.61 71.26 13.94 59.82C7.81 40.43 18.43 19.81 37.83 13.68C38.03 13.48 38.44 13.48 38.64 13.48C39.46 13.68 39.87 14.29 39.87 15.11V17.97C39.87 18.99 39.46 19.60 38.64 20.01C30.27 23.07 23.54 29.61 20.47 38.18Z"
            fill="white"
          />
          <path
            d="M58.45 14.50C58.65 13.68 59.47 13.27 60.29 13.68C71.51 17.36 80.50 26.14 84.17 37.77C90.30 57.17 79.68 77.79 60.29 83.92C60.08 84.12 59.67 84.12 59.47 84.12C58.65 83.92 58.24 83.30 58.24 82.49V79.63C58.24 78.61 58.65 77.99 59.47 77.59C67.84 74.52 74.58 67.99 77.64 59.42C83.56 43.69 75.39 25.93 59.47 20.22C58.86 19.81 58.24 18.99 58.24 18.17V15.32C58.24 14.91 58.24 14.70 58.45 14.50Z"
            fill="white"
          />
          <path
            d="M49.67 45.33C58.24 46.35 62.53 48.80 62.53 55.94C62.53 61.46 58.45 65.74 52.32 66.77V71.67C52.12 72.69 51.51 73.30 50.69 73.30H47.63C46.61 73.10 45.99 72.48 45.99 71.67V66.77C39.26 65.74 35.99 62.07 35.17 56.97V56.76C35.17 55.94 35.79 55.33 36.60 55.33H40.07C40.69 55.33 41.30 55.74 41.50 56.56C42.11 59.62 43.95 61.87 49.26 61.87C53.14 61.87 56.00 59.62 56.00 56.35C56.00 53.09 54.16 51.86 48.44 50.84C39.87 49.82 35.79 47.17 35.79 40.43C35.79 35.32 39.66 31.24 45.79 30.42V25.73C45.99 24.71 46.61 24.09 47.42 24.09H50.49C51.51 24.30 52.12 24.91 52.12 25.73V30.63C56.81 31.04 60.49 34.51 61.31 38.99V39.20C61.31 40.02 60.69 40.63 59.88 40.63H56.61C56.00 40.63 55.39 40.22 55.18 39.61C54.16 36.55 52.12 35.32 48.44 35.32C44.36 35.32 42.32 37.16 42.32 40.02C42.32 42.88 43.54 44.51 49.67 45.33Z"
            fill="white"
          />
        </symbol>

        <symbol id="coinBTT" viewBox="0 0 98 98">
          <circle cx="49" cy="49" r="49" fill="#000008" />
          <path
            d="M62.39 44.16c-1.77 0-3.26 1.5-3.26 3.26v3.4c0 1.77 1.49 3.26 3.26 3.26 1.77 0 3.26-1.5 3.26-3.26v-3.4c0-1.77-1.49-3.26-3.26-3.26zm-26.78 0c-1.77 0-3.26 1.5-3.26 3.26v3.4c0 1.77 1.49 3.26 3.26 3.26 1.77 0 3.26-1.5 3.26-3.26v-3.4c0-1.77-1.49-3.26-3.26-3.26zm13.39-19.16C34.86 25 22 37.86 22 53.63c0 8.4 3.65 15.93 9.42 21.18v-6.01h6v7.74c2.43 1.39 5.1 2.4 7.92 2.99v-5.57h6v6.3c.62.04 1.25.07 1.88.07 1.23 0 2.43-.09 3.61-.26V73.7h6v5.1c2.69-.78 5.24-1.94 7.56-3.44v-6.56h6v1.73c5.03-5.15 8.14-12.19 8.14-19.91C84.53 37.87 71.67 25 49 25z"
            fill="#ffffff"
            opacity="0.95"
          />
        </symbol>
      </defs>

      <circle cx="130" cy="150" r="120" fill="url(#trc20Glow)" />

      <g transform="translate(130 48)">
        <text x="-112" y="-22" fontFamily="Rubik" fontSize="8" fontWeight="600" letterSpacing="1.8" fill="#aaaaaa">
          [ CONTRACT ADDRESS ]
        </text>
        <rect x="-112" y="-14" width="224" height="32" rx="16" fill="#ffffff" stroke="#161616" strokeOpacity="0.12" />
        <rect
          x="-112"
          y="-14"
          width="224"
          height="32"
          rx="16"
          fill="none"
          stroke="#c43631"
          strokeOpacity="0.4"
          strokeDasharray="2 3"
          style={{ animation: CSS.dashFlowSlow }}
        />
        <g transform="translate(-94 2)">
          <circle r="10" fill="#c43631" />
          <text y="4" textAnchor="middle" fontFamily="Rubik" fontSize="11" fontWeight="700" fill="#ffffff">
            T
          </text>
        </g>
        <text x="-76" y="6" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" fill="#161616">
          TR7NHqjeKQxGTCi8q8ZY4…
        </text>
        <rect x="90" y="-4" width="2" height="10" fill="#c43631">
          <animate attributeName="opacity" values="0;0;1;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      <path
        d="M 130 72 L 130 120"
        fill="none"
        stroke="#c43631"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="3 4"
        style={{ animation: CSS.dashFlow }}
      />
      <circle cx="130" cy="120" r="3" fill="#c43631" />

      <g transform="translate(130 170)">
        <rect x="-112" y="-30" width="224" height="60" rx="30" fill="#ffffff" stroke="#c43631" strokeOpacity="0.15" />

        <g transform="translate(-90 -24)">
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 0s' }}>
            <circle cx="24" cy="24" r="24" fill="#ffffff" stroke="#c43631" strokeOpacity="0.12" />
            <use href="#coinTRX" x="2" y="2" width="44" height="44" />
          </g>
        </g>
        <g transform="translate(-30 -24)">
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 0.5s' }}>
            <circle cx="24" cy="24" r="24" fill="#ffffff" stroke="#c43631" strokeOpacity="0.12" />
            <use href="#coinUSDC" x="2" y="2" width="44" height="44" />
          </g>
        </g>
        <g transform="translate(30 -24)">
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 1s' }}>
            <circle cx="24" cy="24" r="24" fill="#ffffff" stroke="#c43631" strokeOpacity="0.12" />
            <use href="#coinUSDT" x="2" y="2" width="44" height="44" />
          </g>
        </g>
        <g transform="translate(90 -24)">
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 1.5s' }}>
            <circle cx="24" cy="24" r="24" fill="#ffffff" stroke="#c43631" strokeOpacity="0.12" />
            <use href="#coinBTT" x="2" y="2" width="44" height="44" />
          </g>
        </g>
      </g>

      <g
        transform="translate(130 228)"
        fontFamily="Rubik"
        fontSize="9"
        fontWeight="600"
        letterSpacing="1.5"
        fill="#aaaaaa"
        textAnchor="middle"
      >
        <text y="0">
          TRX · USDC · USDT · BTT · <tspan fill="#c43631">ANY TRC-20</tspan>
        </text>
      </g>
    </svg>
  )
}

export function OnChainIllustration() {
  return (
    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <radialGradient id="keyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ee3f2c" stopOpacity="0.35" />
          <stop offset="80%" stopColor="#ee3f2c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="130" cy="130" r="110" fill="url(#keyGlow)" />

      <g opacity="0.55">
        <line
          x1="44"
          y1="200"
          x2="216"
          y2="60"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="5 6"
          style={{ animation: 'feat-dash-flow 6s linear infinite' }}
        />

        <g transform="translate(44 200)">
          <rect x="-26" y="-26" width="52" height="52" rx="6" fill="#1e1e1e" stroke="rgba(255,255,255,0.18)" />
          <rect x="-20" y="-20" width="40" height="3" rx="1" fill="rgba(255,255,255,0.22)" />
          <rect x="-20" y="-14" width="28" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <rect x="-20" y="-8" width="34" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <rect x="-20" y="-2" width="22" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <text x="-22" y="22" fontFamily="ui-monospace,Menlo,monospace" fontSize="7" fill="rgba(255,255,255,0.4)">
            #71 038 213
          </text>
        </g>

        <g transform="translate(130 130)">
          <rect
            x="-60"
            y="-60"
            width="120"
            height="120"
            rx="10"
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeDasharray="6 8"
            style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: CSS.spinSlow }}
          />
        </g>

        <g transform="translate(216 60)">
          <rect x="-26" y="-26" width="52" height="52" rx="6" fill="#1e1e1e" stroke="rgba(255,255,255,0.18)" />
          <rect x="-20" y="-20" width="40" height="3" rx="1" fill="rgba(255,255,255,0.22)" />
          <rect x="-20" y="-14" width="28" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <rect x="-20" y="-8" width="34" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <rect x="-20" y="-2" width="22" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
          <text x="-22" y="22" fontFamily="ui-monospace,Menlo,monospace" fontSize="7" fill="rgba(255,255,255,0.4)">
            #71 038 215
          </text>
        </g>

        <g transform="translate(130 130)">
          <rect x="-44" y="-44" width="88" height="88" rx="8" fill="#1e1e1e" stroke="#c43631" strokeOpacity="0.35" />
          <text x="-40" y="-30" fontFamily="Rubik" fontSize="7" fontWeight="600" letterSpacing="1.5" fill="rgba(255,255,255,0.45)">
            BLOCK
          </text>
          <text x="40" y="-30" textAnchor="end" fontFamily="ui-monospace,Menlo,monospace" fontSize="7" fill="rgba(255,255,255,0.45)">
            #71 038 214
          </text>
        </g>
      </g>

      <g transform="translate(130 130)" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: CSS.beat }}>
        <circle r="28" fill="#161616" stroke="#c43631" strokeWidth="1.5" />
        <circle r="28" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
        <circle r="10" fill="none" stroke="#c43631" strokeWidth="1.5" />
        <rect x="24" y="-4" width="44" height="8" rx="2" fill="#c43631" />
        <rect x="50" y="4" width="6" height="10" rx="1" fill="#c43631" />
        <rect x="62" y="4" width="4" height="8" rx="1" fill="#c43631" />
        <circle r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </g>

      <g transform="translate(130 206)">
        <rect x="-72" y="-11" width="144" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
        <text y="4" textAnchor="middle" fontFamily="Rubik" fontSize="10" fontWeight="600" letterSpacing="2" fill="#f5f5f5">
          YOUR KEYS · YOUR FUNDS
        </text>
      </g>

      <g transform="translate(58 50) rotate(-10)">
        <rect x="-36" y="-10" width="72" height="20" rx="10" fill="none" stroke="#c43631" strokeWidth="1.2" />
        <text y="3" textAnchor="middle" fontFamily="Rubik" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="#c43631">
          NO CUSTODY
        </text>
      </g>
      <g transform="translate(210 222) rotate(6)">
        <rect x="-32" y="-10" width="64" height="20" rx="10" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text y="3" textAnchor="middle" fontFamily="Rubik" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="rgba(255,255,255,0.8)">
          NO KYC
        </text>
      </g>
    </svg>
  )
}

export function CsvUploadIllustration() {
  return (
    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <linearGradient id="csvFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <mask id="csvMask">
          <rect width="260" height="260" fill="url(#csvFade)" />
        </mask>
      </defs>

      <g transform="translate(130 40)">
        <rect x="-92" y="-24" width="184" height="48" rx="10" fill="#ffffff" stroke="#c43631" strokeOpacity="0.4" />
        <rect x="-80" y="-10" width="20" height="20" rx="4" fill="#c43631" />
        <path d="M -74 0 L -68 6 L -60 -4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="-50" y="-2" fontFamily="Rubik" fontSize="11" fontWeight="700" fill="#161616">
          recipients.csv
        </text>
        <text x="-50" y="12" fontFamily="Rubik" fontSize="9" fill="#aaaaaa">
          482 rows · 14 KB
        </text>
        <g transform="translate(70 0)">
          <rect x="-20" y="-10" width="40" height="20" rx="10" fill="hsla(166,83%,47%,0.15)" />
          <text y="3" textAnchor="middle" fontFamily="Rubik" fontSize="9" fontWeight="700" fill="hsla(166,83%,47%,1)">
            OK
          </text>
        </g>
      </g>

      <g mask="url(#csvMask)" transform="translate(0 12)">
        <g fontFamily="ui-monospace,Menlo,monospace" fontSize="9" fill="#313131">
          <g style={{ animation: 'feat-rise-row 4s ease-in-out infinite 0s' }}>
            <rect x="48" y="100" width="164" height="22" rx="4" fill="#ffffff" stroke="#bbbbbb55" />
            <text x="56" y="115">TX7f...a19c</text>
            <rect x="140" y="108" width="2" height="6" fill="#bbbbbb" />
            <text x="148" y="115" fill="#c43631" fontWeight="600">42.000</text>
          </g>
          <g style={{ animation: 'feat-rise-row 4s ease-in-out infinite 0.6s' }}>
            <rect x="48" y="128" width="164" height="22" rx="4" fill="#ffffff" stroke="#bbbbbb55" />
            <text x="56" y="143">TN2b...84e0</text>
            <rect x="140" y="136" width="2" height="6" fill="#bbbbbb" />
            <text x="148" y="143" fill="#c43631" fontWeight="600">12.500</text>
          </g>
          <g style={{ animation: 'feat-rise-row 4s ease-in-out infinite 1.2s' }}>
            <rect x="48" y="156" width="164" height="22" rx="4" fill="#ffffff" stroke="#bbbbbb55" />
            <text x="56" y="171">TS9k...c712</text>
            <rect x="140" y="164" width="2" height="6" fill="#bbbbbb" />
            <text x="148" y="171" fill="#c43631" fontWeight="600">88.000</text>
          </g>
          <g style={{ animation: 'feat-rise-row 4s ease-in-out infinite 1.8s' }}>
            <rect x="48" y="184" width="164" height="22" rx="4" fill="#ffffff" stroke="#bbbbbb55" />
            <text x="56" y="199">TQ4r...60ab</text>
            <rect x="140" y="192" width="2" height="6" fill="#bbbbbb" />
            <text x="148" y="199" fill="#c43631" fontWeight="600">5.2500</text>
          </g>
          <g style={{ animation: 'feat-rise-row 4s ease-in-out infinite 2.4s' }}>
            <rect x="48" y="212" width="164" height="22" rx="4" fill="#ffffff" stroke="#bbbbbb55" />
            <text x="56" y="227">TV8m...11df</text>
            <rect x="140" y="220" width="2" height="6" fill="#bbbbbb" />
            <text x="148" y="227" fill="#c43631" fontWeight="600">100.00</text>
          </g>
        </g>
      </g>

      <g transform="translate(0 82)">
        <rect x="48" y="-14" width="164" height="22" rx="4" fill="#161616" />
        <text x="56" y="1" fontFamily="Rubik" fontSize="9" fontWeight="600" letterSpacing="1" fill="#fff">
          ADDRESS
        </text>
        <text x="148" y="1" fontFamily="Rubik" fontSize="9" fontWeight="600" letterSpacing="1" fill="#fff">
          AMOUNT
        </text>
        <rect x="142" y="-14" width="1" height="22" fill="rgba(255,255,255,0.2)" />
      </g>

      <g transform="translate(44 158)" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 2.4s ease-in-out infinite' }}>
        <circle r="14" fill="#c43631" />
        <path
          d="M -5 2 L 0 -5 L 5 2 M 0 -5 L 0 5"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

export function FeesIllustration() {
  return (
    <svg viewBox="0 0 260 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <radialGradient id="feeGlow" cx="70%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#c43631" stopOpacity="0.14" />
          <stop offset="80%" stopColor="#c43631" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="180" cy="110" r="130" fill="url(#feeGlow)" />

      <g transform="translate(22 30)" fontFamily="Rubik" fontWeight="600" letterSpacing="2">
        <text fontSize="9" fill="#aaaaaa">[ FEES · BEFORE / AFTER ]</text>
      </g>

      <g transform="translate(22 62)" fontFamily="ui-monospace,Menlo,monospace" fontSize="8">
        <path
          d="M 0 0 L 104 0 L 104 158 L 96 152 L 88 158 L 80 152 L 72 158 L 64 152 L 56 158 L 48 152 L 40 158 L 32 152 L 24 158 L 16 152 L 8 158 L 0 152 Z"
          fill="#ffffff"
          stroke="#16161622"
        />
        <text x="52" y="14" textAnchor="middle" fontFamily="Rubik" fontSize="8" fontWeight="700" letterSpacing="2" fill="#161616">
          ONE-BY-ONE
        </text>
        <line x1="10" y1="20" x2="94" y2="20" stroke="#16161622" strokeDasharray="2 2" />
        <g fill="#313131">
          {[
            { n: '0001', y: 32, strikeY: 29, delay: '0s' },
            { n: '0002', y: 44, strikeY: 41, delay: '0.1s' },
            { n: '0003', y: 56, strikeY: 53, delay: '0.2s' },
            { n: '0004', y: 68, strikeY: 65, delay: '0.3s' },
            { n: '0005', y: 80, strikeY: 77, delay: '0.4s' },
          ].map((r) => (
            <g key={r.n}>
              <text x="10" y={r.y}>
                tx #{r.n}
              </text>
              <text x="94" y={r.y} textAnchor="end" fill="#161616">
                0.30
              </text>
              <line x1="8" y1={r.strikeY} x2="96" y2={r.strikeY} stroke="#c43631" strokeWidth="1" strokeDasharray="88" strokeDashoffset="88">
                <animate
                  attributeName="stroke-dashoffset"
                  values="88;0;0"
                  keyTimes="0;0.5;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={r.delay}
                />
              </line>
            </g>
          ))}
          <text x="10" y="94" fill="#aaaaaa">
            … 995 more
          </text>
          <line x1="8" y1="91" x2="96" y2="91" stroke="#c43631" strokeWidth="1" strokeDasharray="88" strokeDashoffset="88">
            <animate attributeName="stroke-dashoffset" values="88;0;0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" begin="0.5s" />
          </line>
        </g>
        <line x1="10" y1="104" x2="94" y2="104" stroke="#161616" strokeWidth="1" />
        <text x="10" y="118" fontFamily="Rubik" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#aaaaaa">
          TOTAL
        </text>
        <text x="94" y="118" textAnchor="end" fontFamily="Rubik" fontSize="12" fontWeight="700" fill="#161616">
          300
        </text>
        <text x="94" y="130" textAnchor="end" fontFamily="Rubik" fontSize="8" fill="#aaaaaa">
          TRX units
        </text>
      </g>

      <g>
        <path
          d="M 130 130 C 150 120, 160 110, 168 102"
          fill="none"
          stroke="#c43631"
          strokeWidth="1"
          strokeDasharray="3 3"
          style={{ animation: 'feat-dash-flow 4s linear infinite' }}
        />
        <path
          d="M 164 98 L 170 102 L 164 106"
          fill="none"
          stroke="#c43631"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g transform="translate(240 132)" textAnchor="end">
        <line x1="-96" y1="-46" x2="-60" y2="-46" stroke="#c43631" strokeWidth="3" strokeLinecap="round" />
        <text x="0" y="0" fontFamily="Rubik" fontSize="108" fontWeight="300" letterSpacing="-0.06em" fill="#161616">
          90
        </text>
        <text x="0" y="-54" textAnchor="start" dx="4" fontFamily="Rubik" fontSize="34" fontWeight="300" fill="#c43631" letterSpacing="-0.04em">
          %
        </text>
        <text x="0" y="22" fontFamily="Rubik" fontSize="9" fontWeight="600" letterSpacing="2" fill="#aaaaaa">
          FEES SAVED
        </text>
        <line x1="-106" y1="34" x2="0" y2="34" stroke="#161616" strokeOpacity="0.12" />
        <text x="0" y="50" fontFamily="Rubik" fontSize="10" fontWeight="500" fill="#c43631">
          BATCH
        </text>
        <text x="-106" y="50" textAnchor="start" fontFamily="Rubik" fontSize="10" fill="#161616">
          30 TRX
        </text>
      </g>
    </svg>
  )
}

function InstantDot({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  const hidden = Math.max(0, delay)
  const flip = Math.min(1, hidden + 0.03)
  return (
    <circle cx={cx} cy={cy} r="5" fill="#16161610">
      <animate
        attributeName="fill"
        values="#16161610;#16161610;#10b981;#10b981"
        keyTimes={`0;${hidden.toFixed(2)};${flip.toFixed(2)};1`}
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  )
}

export function InstantConfirmationIllustration() {
  const rows = [0, 1, 2, 3, 4]
  const cols = Array.from({ length: 10 }, (_, i) => i)
  return (
    <svg viewBox="0 0 520 260" preserveAspectRatio="xMidYMid meet" className="block w-full h-full">
      <defs>
        <radialGradient id="instGlow" cx="30%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c43631" stopOpacity="0.14" />
          <stop offset="80%" stopColor="#c43631" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="instFill" x1="0" x2="1">
          <stop offset="0%" stopColor="#c43631" />
          <stop offset="100%" stopColor="#ee3f2c" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="130" r="140" fill="url(#instGlow)" />

      <g transform="translate(34 32)" fontFamily="Rubik" fontWeight="600" letterSpacing="2">
        <text fontSize="10" fill="#aaaaaa">[ ONE BLOCK · ONE BATCH ]</text>
      </g>

      <g transform="translate(34 156)">
        <text fontFamily="Rubik" fontSize="108" fontWeight="300" letterSpacing="-0.06em" fill="#161616">
          ~3
          <tspan fontSize="48" dy="-36" fontWeight="500" fill="#c43631">
            s
          </tspan>
        </text>
        <line x1="0" y1="14" x2="180" y2="14" stroke="#c43631" strokeOpacity="0.35" strokeWidth="1" />
        <text x="0" y="34" fontFamily="Rubik" fontSize="10" fontWeight="600" letterSpacing="2" fill="#aaaaaa">
          BLOCK TIME · FINAL
        </text>
      </g>

      <line x1="272" y1="40" x2="272" y2="224" stroke="#16161614" strokeDasharray="2 4" />

      <g transform="translate(294 64)">
        <text x="0" y="0" fontFamily="Rubik" fontSize="10" fontWeight="600" letterSpacing="2" fill="#aaaaaa">
          DELIVERY
        </text>
        <text x="196" y="0" textAnchor="end" fontFamily="ui-monospace,Menlo,monospace" fontSize="9" fill="#161616">
          1,000 / 1,000
        </text>

        <g transform="translate(0 22)">
          <rect width="196" height="8" rx="4" fill="#16161610" />
          <rect width="0" height="8" rx="4" fill="url(#instFill)">
            <animate attributeName="width" values="0;196;196" keyTimes="0;0.9;1" dur="3s" repeatCount="indefinite" />
          </rect>
          <g fontFamily="Rubik" fontSize="8" fill="#aaaaaa" letterSpacing="1">
            <line x1="0" y1="12" x2="0" y2="18" stroke="#16161633" />
            <text x="0" y="30">0s</text>
            <line x1="98" y1="12" x2="98" y2="18" stroke="#16161633" />
            <text x="98" y="30" textAnchor="middle">~1.5s</text>
            <line x1="196" y1="12" x2="196" y2="18" stroke="#c43631" />
            <text x="196" y="30" textAnchor="end" fill="#c43631" fontWeight="700">
              ~3s
            </text>
          </g>
        </g>

        <g transform="translate(0 70)">
          <text x="0" y="0" fontFamily="Rubik" fontSize="8" fontWeight="600" letterSpacing="1.8" fill="#aaaaaa">
            RECIPIENTS
          </text>
          <g transform="translate(0 8)">
            {rows.map((r) =>
              cols.map((c) => {
                const cx = 6 + c * 20
                const cy = 6 + r * 20
                const delay = Math.min(0.88, c * 0.1 + r * 0.01)
                return <InstantDot key={`${r}-${c}`} cx={cx} cy={cy} delay={delay} />
              }),
            )}
          </g>
        </g>
      </g>
    </svg>
  )
}
