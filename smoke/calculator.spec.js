import { test, expect } from '@playwright/test';

test('live calculator updates its breakdown and total', async ({ page }) => {
  const response = await page.goto('./');
  expect(response.ok()).toBeTruthy();
  await expect(page.getByRole('heading', { name: 'Discount calculator' })).toBeVisible();

  // Use a different result first so static default text cannot pass the test.
  await page.getByLabel('Items subtotal (BDT)').fill('2000');
  await page.getByLabel('Discount (%)').fill('10');
  await page.getByLabel('Delivery fee (BDT)').fill('100');
  await page.getByRole('button', { name: 'Calculate total' }).click();
  await expect(page.locator('#total')).toHaveText('Total: BDT 1900.00');
  await expect(page.locator('#discount-amount')).toHaveText('− BDT 200.00');

  await page.getByLabel('Items subtotal (BDT)').fill('1000');
  await page.getByRole('button', { name: 'Calculate total' }).click();
  await expect(page.locator('#items-amount')).toHaveText('BDT 1000.00');
  await expect(page.locator('#discount-amount')).toHaveText('− BDT 100.00');
  await expect(page.locator('#delivery-amount')).toHaveText('+ BDT 100.00');
  await expect(page.locator('#total')).toHaveText('Total: BDT 1000.00');
});
