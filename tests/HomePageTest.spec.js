import{test, expect} from '@playwright/test';


test('Home Page', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log(`Page URL is: ${pageURL}`);
    
    await expect(page).toHaveURL(pageURL);

    await page.close();
})

test('Built-inLocators' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo =  page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')

    await page.getByRole('button', {type:'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();
})

test('LocateMultipleElements ', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const links = await page.$$('a');
    
    // for(const link of links) {
    //     const linkText = await link.textContent();
    // }

    const products = await page.$$('//a[@class="hrefch"]')
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})

test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    // await page.locator('id=login2').click();
    await page.click('id=login2')

    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername','pavanol')
    
    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutLink =  page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutLink).toBeVisible();

    const elements = await page.$$("(//div[@id='tbodyid'])[1]")

    console.log(elements);

    await page.close();
})

test('Home Page1', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log(`Page URL is: ${pageURL}`);
    
    await expect(page).toHaveURL(pageURL);

    await page.close();
})

test('Built-inLocators1' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo =  page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')

    await page.getByRole('button', {type:'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();
})

test('LocateMultipleElements1 ', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const links = await page.$$('a');
    
    // for(const link of links) {
    //     const linkText = await link.textContent();
    // }

    const products = await page.$$('//a[@class="hrefch"]')
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})

test('Locators1', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    // await page.locator('id=login2').click();
    await page.click('id=login2')

    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername','pavanol')
    
    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutLink =  page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutLink).toBeVisible();

    const elements = await page.$$("(//div[@id='tbodyid'])[1]")

    console.log(elements);

    await page.close();
})

test('Home Page2', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log(`Page URL is: ${pageURL}`);
    
    await expect(page).toHaveURL(pageURL);

    await page.close();
})

test('Built-inLocators2' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo =  page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')

    await page.getByRole('button', {type:'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();
})

test('LocateMultipleElements2 ', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const links = await page.$$('a');
    
    // for(const link of links) {
    //     const linkText = await link.textContent();
    // }

    const products = await page.$$('//a[@class="hrefch"]')
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})

test('Locators2', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    // await page.locator('id=login2').click();
    await page.click('id=login2')

    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername','pavanol')
    
    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutLink =  page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutLink).toBeVisible();

    const elements = await page.$$("(//div[@id='tbodyid'])[1]")

    console.log(elements);

    await page.close();
})

test('Home Page3', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log(`Page URL is: ${pageURL}`);
    
    await expect(page).toHaveURL(pageURL);

    await page.close();
})

test('Built-inLocators3' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo =  page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')

    await page.getByRole('button', {type:'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();
})

test('LocateMultipleElements3 ', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    const links = await page.$$('a');
    
    // for(const link of links) {
    //     const linkText = await link.textContent();
    // }

    const products = await page.$$('//a[@class="hrefch"]')
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})

test('Locators3', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    // await page.locator('id=login2').click();
    await page.click('id=login2')

    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername','pavanol')
    
    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutLink =  page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutLink).toBeVisible();

    const elements = await page.$$("(//div[@id='tbodyid'])[1]")

    console.log(elements);

    await page.close();
})