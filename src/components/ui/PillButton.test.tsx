import { render, screen } from '@testing-library/react'
import { PillButton } from './PillButton'

describe('PillButton', () => {
  it('renders children', () => {
    render(<PillButton variant="primary">Get Started</PillButton>)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('applies primary variant classes', () => {
    render(<PillButton variant="primary">Go</PillButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('from-primary')
    expect(btn).toHaveClass('text-white')
  })

  it('applies secondary variant classes', () => {
    render(<PillButton variant="secondary">Book</PillButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-black-4')
    expect(btn).toHaveClass('text-dark-hard')
  })

  it('applies ghost variant classes', () => {
    render(<PillButton variant="ghost">More</PillButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-transparent')
    expect(btn).toHaveClass('text-dark')
  })

  it('is rounded-full', () => {
    render(<PillButton variant="primary">Go</PillButton>)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })

  it('forwards className prop', () => {
    render(<PillButton variant="primary" className="custom-class">Go</PillButton>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<PillButton variant="primary" onClick={handleClick}>Go</PillButton>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
