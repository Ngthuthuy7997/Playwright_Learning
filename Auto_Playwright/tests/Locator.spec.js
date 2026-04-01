const { test, expect } = require('@playwright/test');

test('Locator', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    //Click on login button 
    await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide usname 
    await page.locator('#loginusername', 'pavanol');
    await page.fill('#loginusername', 'pavanol');

    //Provider password
    await page.fill('input[id="loginpassword"]', 'pavanol');

    //Click on button login 
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
    const logoutlink = page.locator('[id="logout2"]');
    await expect(logoutlink).toBeVisible()
    await page.close();
}) 