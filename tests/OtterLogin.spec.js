import {test, expect, chromium} from '@playwright/test' ;
import MailSlurp from "mailslurp-client";

test('OtterLogin',async () => {
  const apiKey = "bff58af656ebc85c79f2b29d055d2b04f6d4fc1205be274086c21c0c81303a5e";
  expect(apiKey).toBeDefined();
  
  
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  await page1.goto('https://application.security/otter/login');
  await page1.getByLabel('Email*').fill('f33c3534-4483-487d-8b8f-05703df0d909@mailslurp.com');
  await page1.getByLabel('Password*').click();
  await page1.getByLabel('Password*').fill('123456');
  await page1.getByRole('button', { name: 'Login' }).click();
  await page1.waitForTimeout(2000);

  const mailslurp = new MailSlurp({ apiKey })
  const email = await mailslurp.waitForLatestEmail("f33c3534-4483-487d-8b8f-05703df0d909")
  const otpRegex = /\b\d{6}\b/g;
  const otpMatches = email.body.match(otpRegex);
  const finalOTPMatch = otpMatches[2];


  await page1.locator("//input[@class='otp_input_field']").fill(finalOTPMatch);
  await page1.locator("//input[@class='otp_submit_button']").click();
  await expect(page1.locator("//h2[contains(text(),'Dashboard')]")).toBeVisible();

  // ---------------------
  await context.close();
  await browser.close();
})