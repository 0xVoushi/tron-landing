import { loadPostHog } from './posthog'

// Fires a custom event to PostHog and GA4.
export function trackEvent(name: string, payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    void loadPostHog()
      .then((posthog) => {
        posthog.capture(name, payload)
      })
      .catch(() => {
        /* PostHog not initialized yet - ignore */
      })
  }

  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') {
    w.gtag('event', name, payload)
  }
}
