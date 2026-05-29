'use client'

import { useEffect, useState } from 'react'
import { usePathname } from '@/i18n/routing'
import { loadPostHog, type PostHogClient } from '@/lib/posthog'

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

function cancelIdle(handle: number) {
  if (typeof window.cancelIdleCallback === 'function') {
    window.cancelIdleCallback(handle)
    return
  }
  window.clearTimeout(handle)
}

/**
 * Keeps the imported PostHog client in state so the pageview effect re-runs
 * after idle init and captures the initial pageview without a ref race.
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [posthogClient, setPosthogClient] = useState<PostHogClient | null>(null)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return
    if (posthogClient) return

    let cancelled = false
    const idleHandle = scheduleIdle(() => {
      void loadPostHog()
        .then((client) => {
          if (cancelled) return
          client.init(key, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
            person_profiles: 'identified_only',
            capture_pageview: false,
            capture_pageleave: true,
            persistence: 'localStorage+cookie',
          })
          setPosthogClient(client)
        })
        .catch(() => {
          /* Analytics must never block rendering. */
        })
    })

    return () => {
      cancelled = true
      cancelIdle(idleHandle)
    }
  }, [posthogClient])

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return
    if (!posthogClient) return
    posthogClient.capture('$pageview', { $current_url: currentUrl(pathname) })
  }, [pathname, posthogClient])

  return children as React.ReactElement
}
