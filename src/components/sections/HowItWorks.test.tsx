import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument()
  })

  it('renders all 4 step titles', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument()
    expect(screen.getByText('Add Recipients')).toBeInTheDocument()
    expect(screen.getByText('Set Amounts')).toBeInTheDocument()
    expect(screen.getByText('Send')).toBeInTheDocument()
  })

  it('renders step numbers 01 through 04', () => {
    render(<HowItWorks />)
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('02').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('04').length).toBeGreaterThanOrEqual(1)
  })
})
