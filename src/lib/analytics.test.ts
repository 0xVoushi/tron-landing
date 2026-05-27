jest.mock('posthog-js', () => ({
  __esModule: true,
  default: { capture: jest.fn() },
}))

import posthog from 'posthog-js'
import { trackEvent } from './analytics'

const mockCapture = (posthog as unknown as { capture: jest.Mock }).capture

describe('trackEvent', () => {
  afterEach(() => {
    jest.clearAllMocks()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).gtag
  })

  it('forwards the event to PostHog and GA gtag', () => {
    const gtag = jest.fn()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag = gtag

    trackEvent('launch_dapp_click', { placement: 'hero' })

    expect(mockCapture).toHaveBeenCalledWith('launch_dapp_click', { placement: 'hero' })
    expect(gtag).toHaveBeenCalledWith('event', 'launch_dapp_click', { placement: 'hero' })
  })

  it('does not throw when gtag is absent', () => {
    expect(() => trackEvent('launch_dapp_click', { placement: 'navbar' })).not.toThrow()
    expect(mockCapture).toHaveBeenCalledTimes(1)
  })
})
