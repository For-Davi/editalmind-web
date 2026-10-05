import { expect, test } from '@playwright/test'

test('home page loads and shows the value proposition', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('EditalMind')
  await expect(
    page.getByRole('heading', { level: 1, name: /do pdf do edital ao seu plano/i }),
  ).toBeVisible()
})

test('unknown routes show the not found page', async ({ page }) => {
  await page.goto('/rota-inexistente')

  await expect(page.getByRole('heading', { name: /página não encontrada/i })).toBeVisible()
  await page.getByRole('link', { name: /voltar para o início/i }).click()
  await expect(page).toHaveURL('/')
})
