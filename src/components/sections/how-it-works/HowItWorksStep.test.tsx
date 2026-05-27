import { render, screen, within } from '@testing-library/react'
import { HowItWorksStep } from './HowItWorksStep'

describe('HowItWorksStep', () => {
  function renderStep() {
    return render(
      <HowItWorksStep
        number="02"
        title="Prepare Transfer"
        description="Pick the token and load the recipient list."
      />
    )
  }

  it('renders as an article labelled by the step title', () => {
    renderStep()
    const article = screen.getByRole('article')
    expect(article).toHaveAttribute('aria-labelledby', 'how-it-works-step-02-title')
    expect(within(article).getByText('Prepare Transfer')).toHaveAttribute('id', 'how-it-works-step-02-title')
  })

  it('renders the step number', () => {
    renderStep()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderStep()
    expect(screen.getByText('Pick the token and load the recipient list.')).toBeInTheDocument()
  })

  it('renders a video placeholder for this step', () => {
    renderStep()
    expect(screen.getByRole('img', { name: /step 02 video placeholder/i })).toBeInTheDocument()
  })
})
