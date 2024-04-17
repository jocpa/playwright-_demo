import { test, expect } from '@playwright/test';

test('Should fill the form', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByPlaceholder('First Name').fill('Miles');
  await page.getByPlaceholder('Last Name').fill('Morales');
  await page.getByPlaceholder('name@example.com').fill('milesspiderman@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('5569035345');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
  await page.getByRole('combobox').nth(1).selectOption('2002');
  await page.getByLabel('Choose Saturday, January 12th,').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.getByText('Sports').click();
  await page.getByPlaceholder('Current Address').fill('El bronx');
  await page.locator('#state svg').click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
  await page.getByText('Lucknow', { exact: true }).click();

  await page.getByRole('button', { name: 'Submit' }).click();

  //Asert
  await expect(page.locator("id=example-modal-sizes-title-lg")).toHaveText('Thanks for submitting the form');

  //Pause
  await page.pause()

});