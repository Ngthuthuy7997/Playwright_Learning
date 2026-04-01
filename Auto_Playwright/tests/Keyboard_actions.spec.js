const { test, expect } = require('@playwright/test');

test('Keyboard action', async ({ page }) => {
    await page.goto("https://gotranscipt.com/text-compare");

    await page.fill("#userName", "thuy");

    //CTRL a
    await page.keyboard.press('Control+A');

    //Ctrl C
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl V
    await page.keyboard.press('Control+V');
})