import {
  getGlobalSchemas,
  getHomeSchemas,
  getGuideSchemas,
  getVipSchemas,
  getReferralSchemas,
} from './structured-data'

// getTranslations resolves to a callable translator that echoes the key.
jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn(async () => (key: string) => key),
}))

type Schema = Record<string, unknown>
const types = (arr: Schema[]) => arr.map((s) => s['@type'])
const hasSearchAction = (arr: Schema[]) =>
  arr.some(
    (s) => (s.potentialAction as Schema | undefined)?.['@type'] === 'SearchAction'
  )

describe('structured-data composition', () => {
  it('global schemas = Organization + SoftwareApplication', async () => {
    expect(types(await getGlobalSchemas('en'))).toEqual([
      'Organization',
      'SoftwareApplication',
    ])
  })

  it('home schemas = WebPage + HowTo + FAQPage', async () => {
    expect(types(await getHomeSchemas('en'))).toEqual(['WebPage', 'HowTo', 'FAQPage'])
  })

  it('guide schemas = WebPage + HowTo + BreadcrumbList', async () => {
    expect(types(await getGuideSchemas('en'))).toEqual([
      'WebPage',
      'HowTo',
      'BreadcrumbList',
    ])
  })

  it('vip schemas = WebPage + BreadcrumbList, no FAQ/HowTo', async () => {
    const t = types(await getVipSchemas('en'))
    expect(t).toEqual(['WebPage', 'BreadcrumbList'])
    expect(t).not.toContain('FAQPage')
    expect(t).not.toContain('HowTo')
  })

  it('referral schemas = WebPage + BreadcrumbList, no FAQ/HowTo', async () => {
    const t = types(await getReferralSchemas('en'))
    expect(t).toEqual(['WebPage', 'BreadcrumbList'])
    expect(t).not.toContain('FAQPage')
    expect(t).not.toContain('HowTo')
  })

  it('no page advertises a SearchAction (site search does not exist)', async () => {
    const all = [
      getGlobalSchemas,
      getHomeSchemas,
      getGuideSchemas,
      getVipSchemas,
      getReferralSchemas,
    ]
    for (const get of all) {
      expect(hasSearchAction(await get('en'))).toBe(false)
    }
  })

  it('HowTo steps mirror each page’s visible content', async () => {
    const homeHowTo = (await getHomeSchemas('en')).find(
      (s) => s['@type'] === 'HowTo'
    ) as Schema
    const guideHowTo = (await getGuideSchemas('en')).find(
      (s) => s['@type'] === 'HowTo'
    ) as Schema
    const homeStep = (homeHowTo.step as Schema[])[0]
    const guideStep = (guideHowTo.step as Schema[])[0]
    // stub translator echoes keys, so names reveal the source namespace
    expect(String(homeStep.name)).toContain('howItWorks.steps')
    expect(String(guideStep.name)).toContain('guide.sections')
  })
})
