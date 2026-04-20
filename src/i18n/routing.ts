import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { defaultLocale, localeCodes } from './locales'

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  localePrefix: 'as-needed',
  localeCookie: {
    name: 'ms_locale',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    ...(process.env.NEXT_PUBLIC_COOKIE_DOMAIN
      ? { domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN }
      : {}),
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
