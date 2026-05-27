import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How It Works/i, level: 2 })).toBeInTheDocument()
  })

  it('renders 4 step articles', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })

  it('renders all 4 step titles from i18n', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument()
    expect(screen.getByText('Prepare Transfer')).toBeInTheDocument()
    expect(screen.getByText('Approve')).toBeInTheDocument()
    expect(screen.getByText('Multisend')).toBeInTheDocument()
  })

  it('renders step numbers 01 through 04', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders a demo video for each step', () => {
    const { container } = renderWithIntl(<HowItWorks />)
    expect(container.querySelectorAll('video')).toHaveLength(4)
  })
})
