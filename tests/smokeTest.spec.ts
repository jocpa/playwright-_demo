import { test, expect } from '@playwright/test';

const url = 'http://zero.webappsecurity.com'

test('Should go to main Site', async ({ page }) => {

  //Ir a la pagina Web
    await page.goto(url);

    await page.locator("id=signin_button").click()
    await page.locator("id=user_login").fill("username")
    await page.locator("id=user_password").fill("password")
   // await page.getByRole('button', { name: 'Sign in' }).click()

    //username password

    await page.pause()
  
  });