'use client'

import { useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'
import {
  CONSENT_CHANGED_EVENT,
  persistConsent,
  readStoredConsent,
  updateGtagConsent,
} from '@/lib/consent'

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener('storage', callback)
  window.addEventListener(CONSENT_CHANGED_EVENT, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback)
  }
}

export function ConsentBanner() {
  const t = useTranslations('consent')
  const granted = useSyncExternalStore(
    subscribe,
    () => readStoredConsent(),
    () => false
  )

  function handleAccept() {
    persistConsent()
    updateGtagConsent(true)
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      try {
        posthog.opt_in_capturing()
      } catch {
        /* posthog not initialized yet — provider picks up consent on next mount */
      }
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
    }
  }

  if (granted) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('label')}
      data-testid="consent-banner"
      className="fixed inset-x-0 bottom-0 z-[1000] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="flex w-full max-w-3xl flex-col items-stretch gap-3 rounded-2xl bg-brand-black/95 px-5 py-4 text-white shadow-2xl backdrop-blur-md ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <p className="flex-1 text-sm leading-relaxed text-white/90">
          {t('message')}
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {t('accept')}
        </button>
      </div>
    </div>
  )
}
