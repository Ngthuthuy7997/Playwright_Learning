const { test, expect } = require('@playwright/test');

test('AuttosuggestDropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click('//button[normalize-space()="Alert"');
    await page.waitForTimeout(5000);

});

test('Confirm dialog-alert with ok and cancel', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    await page.click('//button[normalize-space()="Alert"');
});

test('Prompt dialog ', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept(); //close by using ok button
    })
    await page.click('//button[normalize-space()="Confirm Box"]');
    await expect(page.locator('//p[@id="demo"')).toHaveText('You pressed OK!');


});