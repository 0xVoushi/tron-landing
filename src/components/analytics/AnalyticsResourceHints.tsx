'use client'

import ReactDOM from 'react-dom'

const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'
const GA_ORIGIN = 'https://www.googletagmanager.com'

/**
 * Initiate connections to third-party analytics origins before the SDKs need
 * them. React 19's preconnect/prefetchDNS are scoped to client modules per the
 * Next 16 docs — invoking ReactDOM.preconnect at render time lets React dedup
 * and hydrate the corresponding <link> tags.
 *
 * Only emits hints for origins that will actually be hit:
 * - PostHog preconnect (always-on once a key is configured)
 * - Google Tag Manager DNS prefetch (lighter — GA loads via @next/third-parties
 *   only when NEXT_PUBLIC_GA_ID is set; we still hint the resolver early)
 */
export function AnalyticsResourceHints() {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    ReactDOM.preconnect(POSTHOG_HOST, { crossOrigin: 'anonymous' })
  }
  if (process.env.NEXT_PUBLIC_GA_ID) {
    ReactDOM.prefetchDNS(GA_ORIGIN)
  }
  return null
}
