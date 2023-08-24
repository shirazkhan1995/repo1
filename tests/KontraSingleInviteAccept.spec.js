import { test, expect, chromium } from '@playwright/test';


test('Kontra Single Invite Accept', async ()=>{
    test.slow();
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const kontraPage = await context.newPage();
    await kontraPage.goto('https://h_test.application.security/');

    const yopmailPage = await context.newPage();
    await yopmailPage.goto('https:yopmail.com/');

    await kontraPage.getByPlaceholder('E-Mail').click();
    await kontraPage.getByPlaceholder('E-Mail').fill('test736783267@yopmail.com');
    await kontraPage.getByPlaceholder('Password').click();
    await kontraPage.getByPlaceholder('Password').fill('1234567890');
    await kontraPage.getByRole('button', { name: 'Log In' }).click();
    await kontraPage.getByRole('link', { name: 'Admin' }).click();
    await kontraPage.getByRole('link', { name: 'User Management' }).click();
    await kontraPage.getByRole('button', { name: 'Invite user' }).click();
    await kontraPage.getByText('Single Invite').click();
    await kontraPage.getByPlaceholder('Email address').click();
    const fillEmail = `test${Math.random()}@yopmail.com`;
    console.log(fillEmail);
    await kontraPage.getByPlaceholder('Email address').fill(fillEmail);
    await kontraPage.locator('#portal-root form div').filter({ hasText: 'Role useradmin Team team a' }).getByRole('img').nth(1).click();
    await kontraPage.locator('#portal-root').getByText('admin', { exact: true }).click();
    await kontraPage.getByPlaceholder('Subject').click();
    await kontraPage.getByPlaceholder('Subject').fill('Invite User');
    await kontraPage.getByText('Email Templates').click();
    await kontraPage.getByText('Kontra Template').click();
    await kontraPage.locator('#portal-root').getByRole('button', { name: 'Invite user' }).click();
    await kontraPage.getByRole('link', { name: 'Pending Invites', exact: true }).click();
    await kontraPage.getByRole('img', { name: 'Resend invite' }).first().click();

    await yopmailPage.getByPlaceholder('Enter your inbox here').click();
    await yopmailPage.getByPlaceholder('Enter your inbox here').fill(fillEmail);
    await yopmailPage.getByPlaceholder('Enter your inbox here').press('Enter');
    await yopmailPage.waitForTimeout(3000);
    await yopmailPage.getByRole('button', { name: '' }).click();
    const pagePromise = context.waitForEvent('page');
    await yopmailPage.getByTitle('Accept Invite').click();
    // await yopmailPage.frameLocator('iframe[name="ifmail"]').getByRole('link', { name: 'https://h_test.application.security/users/invitation/accept' }).click();
    const newPage = await pagePromise;

    await expect(newPage.getByPlaceholder('Password confirmation')).toBeVisible(); 

})