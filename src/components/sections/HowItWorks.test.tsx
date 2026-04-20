import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument()
  })

  it('renders all 4 step titles', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getAllByText('Connect Wallet').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Add Recipients').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Set Amounts').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Send').length).toBeGreaterThanOrEqual(1)
  })

  it('renders step numbers 01 through 04', () => {
    renderWithIntl(<HowItWorks />)
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('02').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('04').length).toBeGreaterThanOrEqual(1)
  })
})
