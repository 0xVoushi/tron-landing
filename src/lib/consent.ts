export const CONSENT_STORAGE_KEY = 'ms_consent_v1'
export const CONSENT_GRANTED = 'granted'
export const CONSENT_CHANGED_EVENT = 'ms_consent_changed'

export function readStoredConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === CONSENT_GRANTED
  } catch {
    return false
  }
}

export function persistConsent(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, CONSENT_GRANTED)
  } catch {
    /* localStorage blocked — ignore */
  }
}

export function updateGtagConsent(granted: boolean): void {
  if (typeof window === 'undefined') return
  const value = granted ? 'granted' : 'denied'
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== 'function') return
  w.gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}
