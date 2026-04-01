const { test, expect } = require('@playwright/test');

test('hanlde datepicker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.fill('#datepicker','16/11/2025');

    //date picker
    const year = "2025"
    const month = "November"
    const date = "16"

    await page.click("#datepicker");
    while (true) {
        const currentYear = page.locator('.ui-datepicker-year').textContent();
        const currentMonth = page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }
        await page.locator('[title="Next"]').click();
        // await page.locator('[title="Prev"]').click();

    }
    /*
        const dates = await page.$$("//a[@class='ui-state-default']");
        //date selection using loop
        for (const dt of dates) {
            if (await ft.textContent() == date) {
                await dt.click();
                break;
            }
        }*/

    //date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

})