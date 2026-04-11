import { render, screen } from '@testing-library/react'
import { SupportedTokens } from './SupportedTokens'

describe('SupportedTokens', () => {
  it('renders the section heading', () => {
    render(<SupportedTokens />)
    expect(screen.getByRole('heading', { name: /Supported Tokens/i })).toBeInTheDocument()
  })

  it('renders all token symbols', () => {
    render(<SupportedTokens />)
    expect(screen.getByText('TRX')).toBeInTheDocument()
    expect(screen.getByText('USDT')).toBeInTheDocument()
    expect(screen.getByText('USDC')).toBeInTheDocument()
    expect(screen.getByText('WTRX')).toBeInTheDocument()
    expect(screen.getByText('BTT')).toBeInTheDocument()
  })

  it('renders the Native badge for TRX', () => {
    render(<SupportedTokens />)
    expect(screen.getByText('Native')).toBeInTheDocument()
  })

  it('renders the any TRC-20 note', () => {
    render(<SupportedTokens />)
    expect(screen.getByText(/Any TRC-20 contract address is supported/i)).toBeInTheDocument()
  })
})
