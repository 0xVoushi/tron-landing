export function trackEvent(name: string, payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  // Stub until a real analytics backend is wired in.
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${name}`, payload)
}
