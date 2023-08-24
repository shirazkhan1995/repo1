import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://h_test.application.security/');
  await page.goto('https://h_test.application.security/user/profile');
  await page.goto('https://h_test.application.security/auth/log-in?redirect=%2Fuser%2Fprofile');
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('test736783267@yopmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('1234567890');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'User Management' }).click();
  await page.getByRole('button', { name: 'Invite user' }).click();
  await page.getByText('Single Invite').click();
  await page.getByPlaceholder('Email address').click();
  const fillEmail = `test${Math.random()}@yopmail.com`;
  console.log(fillEmail);
  await page.getByPlaceholder('Email address').fill(fillEmail);
  await page.locator('#portal-root form div').filter({ hasText: 'Role useradmin Team team a' }).getByRole('img').nth(1).click();
  await page.locator('#portal-root').getByText('admin', { exact: true }).click();
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').fill('Invite User');
  await page.locator('#portal-root').getByRole('button', { name: 'Invite user' }).click();
});