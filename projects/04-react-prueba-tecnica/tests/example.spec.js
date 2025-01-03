// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  //const fact = await page.locator('p').textContent();
  const textContent = await page.getByRole('paragraph').textContent();
  const imageSrc = await page.getByRole('img').getAttribute('src');

  // Expect
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc).toContain('https://cataas.com');
});
