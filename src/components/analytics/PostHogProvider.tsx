'use client'

import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { usePathname } from '@/i18n/routing'
import { readStoredConsent } from '@/lib/consent'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const initialized = useRef(false)

  useEffect(() => {
    if (!POSTHOG_KEY) return
    if (initialized.current) return
    initialized.current = true

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: false,
      capture_pageleave: true,
      opt_out_capturing_by_default: true,
      persistence: 'localStorage+cookie',
    })

    if (readStoredConsent()) {
      posthog.opt_in_capturing()
    }
  }, [])

  useEffect(() => {
    if (!POSTHOG_KEY || !pathname) return
    if (posthog.has_opted_out_capturing()) return
    const query =
      typeof window === 'undefined'
        ? ''
        : new URLSearchParams(window.location.search).toString()
    const url = query ? `${pathname}?${query}` : pathname
    posthog.capture('$pageview', { $current_url: url })
  }, [pathname])

  return children as React.ReactElement
}
