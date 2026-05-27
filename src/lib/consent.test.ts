import {
  CONSENT_STORAGE_KEY,
  persistConsent,
  readStoredConsent,
  updateGtagConsent,
} from './consent'

describe('consent helpers', () => {
  beforeEach(() => {
    window.localStorage.clear()
    delete (window as unknown as { gtag?: unknown }).gtag
  })

  it('readStoredConsent returns false when nothing is stored', () => {
    expect(readStoredConsent()).toBe(false)
  })

  it('persistConsent writes granted to localStorage', () => {
    persistConsent()
    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('granted')
    expect(readStoredConsent()).toBe(true)
  })

  it('updateGtagConsent calls gtag with consent update when gtag exists', () => {
    const gtag = jest.fn()
    ;(window as unknown as { gtag: jest.Mock }).gtag = gtag

    updateGtagConsent(true)

    expect(gtag).toHaveBeenCalledWith(
      'consent',
      'update',
      expect.objectContaining({
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      })
    )
  })

  it('updateGtagConsent is a no-op when gtag is missing', () => {
    expect(() => updateGtagConsent(true)).not.toThrow()
  })

  it('updateGtagConsent(false) sends denied for every storage key', () => {
    const gtag = jest.fn()
    ;(window as unknown as { gtag: jest.Mock }).gtag = gtag

    updateGtagConsent(false)

    expect(gtag).toHaveBeenCalledWith(
      'consent',
      'update',
      expect.objectContaining({
        ad_storage: 'denied',
        analytics_storage: 'denied',
      })
    )
  })
})
