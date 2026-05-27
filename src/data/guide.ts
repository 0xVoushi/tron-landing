export const GUIDE_SECTION_KEYS = ['prepare', 'approve', 'multisend'] as const

export type GuideSectionKey = (typeof GUIDE_SECTION_KEYS)[number]

export const GUIDE_STEP_KEYS: Record<GuideSectionKey, readonly string[]> = {
  prepare: ['connect', 'network', 'token', 'recipients', 'proceed'],
  approve: ['accept', 'allowance', 'wait'],
  multisend: ['initiate', 'confirm', 'wait'],
}
