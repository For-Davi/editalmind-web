import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { renderRoute } from '@/test/render'

describe('NotFoundPage', () => {
  it('is rendered for unknown routes and links back home', async () => {
    const user = userEvent.setup()
    renderRoute('/rota-inexistente')

    expect(
      await screen.findByRole('heading', { name: /página não encontrada/i }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /voltar para o início/i }))

    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(/do pdf do edital/i)
  })
})
