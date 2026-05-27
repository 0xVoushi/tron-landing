import type { Formats } from 'next-intl'

export const formats = {
  number: {
    compact: { notation: 'compact', maximumFractionDigits: 1 },
    currency: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 },
    percent: { style: 'percent', maximumFractionDigits: 1 },
  },
  dateTime: {
    short: { day: 'numeric', month: 'short', year: 'numeric' },
    long: { day: 'numeric', month: 'long', year: 'numeric' },
  },
} satisfies Formats
