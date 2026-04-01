const { test, expect } = require('@playwright/test');

let page;
test.beforeEach(async ({ browser }) => { //chạy 1 lần trước mỗi test
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
}
);
/*
test.beforeAll(async ({ browser }) => { //chạy 1 lần trước tất cả các test
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
}
);*/

test.afterEach(async () => {
    //Logout
    await page.locator('#logout2').click();
})
test('Home page test', async () => {
    //homepage
    const products = page.locator('#tbodyid .col-lg-4');
    expect(products).toHaveCount(9);
});
test('add product to cart test', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
})