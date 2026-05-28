// Stub the locale-aware Link from @/i18n/routing with a passthrough <a> so
// href assertions are stable and don't depend on next-intl router internals.
// `prefetch` is destructured out of the spread so the rendered DOM matches
// what a plain <a> would produce — lets us assert that home-mode links don't
// carry a stray prefetch attribute.
// Placed above the Footer import for readability; jest.mock is hoisted
// anyway.
jest.mock('../../i18n/routing', () => ({
  Link: ({
    href,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prefetch: _prefetch,
    ...rest
  }: {
    href: string
    children: React.ReactNode
    prefetch?: boolean | 'auto' | null
  }) => (
    <a href={typeof href === 'string' ? href : ''} {...rest}>
      {children}
    </a>
  ),
}))

import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { Footer } from './Footer'

const NAV_NAME_TO_HASH: Array<[RegExp, string]> = [
  [/How It Works/i, '#how-it-works'],
  [/^Features$/i, '#features'],
  [/Perks/i, '#pricing'],
  [/^FAQ$/i, '#faq'],
]

const LEGAL_NAMES: RegExp[] = [
  /Terms of Service/i,
  /Privacy Policy/i,
  /Documentation/i,
]

describe('Footer', () => {
  it('renders the brand description', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByText(/Batch transfer tool for the TRON blockchain/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByRole('link', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Features$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^FAQ$/i })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    renderWithIntl(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`2022.+${year} TRON Multisender`))
    ).toBeInTheDocument()
  })

  describe('isHome=true (home page) — plain <a> with same-page hashes', () => {
    beforeEach(() => {
      renderWithIntl(<Footer isHome />)
    })

    it.each(NAV_NAME_TO_HASH)('nav link %s href = %s', (name, expectedHref) => {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', expectedHref)
      // Plain <a> must not carry a leaked prefetch DOM attribute.
      expect(link.hasAttribute('prefetch')).toBe(false)
    })

    it.each(LEGAL_NAMES)('legal link %s href = "#"', (name) => {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', '#')
      expect(link.hasAttribute('prefetch')).toBe(false)
    })
  })

  describe('default (inner pages) — locale-aware Link to home + hash', () => {
    beforeEach(() => {
      renderWithIntl(<Footer />)
    })

    it.each(NAV_NAME_TO_HASH)('nav link %s href = /%s', (name, hash) => {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', `/${hash}`)
    })

    it.each(LEGAL_NAMES)('legal link %s href = "/#"', (name) => {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', '/#')
    })
  })
})
