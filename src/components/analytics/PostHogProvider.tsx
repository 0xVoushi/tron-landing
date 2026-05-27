'use client'

import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { usePathname } from '@/i18n/routing'

function currentUrl(pathname: string): string {
  const query =
    typeof window === 'undefined'
      ? ''
      : new URLSearchParams(window.location.search).toString()
  return query ? `${pathname}?${query}` : pathname
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const initialized = useRef(false)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return
    if (initialized.current) return
    initialized.current = true

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false,
      capture_pageleave: true,
      persistence: 'localStorage+cookie',
    })
  }, [])

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return
    posthog.capture('$pageview', { $current_url: currentUrl(pathname) })
  }, [pathname])

  return children as React.ReactElement
}
