const TRON_RED = '#EE3F2C'
const INK = '#161616'
const INK_SOFT = '#ececec'
const INK_FAINT = '#f4f4f4'
const SUCCESS = '#22C55E'

function TronMark({ size = 56 }: { size?: number }) {
  const inner = size * 0.72
  return (
    <g>
      <circle r={size / 2} fill={TRON_RED} />
      <g
        transform={`translate(${-inner / 2} ${-inner / 2}) scale(${inner / 98})`}
        fill="#ffffff"
      >
        <path d="M78.20 42.34C75.33 39.69 71.36 35.64 68.13 32.77L67.93 32.64C67.62 32.38 67.26 32.18 66.87 32.05C59.07 30.59 22.77 23.81 22.06 23.89C21.87 23.92 21.68 23.99 21.51 24.10L21.33 24.25C21.10 24.47 20.93 24.75 20.83 25.05L20.78 25.17V25.85V25.96C24.87 37.34 41.00 74.61 44.18 83.36C44.37 83.95 44.74 85.08 45.42 85.14H45.57C45.93 85.14 47.48 83.09 47.48 83.09S75.20 49.48 78.00 45.90C78.37 45.46 78.69 44.99 78.96 44.49C79.03 44.09 79.00 43.69 78.86 43.32C78.73 42.94 78.50 42.60 78.20 42.34ZM54.59 46.26L66.42 36.45L73.36 42.84L54.59 46.26ZM50.00 45.62L29.63 28.93L62.58 35.00L50.00 45.62ZM51.84 49.99L72.68 46.63L48.85 75.34L51.84 49.99ZM26.87 30.59L48.30 48.77L45.20 75.36L26.87 30.59Z" />
      </g>
    </g>
  )
}

/* ---------------------------------------------------------------- */
/* 01 — BatchTrxIllustration (TRON disk on pedestal → pills)        */
/* ---------------------------------------------------------------- */
interface BatchTrxIllustrationProps {
  recipientsLabel: string
  moreLabel: string
}
export function BatchTrxIllustration({
  recipientsLabel,
  moreLabel,
}: BatchTrxIllustrationProps) {
  const targets = [
    { y: 40, addr: 'TX7fh…a19c', amount: '42.000', strong: false },
    { y: 78, addr: 'TN2b…84d0', amount: '12.500', strong: false },
    { y: 116, addr: 'TS9k…c778', amount: '8.750', strong: true },
    { y: 154, addr: 'TQ4r…60ab', amount: '5.250', strong: false },
    { y: 192, addr: 'TV8m…11df', amount: '100.00', strong: false },
  ]
  const sourceX = 128
  const sourceY = 130
  const targetX = 316

  return (
    <svg
      viewBox="0 0 520 280"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
    >
      <defs>
        <radialGradient id="bt-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TRON_RED} stopOpacity="0.28" />
          <stop offset="65%" stopColor={TRON_RED} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bt-disk" cx="35%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#FF6A56" />
          <stop offset="55%" stopColor={TRON_RED} />
          <stop offset="100%" stopColor="#C8281B" />
        </radialGradient>
        <radialGradient id="bt-pedestal-top" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#f6f6f6" />
          <stop offset="100%" stopColor="#e4e4e4" />
        </radialGradient>
        <linearGradient id="bt-pedestal-side" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </linearGradient>
        <radialGradient id="bt-pedestal-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.18" />
          <stop offset="80%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <text
        x="486"
        y="22"
        textAnchor="end"
        fontFamily="Rubik"
        fontSize="11"
        fontWeight="700"
        letterSpacing="2"
        fill={TRON_RED}
      >
        {recipientsLabel}
      </text>

      <circle cx={sourceX} cy={sourceY} r="118" fill="url(#bt-glow)" />

      {/* Pedestal — 3D disc with shadow */}
      <g>
        {/* Ground shadow */}
        <ellipse cx={sourceX} cy={sourceY + 86} rx="104" ry="10" fill="url(#bt-pedestal-shadow)" />
        {/* Side wall */}
        <path
          d={`M ${sourceX - 96} ${sourceY + 66} Q ${sourceX - 96} ${sourceY + 82} ${sourceX} ${sourceY + 82} Q ${sourceX + 96} ${sourceY + 82} ${sourceX + 96} ${sourceY + 66} Z`}
          fill="url(#bt-pedestal-side)"
        />
        {/* Top surface */}
        <ellipse cx={sourceX} cy={sourceY + 66} rx="96" ry="13" fill="url(#bt-pedestal-top)" />
        {/* Top edge highlight */}
        <ellipse cx={sourceX} cy={sourceY + 66} rx="96" ry="13" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.9" />
      </g>

      {/* TRON disk */}
      <g transform={`translate(${sourceX} ${sourceY})`}>
        {/* Outer halo ring */}
        <circle r="60" fill="none" stroke={TRON_RED} strokeOpacity="0.12" strokeWidth="1.5" />
        {/* White coin edge */}
        <circle r="54" fill="#ffffff" />
        <circle r="54" fill="none" stroke="#f3d3ce" strokeWidth="1" />
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-beat 4s ease-in-out infinite' }}>
          {/* Solid red disk */}
          <circle r="46" fill={TRON_RED} />
          <g transform="translate(-41 -45) scale(0.84)">
            <path fill="#ffffff" d="M78.20 42.34C75.33 39.69 71.36 35.64 68.13 32.77L67.93 32.64C67.62 32.38 67.26 32.18 66.87 32.05C59.07 30.59 22.77 23.81 22.06 23.89C21.87 23.92 21.68 23.99 21.51 24.10L21.33 24.25C21.10 24.47 20.93 24.75 20.83 25.05L20.78 25.17V25.85V25.96C24.87 37.34 41.00 74.61 44.18 83.36C44.37 83.95 44.74 85.08 45.42 85.14H45.57C45.93 85.14 47.48 83.09 47.48 83.09S75.20 49.48 78.00 45.90C78.37 45.46 78.69 44.99 78.96 44.49C79.03 44.09 79.00 43.69 78.86 43.32C78.73 42.94 78.50 42.60 78.20 42.34ZM54.59 46.26L66.42 36.45L73.36 42.84L54.59 46.26ZM50.00 45.62L29.63 28.93L62.58 35.00L50.00 45.62ZM51.84 49.99L72.68 46.63L48.85 75.34L51.84 49.99ZM26.87 30.59L48.30 48.77L45.20 75.36L26.87 30.59Z" />
          </g>
        </g>
      </g>

      {/* Connection lines */}
      <g
        fill="none"
        stroke={TRON_RED}
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="4 5"
      >
        {targets.map((t, i) => (
          <path
            key={t.addr}
            d={`M ${sourceX + 46} ${sourceY} C ${sourceX + 120} ${sourceY}, ${targetX - 30} ${t.y + 12}, ${targetX - 6} ${t.y + 12}`}
            style={{ animation: `feat-dash-flow 2.8s linear infinite ${i * 0.18}s` }}
          />
        ))}
      </g>

      {/* Recipient pills */}
      {targets.map((t) => (
        <g key={t.addr} transform={`translate(${targetX} ${t.y})`}>
          <circle cx="-6" cy="12" r="3" fill={TRON_RED} />
          <rect
            x="0"
            y="0"
            width="168"
            height="24"
            rx="12"
            fill="#ffffff"
            stroke={t.strong ? TRON_RED : INK_SOFT}
            strokeOpacity={t.strong ? 0.8 : 1}
            strokeWidth={t.strong ? '1.3' : '1'}
          />
          <text
            x="14"
            y="16"
            fontFamily="ui-monospace,Menlo,Consolas,monospace"
            fontSize="10"
            fill={INK}
          >
            {t.addr}
          </text>
          <text
            x="156"
            y="16"
            textAnchor="end"
            fontFamily="Rubik"
            fontSize="10"
            fontWeight="700"
            fill={TRON_RED}
          >
            {t.amount} TRX
          </text>
        </g>
      ))}

      {/* + 994 MORE pill */}
      <g transform={`translate(${targetX} 234)`}>
        <rect
          x="0"
          y="0"
          width="168"
          height="26"
          rx="13"
          fill="#fff6f4"
          stroke={TRON_RED}
          strokeOpacity="0.4"
          strokeDasharray="3 3"
        />
        <text
          x="84"
          y="17"
          textAnchor="middle"
          fontFamily="Rubik"
          fontSize="11"
          fontWeight="700"
          letterSpacing="1.2"
          fill={TRON_RED}
        >
          {moreLabel}
        </text>
      </g>
    </svg>
  )
}

/* ---------------------------------------------------------------- */
/* 02 — Trc20Illustration (central disk + 4 brand tokens)           */
/* ---------------------------------------------------------------- */
interface Trc20IllustrationProps {
  anyLabel: string
}
export function Trc20Illustration({ anyLabel }: Trc20IllustrationProps) {
  const cx = 130
  const cy = 130
  const rOuter = 96

  return (
    <svg
      viewBox="0 0 260 260"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
    >
      <defs>
        <radialGradient id="trc20-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TRON_RED} stopOpacity="0.1" />
          <stop offset="70%" stopColor={TRON_RED} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Guide rings */}
      <g fill="none" stroke="#e8e8e8">
        <circle cx={cx} cy={cy} r={rOuter} strokeWidth="1" />
        <circle cx={cx} cy={cy} r={rOuter - 30} strokeWidth="1" strokeDasharray="2 6" strokeOpacity="0.7" />
      </g>
      <circle cx={cx} cy={cy} r="82" fill="url(#trc20-glow)" />

      {/* Center disk */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle r="46" fill="#ffffff" stroke="#e4e4e4" />
        <circle r="46" fill="none" stroke={TRON_RED} strokeOpacity="0.22" strokeDasharray="2 4" />
        <text
          y="-5"
          textAnchor="middle"
          fontFamily="Rubik"
          fontSize="10"
          fontWeight="700"
          letterSpacing="1.4"
          fill="#9a9a9a"
        >
          {anyLabel}
        </text>
        <text
          y="13"
          textAnchor="middle"
          fontFamily="Rubik"
          fontSize="14"
          fontWeight="700"
          letterSpacing="-0.01em"
          fill={INK}
        >
          TRC-20
        </text>
      </g>

      {/* TRX (top) */}
      <g transform={`translate(${cx} ${cy - rOuter})`}>
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 0s' }}>
          <image href="/tokens/TRON-Coin.svg" x="-24" y="-24" width="48" height="48" />
        </g>
      </g>

      {/* USDT (right) */}
      <g transform={`translate(${cx + rOuter} ${cy})`}>
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 0.4s' }}>
          <image href="/tokens/Tether.svg" x="-24" y="-24" width="48" height="48" />
        </g>
      </g>

      {/* USDC (left) */}
      <g transform={`translate(${cx - rOuter} ${cy})`}>
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 1.2s' }}>
          <image href="/tokens/USD-Coin.svg" x="-24" y="-24" width="48" height="48" />
        </g>
      </g>

      {/* BTT (bottom) */}
      <g transform={`translate(${cx} ${cy + rOuter})`}>
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'feat-float-y 5s ease-in-out infinite 0.8s' }}>
          <image href="/tokens/BitTorrent-Coin.svg" x="-24" y="-24" width="48" height="48" />
        </g>
      </g>
    </svg>
  )
}

/* ---------------------------------------------------------------- */
/* 03 — OnChainIllustration (shield + wallet)                       */
/* ---------------------------------------------------------------- */
export function OnChainIllustration() {
  return (
    <svg
      viewBox="0 0 280 220"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
    >
      <defs>
        <radialGradient id="oc-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={TRON_RED} stopOpacity="0.2" />
          <stop offset="50%" stopColor={TRON_RED} stopOpacity="0.06" />
          <stop offset="100%" stopColor={TRON_RED} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="oc-shield-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f2f2f2" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="108" r="100" fill="url(#oc-glow)" />

      {/* Shield */}
      <g transform="translate(62 44)">
        <path
          d="M 52 0 L 100 14 L 100 58 C 100 92, 78 118, 52 128 C 26 118, 4 92, 4 58 L 4 14 Z"
          fill="url(#oc-shield-body)"
          stroke="#e4e4e4"
          strokeWidth="1"
        />
        <path
          d="M 52 0 L 100 14 L 100 58 C 100 92, 78 118, 52 128"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1"
        />
        {/* Padlock inside shield */}
        <g transform="translate(52 66)">
          <rect x="-17" y="-8" width="34" height="28" rx="5" fill={TRON_RED} />
          <path
            d="M -10 -8 L -10 -18 A 10 10 0 0 1 10 -18 L 10 -8"
            fill="none"
            stroke={TRON_RED}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="0" cy="4" r="3" fill="#ffffff" />
          <rect x="-1.4" y="4" width="2.8" height="7" fill="#ffffff" />
        </g>
      </g>

      {/* Wallet */}
      <g transform="translate(158 80)">
        <path
          d="M 4 0 L 110 0 C 116 0, 120 4, 120 10 L 120 70 C 120 76, 116 80, 110 80 L 4 80 C -2 80, -6 76, -6 70 L -6 10 C -6 4, -2 0, 4 0 Z"
          fill="#ffffff"
          stroke="#e4e4e4"
          strokeWidth="1"
        />
        {/* Top edge accent */}
        <path
          d="M 4 0 L 110 0 C 116 0, 120 4, 120 10 L 120 22 L -6 22 L -6 10 C -6 4, -2 0, 4 0 Z"
          fill="#fafafa"
        />
        <rect x="10" y="32" width="60" height="5" rx="2.5" fill="#ececec" />
        <rect x="10" y="44" width="40" height="5" rx="2.5" fill="#ececec" />
        {/* Card slot / button */}
        <g transform="translate(88 58)">
          <circle r="14" fill={TRON_RED} />
          <circle r="5" fill="#ffffff" />
        </g>
      </g>

      {/* Faint connection */}
      <path
        d="M 160 100 C 150 110, 142 100, 138 100"
        fill="none"
        stroke={TRON_RED}
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
    </svg>
  )
}

/* ---------------------------------------------------------------- */
/* 04 — CsvUploadIllustration (static table)                        */
/* ---------------------------------------------------------------- */
interface CsvUploadIllustrationProps {
  addressLabel: string
  amountLabel: string
}
export function CsvUploadIllustration({
  addressLabel,
  amountLabel,
}: CsvUploadIllustrationProps) {
  const rows = [
    { addr: 'TX7fh…a19c', amount: '42.000' },
    { addr: 'TN2b…84d0', amount: '12.500' },
    { addr: 'TQ4r…60ab', amount: '5.250' },
    { addr: 'TV8m…11df', amount: '100.00' },
  ]
  const doubled = [...rows, ...rows]
  const ROW_START = 30
  const ROW_STRIDE = 28

  return (
    <svg
      viewBox="0 0 200 130"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
    >
      <defs>
        <linearGradient id="csv-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="1" />
        </linearGradient>
        <mask id="csv-rows-mask">
          <rect x="0" y="26" width="200" height="106" fill="url(#csv-fade)" />
        </mask>
        <clipPath id="csv-rows-clip">
          <rect x="0" y="26" width="200" height="106" />
        </clipPath>
      </defs>

      {/* Header — static */}
      <g>
        <rect x="0" y="0" width="200" height="22" rx="4" fill={INK} />
        <text
          x="14"
          y="15"
          fontFamily="Rubik"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.4"
          fill="#ffffff"
        >
          {addressLabel}
        </text>
        <text
          x="186"
          y="15"
          textAnchor="end"
          fontFamily="Rubik"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.4"
          fill="#ffffff"
        >
          {amountLabel}
        </text>
      </g>

      {/* Scrolling rows — clipped + bottom-faded */}
      <g clipPath="url(#csv-rows-clip)" mask="url(#csv-rows-mask)">
        <g style={{ animation: 'feat-row-scroll 8s linear infinite' }}>
          {doubled.map((r, i) => (
            <g key={i} transform={`translate(0 ${ROW_START + i * ROW_STRIDE})`}>
              <rect width="200" height="22" rx="4" fill="#ffffff" stroke={INK_SOFT} />
              <text
                x="14"
                y="15"
                fontFamily="ui-monospace,Menlo,Consolas,monospace"
                fontSize="10"
                fill={INK}
              >
                {r.addr}
              </text>
              <text
                x="150"
                y="15"
                textAnchor="end"
                fontFamily="Rubik"
                fontSize="10"
                fontWeight="600"
                fill={INK}
              >
                {r.amount}
              </text>
              <g transform="translate(180 11)">
                <circle r="8" fill={SUCCESS} />
                <path
                  d="M -3 0 L -1 2 L 3.5 -2.5"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          ))}
        </g>
      </g>
    </svg>
  )
}

interface CsvFileChipProps {
  name: string
  meta: string
}
export function CsvFileChip({ name, meta }: CsvFileChipProps) {
  return (
    <div className="flex items-center gap-3 w-full rounded-xl border border-[#ececec] bg-white px-3 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="w-8 h-8 rounded-lg bg-[#f6f6f6] flex items-center justify-center shrink-0 text-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="m8 7 4-4 4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-tight min-w-0 flex-1">
        <span className="font-rubik text-[13px] font-bold text-dark-hard truncate">
          {name}
        </span>
        <span className="font-rubik text-[10.5px] text-dark/55 mt-0.5 truncate">
          {meta}
        </span>
      </div>
      <span
        className="inline-flex w-4 h-4 rounded-full items-center justify-center shrink-0"
        style={{ background: '#22C55E' }}
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6.5L4.5 9L10 3"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* 05 — FeesIllustration (one-by-one vs batch, big %)               */
/* ---------------------------------------------------------------- */
interface FeesIllustrationProps {
  oneByOneLabel: string
  batchLabel: string
  txCount300: string
  txCount1: string
  higherCostLabel: string
  lowerCostLabel: string
}
export function FeesIllustration({
  oneByOneLabel,
  batchLabel,
  txCount300,
  txCount1,
  higherCostLabel,
  lowerCostLabel,
}: FeesIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full"
    >
      {/* Left panel — ONE-BY-ONE */}
      <g transform="translate(0 0)">
        <rect x="0" y="0" width="140" height="200" rx="10" fill="#ffffff" stroke={INK_SOFT} />
        <text
          x="14"
          y="22"
          fontFamily="Rubik"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.6"
          fill="#8a8a8a"
        >
          {oneByOneLabel}
        </text>
        <text
          x="14"
          y="40"
          fontFamily="Rubik"
          fontSize="11"
          fill="#8a8a8a"
        >
          {txCount300}
        </text>
        <text
          x="14"
          y="98"
          fontFamily="Rubik"
          fontSize="40"
          fontWeight="400"
          letterSpacing="-0.03em"
          fill={TRON_RED}
        >
          ~90%
        </text>
        <text
          x="14"
          y="118"
          fontFamily="Rubik"
          fontSize="10"
          fontWeight="600"
          fill={TRON_RED}
        >
          {higherCostLabel}
        </text>
        {/* Red bars */}
        <g transform="translate(14 140)">
          {[0.95, 0.85, 0.75, 0.65, 0.55].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={TRON_RED}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
        <g transform="translate(14 152)">
          {[0.9, 0.8, 0.7, 0.6, 0.5].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={TRON_RED}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
        <g transform="translate(14 164)">
          {[0.85, 0.75, 0.65, 0.55, 0.45].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={TRON_RED}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
      </g>

      {/* Chevron/arrow between */}
      <g transform="translate(160 96)">
        <circle r="12" fill={TRON_RED} />
        <path
          d="M -3 -4 L 3 0 L -3 4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Right panel — BATCH */}
      <g transform="translate(180 0)">
        <rect x="0" y="0" width="140" height="200" rx="10" fill="#ffffff" stroke={INK_SOFT} />
        <text
          x="14"
          y="22"
          fontFamily="Rubik"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.6"
          fill="#8a8a8a"
        >
          {batchLabel}
        </text>
        <text
          x="14"
          y="40"
          fontFamily="Rubik"
          fontSize="11"
          fill="#8a8a8a"
        >
          {txCount1}
        </text>
        <text
          x="14"
          y="98"
          fontFamily="Rubik"
          fontSize="40"
          fontWeight="400"
          letterSpacing="-0.03em"
          fill={SUCCESS}
        >
          ~90%
        </text>
        <text
          x="14"
          y="118"
          fontFamily="Rubik"
          fontSize="10"
          fontWeight="600"
          fill={SUCCESS}
        >
          {lowerCostLabel}
        </text>
        {/* Green bars */}
        <g transform="translate(14 140)">
          {[0.9, 0.15, 0.12, 0.1, 0.08].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={SUCCESS}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
        <g transform="translate(14 152)">
          {[0.85, 0.12, 0.1, 0.08, 0.06].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={SUCCESS}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
        <g transform="translate(14 164)">
          {[0.8, 0.1, 0.08, 0.06, 0.05].map((op, i) => (
            <rect
              key={i}
              x={i * 22}
              y="0"
              width="16"
              height="6"
              rx="3"
              fill={SUCCESS}
              fillOpacity={op}
              style={{ animation: 'feat-cost-bar 10s linear infinite' }}
            />
          ))}
        </g>
      </g>
    </svg>
  )
}

