'use client'

import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { usePathname } from '@/i18n/routing'
import { CONSENT_CHANGED_EVENT, readStoredConsent } from '@/lib/consent'

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
  const pathnameRef = useRef(pathname)

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
      opt_out_capturing_by_default: true,
      persistence: 'localStorage+cookie',
    })

    if (readStoredConsent()) {
      posthog.opt_in_capturing()
    }
  }, [])

  useEffect(() => {
    pathnameRef.current = pathname
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return
    if (posthog.has_opted_out_capturing()) return
    posthog.capture('$pageview', { $current_url: currentUrl(pathname) })
  }, [pathname])

  // Consent granted on the current page: the pathname effect won't re-run, so
  // the page's first $pageview would otherwise be missed. ConsentBanner already
  // calls opt_in_capturing(), so only opt in defensively (and without emitting a
  // duplicate $opt_in), then capture exactly one $pageview for the current URL.
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
    function onConsentChange() {
      if (!readStoredConsent()) return
      if (posthog.has_opted_out_capturing()) {
        posthog.opt_in_capturing({ captureEventName: false })
      }
      posthog.capture('$pageview', { $current_url: currentUrl(pathnameRef.current) })
    }
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChange)
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChange)
  }, [])

  return children as React.ReactElement
}
