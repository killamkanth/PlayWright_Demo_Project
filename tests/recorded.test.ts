import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.hover("//a[@role='button']//span[contains(text(),'My account')]")

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Password').click({
    modifiers: ['Control']
  });
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('kanth sa n');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Success: Your account has been successfully updated.').click();

  await page.hover("//a[@role='button']//span[contains(text(),'My account')]")

  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});