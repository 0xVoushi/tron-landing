import { act, render, screen, waitFor } from '@testing-library/react'
import { HeroVisual } from './HeroVisual'

jest.mock('./PixelBlast', () => ({
  PixelBlast: ({ transparent }: { transparent?: boolean }) => (
    <div data-testid="pixel-blast" data-transparent={String(transparent)} />
  )
}))

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  })
}

describe('HeroVisual', () => {
  it('waits for desktop pointer intent before loading PixelBlast', async () => {
    mockMatchMedia(true)

    render(<HeroVisual />)

    expect(screen.queryByTestId('pixel-blast')).not.toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new Event('pointermove'))
    })

    await waitFor(() => expect(screen.getByTestId('pixel-blast')).toBeInTheDocument())
    expect(screen.getByTestId('pixel-blast')).toHaveAttribute('data-transparent', 'false')
  })

  it('does not load PixelBlast on mobile even after pointer intent', () => {
    mockMatchMedia(false)

    render(<HeroVisual />)

    act(() => {
      window.dispatchEvent(new Event('pointermove'))
    })

    expect(screen.queryByTestId('pixel-blast')).not.toBeInTheDocument()
  })
})
