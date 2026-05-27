import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { LaunchDappButton } from './LaunchDappButton'

describe('LaunchDappButton', () => {
  it('renders the Launch dApp link to the dApp (new tab + tracking)', () => {
    renderWithIntl(<LaunchDappButton />)
    const link = screen.getByRole('link', { name: /Launch dApp/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('tron.multisender.app'))
    expect(link).toHaveAttribute('href', expect.stringContaining('utm_content=mobile_fab'))
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('is fixed to the bottom and hidden on desktop (>=1024px)', () => {
    renderWithIntl(<LaunchDappButton />)
    const link = screen.getByRole('link', { name: /Launch dApp/i })
    const wrapper = link.parentElement as HTMLElement
    expect(wrapper.className).toContain('fixed')
    expect(wrapper.className).toContain('lg:hidden')
  })
})
