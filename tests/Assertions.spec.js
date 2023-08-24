import {test, expect} from '@playwright/test';


test('AssertionsTest', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator("//a/img[@alt='nopCommerce demo store']")).toBeVisible();

    await expect(page.locator("//input[@id='small-searchterms']")).toBeEnabled();

    await expect(page.locator("//input[@id='gender-male']")).not.toBeChecked();

    const registerButton = page.locator("#register-button");

    await expect(registerButton).toHaveAttribute('type','submit');

    const wishlistBtn = page.locator("//div[@class='header-links']//a[contains(@href,'wish')]");

    await expect(wishlistBtn).toContainText('shlis');

    const emailInput = await page.locator('#Email');

    await emailInput.fill('test@demo.com');

    await expect(emailInput).toHaveValue('test@demo.com');

    const dayOptions = page.locator("//select[@name='DateOfBirthDay']/option");

    await expect(dayOptions).toHaveCount(32);
})