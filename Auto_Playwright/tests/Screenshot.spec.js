import { test, expect } from '@playwright/test';

test('page screenshot ', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.screenshot({ path: 'tests/screenshots' + Date.now() + 'HomePage.png' });

});

test('full page screenshot ', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.screenshot({ path: 'tests/screenshots' + Date.now() + 'FullPage.png', fullPage: true });
});

test.only(' element screenshot ', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('#nava').screenshot({ path: 'tests/screenshots' + Date.now() + 'Element.png' });
});