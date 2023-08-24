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
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();

  //Assertions

  const activityLogsH2 = await page.locator("//div[@class='AdminSection__titleDiv']/h2[contains(text(),'SCORM')]");
  await expect(activityLogsH2).toBeVisible();
});