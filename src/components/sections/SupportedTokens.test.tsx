import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { SupportedTokens } from './SupportedTokens'

describe('SupportedTokens', () => {
  it('renders the section heading', () => {
    renderWithIntl(<SupportedTokens />)
    expect(screen.getByRole('heading', { name: /Supported Tokens/i })).toBeInTheDocument()
  })

  it('renders all token symbols', () => {
    renderWithIntl(<SupportedTokens />)
    expect(screen.getByText('TRX')).toBeInTheDocument()
    expect(screen.getByText('USDT')).toBeInTheDocument()
    expect(screen.getByText('USDC')).toBeInTheDocument()
    expect(screen.getByText('WTRX')).toBeInTheDocument()
    expect(screen.getByText('BTT')).toBeInTheDocument()
  })

  it('renders the Native badge for TRX', () => {
    renderWithIntl(<SupportedTokens />)
    expect(screen.getByText('Native')).toBeInTheDocument()
  })

  it('renders the any TRC-20 note', () => {
    renderWithIntl(<SupportedTokens />)
    expect(screen.getByText(/Any TRC-20 contract address is supported/i)).toBeInTheDocument()
  })

  it('renders an icon image for every token', () => {
    const { container } = renderWithIntl(<SupportedTokens />)
    const icons = container.querySelectorAll('img[src^="/tokens/"]')
    expect(icons).toHaveLength(5)
  })
})
