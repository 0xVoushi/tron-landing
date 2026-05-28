'use client'

import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { usePathname } from '@/i18n/routing'

function currentUrl(pathname: string): string {
  const query =
    typeof window === 'undefined'
      ? ''
      : new URLSearchParams(window.location.search).toString()
  return query ? `${pathname}?${query}` : pathname
}

function scheduleIdle(callback: IdleRequestCallback) {
  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(callback, { timeout: 2000 })
  }
  return window.setTimeout(
    () => callback({ didTimeout: false, timeRemaining: () => 0 }),
    1
  )
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // `initialized` is state (not a ref) so the pageview effect re-runs once
  // init completes and can capture the initial pageview itself. Avoids the
  // double-capture race that arises when both effects try to fire the first
  // pageview.
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return
    if (initialized) return

    scheduleIdle(() => {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
      })
      setInitialized(true)
    })
  }, [initialized])

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return
    if (!initialized) return
    posthog.capture('$pageview', { $current_url: currentUrl(pathname) })
  }, [pathname, initialized])

  return children as React.ReactElement
}
