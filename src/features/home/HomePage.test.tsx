import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { renderRoute } from '@/test/render'

describe('HomePage', () => {
  it('presents the product value proposition', async () => {
    renderRoute('/')

    expect(
      await screen.findByRole('heading', { level: 1, name: /do pdf do edital ao seu plano/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'EditalMind' })).toHaveAttribute('href', '/')
  })

  it('confirms interest in the beta after a click', async () => {
    const user = userEvent.setup()
    renderRoute('/')

    await user.click(await screen.findByRole('button', { name: /quero participar do beta/i }))

    const button = screen.getByRole('button', { name: /avisaremos quando abrir/i })
    expect(button).toBeDisabled()
  })
})
