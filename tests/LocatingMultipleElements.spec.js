import{test, expect} from '@playwright/test';

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