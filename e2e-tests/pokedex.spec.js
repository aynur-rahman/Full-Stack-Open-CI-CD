const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('ivysaur', { exact: true })).toBeVisible()
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('opens a Pokemon and navigates to its next and previous neighbors', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'ivysaur' }).click()
  await expect(page.getByText('chlorophyll', { exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'Next', exact: true }).click()
  await expect(page).toHaveURL(/pokemon\/venusaur$/)
  await expect(page.locator('.pokemon-name')).toHaveText('venusaur')
  await page.getByRole('link', { name: 'Previous', exact: true }).click()
  await expect(page.locator('.pokemon-name')).toHaveText('ivysaur')
  await expect(page.getByText('chlorophyll', { exact: true })).toBeVisible()
})
