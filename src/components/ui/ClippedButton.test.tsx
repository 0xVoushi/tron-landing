import { render, screen } from '@testing-library/react'
import { ClippedButton } from './ClippedButton'

describe('ClippedButton', () => {
  it('renders children', () => {
    render(<ClippedButton variant="red">Get Started</ClippedButton>)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('applies red variant classes', () => {
    render(<ClippedButton variant="red">Go</ClippedButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-brand-red')
    expect(btn).toHaveClass('text-white')
  })

  it('applies white variant classes', () => {
    render(<ClippedButton variant="white">Book</ClippedButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-white')
    expect(btn).toHaveClass('text-black')
  })

  it('applies sm clip-path class by default', () => {
    render(<ClippedButton variant="red">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-sm')
  })

  it('applies lg clip-path class when size is lg', () => {
    render(<ClippedButton variant="red" size="lg">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-lg')
  })

  it('applies md clip-path class when size is md', () => {
    render(<ClippedButton variant="red" size="md">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-md')
  })

  it('forwards className prop', () => {
    render(<ClippedButton variant="red" className="custom-class">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<ClippedButton variant="red" onClick={handleClick}>Go</ClippedButton>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
