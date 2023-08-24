import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testaug3scorm.application.security/');
  await page.goto('https://testaug3scorm.application.security/user/profile');
  await page.goto('https://testaug3scorm.application.security/auth/log-in?redirect=%2Fuser%2Fprofile');
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('test736783267@yopmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Tftus@123');
  await page.getByRole('button', { name: 'Log In' }).click();

  const javaGenerateBtn = page.locator("(//button[@type='button'])[7]");
  await javaGenerateBtn.click();
  await page.locator("(//p[@class='Button--IsSecondary m1-b m1-top scorm_version'])[1]").click();
  await page.locator(`//input[@placeholder="Enter the recipient's email address"]`).fill('test736783267@yopmail.com');
  await page.locator("//button[@class='Button send_email_button']").click();

  await page.waitForTimeout(5000);

});