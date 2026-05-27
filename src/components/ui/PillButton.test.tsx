import { render, screen } from '@testing-library/react'
import { PillButton } from './PillButton'
import { trackEvent } from '@/lib/analytics'

jest.mock('../../lib/analytics', () => ({ trackEvent: jest.fn() }))

const mockTrack = trackEvent as jest.Mock

describe('PillButton', () => {
  afterEach(() => jest.clearAllMocks())

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

  describe('as a link', () => {
    it('renders an <a> with the href (not a button)', () => {
      render(<PillButton variant="primary" href="https://x.test/">Launch</PillButton>)
      const link = screen.getByRole('link', { name: 'Launch' })
      expect(link).toHaveAttribute('href', 'https://x.test/')
      expect(link).toHaveClass('rounded-full')
      expect(screen.queryByRole('button')).toBeNull()
    })

    it('opens in a new tab with rel=noopener when newTab', () => {
      render(<PillButton variant="primary" href="https://x.test/" newTab>Launch</PillButton>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener')
    })

    it('does not set target when newTab is absent', () => {
      render(<PillButton variant="primary" href="https://x.test/">Launch</PillButton>)
      expect(screen.getByRole('link')).not.toHaveAttribute('target')
    })

    it('fires trackEvent(launch_dapp_click) with placement on click', () => {
      render(
        <PillButton variant="primary" href="https://x.test/" newTab track="hero">
          Launch
        </PillButton>
      )
      screen.getByRole('link').click()
      expect(mockTrack).toHaveBeenCalledWith('launch_dapp_click', { placement: 'hero' })
    })
  })
})
