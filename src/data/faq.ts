export const FAQ_ITEM_KEYS = [
  'whatIs',
  'howToSendUsdt',
  'customAmounts',
  'safety',
  'supportedTokens',
  'addressLimit',
  'cost',
  'csvUpload',
  'wallet',
  'vsManual',
  'kyc',
  'payroll',
  'airdrop',
  'batchTrc20',
  'minimum',
  'trc10VsTrc20',
] as const

export type FaqItemKey = (typeof FAQ_ITEM_KEYS)[number]
