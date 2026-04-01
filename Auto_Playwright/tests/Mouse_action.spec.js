const { test, expect } = require('@playwright/test');

test('Mouse hover', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const desktops = page.locator('//a[normalize-space()="Desktops"');
    const mac = page.locator('//a[normalize-space()="Mac (1)"');

    //mouse hover
    await desktops.hover();
    await mac.hover();
});

test('Mouse right click', async ({ page }) => {
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = page.locator('//span[normalize-space()="right click me"]');

    //right click action
    await button.click({ button: 'right' });
});

test('Mouse double click', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const btnCopy = page.locator('//button[normalize-space()="Copy text"]');

    //double click
    await btnCopy.dblclick();
    const f2 = page.locator("#field2");
    await expect(f2).toHaveValue('Hello World!');

})