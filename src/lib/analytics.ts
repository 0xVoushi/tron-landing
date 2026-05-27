import posthog from 'posthog-js'

// Fires a custom event to PostHog and GA4.
export function trackEvent(name: string, payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  try {
    posthog.capture(name, payload)
  } catch {
    /* PostHog not initialized yet — ignore */
  }

  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') {
    w.gtag('event', name, payload)
  }
}
