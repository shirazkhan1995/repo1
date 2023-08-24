import {test, expect, chromium} from '@playwright/test' ;
import MailSlurp from "mailslurp-client";

test('ChangeCoursePosition',async () => {
  const apiKey = "bff58af656ebc85c79f2b29d055d2b04f6d4fc1205be274086c21c0c81303a5e";
  expect(apiKey).toBeDefined();
  
  //Browser Launch
  const browser = await chromium.launch();
  const context = await browser.newContext();

  //Otter Login page and Request OTP 
  const otterDashboard = await context.newPage();
  await otterDashboard.goto('https://contra-dev.com/otter/login');
  await otterDashboard.getByLabel('Email*').fill('f33c3534-4483-487d-8b8f-05703df0d909@mailslurp.com');
  await otterDashboard.getByLabel('Password*').click();
  await otterDashboard.getByLabel('Password*').fill('123456');
  await otterDashboard.getByRole('button', { name: 'Login' }).click();
  await otterDashboard.waitForTimeout(2000);

  //Fetching OTP
  const mailslurp = new MailSlurp({ apiKey })
  const email = await mailslurp.waitForLatestEmail("f33c3534-4483-487d-8b8f-05703df0d909")
  const otpRegex = /\b\d{6}\b/g;
  const otpMatches = email.body.match(otpRegex);
  const finalOTPMatch = otpMatches[2];

  //Change Course Position to first
  await otterDashboard.locator("//input[@class='otp_input_field']").fill(finalOTPMatch);
  await otterDashboard.locator("//input[@class='otp_submit_button']").click();
  await expect(otterDashboard.locator("//h2[contains(text(),'Dashboard')]")).toBeVisible();
  await otterDashboard.click(':text-is("Courses")');
  await expect(otterDashboard.locator("//h2[contains(text(), 'Courses')]")).toBeVisible();
  const setCourseName = await otterDashboard.locator(':text-is("Yoel - Test")').textContent(); 
  console.log(setCourseName);
  await otterDashboard.click(':text-is("Yoel - Test")');
  await otterDashboard.click(':text-is("Edit Course")');
  await otterDashboard.locator("//input[@id='course_position']").fill('1');
  await otterDashboard.locator("//input[@type='submit']").click();

  //Verify course position on Kontra LMS
  const kontraPage = await context.newPage();
  await kontraPage.goto('https://testaug4.contra-dev.com/');
  await kontraPage.getByPlaceholder('E-Mail').click();
  await kontraPage.getByPlaceholder('E-Mail').fill('test736783267@yopmail.com');
  await kontraPage.getByPlaceholder('Password').click();
  await kontraPage.getByPlaceholder('Password').fill('Tftus@123');
  await kontraPage.getByRole('button', { name: 'Log In' }).click();
  const position1CourseName = await kontraPage.locator("//h2[contains(text(),'OWASP Top 10 for Web')]/../following-sibling::ul[1]/li[2]/div[2]/div[2]").textContent();
  console.log(position1CourseName);
  await expect(position1CourseName).toContain(setCourseName);
});