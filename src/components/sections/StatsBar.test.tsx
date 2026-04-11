import { render, screen } from '@testing-library/react'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders all 4 stat values', () => {
    render(<StatsBar />)
    expect(screen.getByText('1,000+')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('~90%')).toBeInTheDocument()
    expect(screen.getByText('Zero')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsBar />)
    expect(screen.getByText('Recipients per Tx')).toBeInTheDocument()
    expect(screen.getByText('Token Types')).toBeInTheDocument()
    expect(screen.getByText('Fee Savings')).toBeInTheDocument()
    expect(screen.getByText('Custody')).toBeInTheDocument()
  })
})
