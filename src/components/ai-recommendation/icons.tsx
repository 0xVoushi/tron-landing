import type { SVGProps } from 'react'

export function GeminiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1C7CFF" />
          <stop offset="0.35" stopColor="#9168FF" />
          <stop offset="0.7" stopColor="#F04CFF" />
          <stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c.4 4.6 3.4 7.6 8 8-4.6.4-7.6 3.4-8 8-.4-4.6-3.4-7.6-8-8 4.6-.4 7.6-3.4 8-8z"
        fill="url(#gemini-grad)"
      />
    </svg>
  )
}

export function PerplexityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke="#1f1f1f" strokeWidth="1.6" />
      <path d="M12 2.5v19" stroke="#1f1f1f" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 18l14-12" stroke="#1f1f1f" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ChatGPTIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.55 10.03a5.4 5.4 0 0 0-.46-4.43 5.46 5.46 0 0 0-5.87-2.6A5.42 5.42 0 0 0 6.9 4.12 5.46 5.46 0 0 0 3.25 6.76a5.48 5.48 0 0 0 .67 6.4 5.4 5.4 0 0 0 .46 4.44 5.46 5.46 0 0 0 5.87 2.6 5.42 5.42 0 0 0 8.33 1.12 5.46 5.46 0 0 0 3.63-2.64 5.48 5.48 0 0 0-.66-6.64zM13.07 20.5a4.05 4.05 0 0 1-2.6-.94l.13-.07 4.32-2.5a.7.7 0 0 0 .35-.61v-6.1l1.83 1.06.02.04v5.05a4.06 4.06 0 0 1-4.05 4.07zM4.35 16.78a4.04 4.04 0 0 1-.48-2.72l.13.08 4.32 2.5c.22.12.48.12.7 0l5.28-3.05v2.1l.01.04-4.37 2.52a4.07 4.07 0 0 1-5.58-1.47zM3.2 7.56a4.06 4.06 0 0 1 2.12-1.78v5.14c0 .25.13.48.35.6l5.25 3.03-1.83 1.06a.07.07 0 0 1-.06 0L4.67 13.1A4.08 4.08 0 0 1 3.2 7.56zm15.02 3.5-5.25-3.04 1.82-1.05a.07.07 0 0 1 .07 0l4.37 2.52a4.07 4.07 0 0 1-.63 7.33v-5.15a.7.7 0 0 0-.38-.6zm1.82-2.74-.13-.08-4.31-2.5a.7.7 0 0 0-.71 0L9.6 8.79V6.68a.06.06 0 0 1 .02-.04L14 4.13a4.07 4.07 0 0 1 6.04 4.18zM8.6 12.07l-1.83-1.06a.07.07 0 0 1-.03-.04V5.93a4.07 4.07 0 0 1 6.67-3.13l-.13.07-4.31 2.5a.7.7 0 0 0-.36.61l-.01 6.09zm.99-2.14L11.94 8.58l2.35 1.35v2.71l-2.35 1.36-2.35-1.36v-2.7z"
        fill="#1f1f1f"
      />
    </svg>
  )
}

export function GrokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 3l6 7.2L18 3M6 21l6-7.2L18 21M3 7l18 10M21 7L3 17"
        stroke="#1f1f1f"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ClaudeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="#CC785C" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="2.5" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="21.5" />
        <line x1="2.5" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="21.5" y2="12" />
        <line x1="5.2" y1="5.2" x2="9.1" y2="9.1" />
        <line x1="14.9" y1="14.9" x2="18.8" y2="18.8" />
        <line x1="18.8" y1="5.2" x2="14.9" y2="9.1" />
        <line x1="9.1" y1="14.9" x2="5.2" y2="18.8" />
      </g>
    </svg>
  )
}
