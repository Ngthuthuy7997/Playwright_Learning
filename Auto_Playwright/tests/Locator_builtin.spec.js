const { test, expect } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // page.getByAltText - to locate an element, usually image, by its text alternative
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByplaceholder() - to locate an input by placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { tyoe: 'submit' }).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"').textContent()
    await expect(page.getByText(name)).toBeVisible();

})