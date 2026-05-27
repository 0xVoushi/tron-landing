import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { LaunchDappButton } from './LaunchDappButton'

describe('LaunchDappButton', () => {
  it('renders the Launch dApp button', () => {
    renderWithIntl(<LaunchDappButton />)
    expect(screen.getByRole('button', { name: /Launch dApp/i })).toBeInTheDocument()
  })

  it('is fixed to the bottom and hidden on desktop (>=1024px)', () => {
    renderWithIntl(<LaunchDappButton />)
    const button = screen.getByRole('button', { name: /Launch dApp/i })
    const wrapper = button.parentElement as HTMLElement
    expect(wrapper.className).toContain('fixed')
    expect(wrapper.className).toContain('lg:hidden')
  })
})
