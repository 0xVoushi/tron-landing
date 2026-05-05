import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    renderWithIntl(<Features />)
    expect(
      screen.getByRole('heading', { name: /Why TRON Multisender/i }),
    ).toBeInTheDocument()
  })

  it('renders all 6 feature titles', () => {
    renderWithIntl(<Features />)
    expect(
      screen.getByText('Send to 1,000+ wallets in one transaction'),
    ).toBeInTheDocument()
    expect(screen.getByText('Works with any TRC-20 token')).toBeInTheDocument()
    expect(screen.getByText('Your keys. Your funds.')).toBeInTheDocument()
    expect(screen.getByText('Upload recipients in seconds')).toBeInTheDocument()
    expect(screen.getByText('Spend less on network costs')).toBeInTheDocument()
    expect(screen.getByText('Near-instant finality')).toBeInTheDocument()
  })

  it('renders subtitle, bottom line, and CTA', () => {
    renderWithIntl(<Features />)
    expect(screen.getByText(/Batch payouts on TRON/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Built for high-volume payouts on TRON/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Learn more/i }),
    ).toBeInTheDocument()
  })

  it('renders the "No custody / No sign-up / No KYC" pill tags', () => {
    renderWithIntl(<Features />)
    expect(screen.getByText('No custody')).toBeInTheDocument()
    expect(screen.getByText('No sign-up')).toBeInTheDocument()
    expect(screen.getByText('No KYC')).toBeInTheDocument()
  })
})
