import { render } from '@testing-library/react'

jest.mock('posthog-js', () => ({
  __esModule: true,
  default: { init: jest.fn(), capture: jest.fn() },
}))

// Avoid pulling in next-intl request context for this leaf component.
jest.mock('../../i18n/routing', () => ({ usePathname: () => '/' }))

import posthog from 'posthog-js'
import { PostHogProvider } from './PostHogProvider'

const mockPosthog = posthog as unknown as { init: jest.Mock; capture: jest.Mock }
const pageviews = () =>
  mockPosthog.capture.mock.calls.filter((c) => c[0] === '$pageview')

describe('PostHogProvider (always-on, no consent)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.history.replaceState(null, '', '/')
    process.env.NEXT_PUBLIC_POSTHOG_KEY = 'phc_test'
  })

  it('initializes PostHog and captures a $pageview with query string', () => {
    window.history.replaceState(null, '', '/?x=1')
    render(<PostHogProvider>child</PostHogProvider>)

    expect(mockPosthog.init).toHaveBeenCalledTimes(1)
    const pvs = pageviews()
    expect(pvs).toHaveLength(1)
    expect(pvs[0][1]).toEqual({ $current_url: '/?x=1' })
  })

  it('does nothing when no PostHog key is configured', () => {
    delete process.env.NEXT_PUBLIC_POSTHOG_KEY
    render(<PostHogProvider>child</PostHogProvider>)

    expect(mockPosthog.init).not.toHaveBeenCalled()
    expect(pageviews()).toHaveLength(0)
  })
})
