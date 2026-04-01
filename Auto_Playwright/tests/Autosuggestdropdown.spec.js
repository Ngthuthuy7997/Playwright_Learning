const { test, expect } = require('@playwright/test');

test('AuttosuggestDropdown', async ({ page }) => {

    await page.goto("https://www.redbus.in/");
    await page.locator("#src").fill("Delhi");
    await page.waitForSelector("//li[contain(@slass,'sc-iwsKbI')]/div/text[1]");

    const fromCityoptions = page.$$("//li[contain(@slass,'sc-iwsKbI')]/div/text[1]");
    for (let option of fromCityoptions) {
        const value = await option.textContent();
        //console.log(value);
        if (value.includes('Anand Vihar')) {
            await option.click();
            break;
        }
    }
})
