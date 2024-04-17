import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Pablo');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Arzu');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('jptomas38@gmail');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('55168049');
  await page.locator('#dateOfBirthInput').click();
  await page.getByLabel('Choose Monday, January 10th,').click();
  await page.getByText('Sports').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('San jose pinula');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.pause()
});