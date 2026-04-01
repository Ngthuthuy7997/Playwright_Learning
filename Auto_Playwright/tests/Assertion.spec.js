const { test, expect } = require('@playwright/test');

test('AssertionTest', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register");

    //1. expect(page).toHaveURL()
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //2.expect(page).toHaveTitle()
    await expect(page).toHaveTitle("nopCommerce demo store. Register");


    //3.expect(locator).toBeVisible()
    const logoElement = page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4. expect(locator).toBeEnabled()
    const searchStorebox = page.locator("#small-searchterms");
    await expect(searchStorebox).toBeEnabled();

    //5. expect(locator).toBeChecked();
    //radiobutton
    const maleRadioButton = page.locator("#gender-male");
    await expect(maleRadioButton).toBeChecked();

    //checkbox
    const newsletterCheckbox = page.locator("#Newletter");
    await expect(newsletterCheckbox).toBeChecked();

    //6.expect(locator).toHaveAttribute()
    const regButton = page.locator("#register-button");
    await expect(regButton).toHaveAttribute('type', 'submit');

    //7. expect(locator).toHaveText()
    await expect(page.locator(".page-title h1")).toHaveText("Register");

    //8.expect(locator).toContainText()
    const emailinput= page.locator("#Email");
    await emailinput.fill("test@demo.com");
    await expect(emailinput).toHaveValue("test@demo.com");
    
})