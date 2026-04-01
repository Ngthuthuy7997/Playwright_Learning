const { test, expect } = require('@playwright/test');

test('Single File', async ({ page }) => {
    await page.goto("https://www.foundit/in/");

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();

    await page.locator("#file-upload").setInputFiles('tests/uploadFiles/testfile.pdf');


    // mutilple files
    await page.locator("#file-upload").setInputFiles('tests/uploadFiles/testfile.pdf'),
        ('tests/uploadFiles/testfile2.pdf');

})