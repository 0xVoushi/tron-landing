export const DAPP_URL = 'https://tron.multisender.app'

// Builds a "Launch dApp" link to the dApp root with UTM attribution.
// `placement` identifies which CTA was clicked (utm_content), e.g. 'hero'.
export function launchDappUrl(placement: string): string {
  const url = new URL('/', DAPP_URL)
  url.searchParams.set('utm_source', 'trxsend.com')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', 'launch_dapp')
  url.searchParams.set('utm_content', placement)
  return url.toString()
}
