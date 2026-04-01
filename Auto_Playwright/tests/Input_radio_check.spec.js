const { test, expect } = require('@playwright/test');

test('Handle inputbox', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");


    //inputbox-firstname
    await expect(page.locator("#firstName")).toBeVisible();
    await expect(page.locator("#firstName")).toBeEmpty();
    await expect(page.locator("#firstName")).toBeEditable();
    await expect(page.locator("#firstName")).toBeEnabled();

    await page.locator("#firstName").fill("Na");
    //await page.fill("#userName","Na");

    //Radio button
    // await page.locator("#gender-radio-1").check();
    await page.check("#gender-radio-1");
    await expect(page.locator("#gender-radio-1")).toBeChecked();

    await expect(page.locator("#gender-radio-1")).isChecked().toBeTruthy();//male
    await expect(page.locator("#gender-radio-2")).isChecked().toBeFalsy(); //female

    //Checkbox
    await page.locator("#hobbies-checkbox-1").check();
    // await page.check("#hobbies-checkbox-1");

    expect(page.locator("#hobbies-checkbox-1")).toBeChecked();
    expect(page.locator("#hobbies-checkbox-1")).isChecked().toBeTruthy();
    expect(page.locator("#hobbies-checkbox-2")).isChecked().toBeFalsy();

    //Multiple checkbox
    const Checkboxlocators = [
        "#hobbies-checkbox-1",
        "#hobbies-checkbox-2",
        "#hobbies-checkbox-3"
    ];
    for (const locator of Checkboxlocators) { //select mutilple 
        await page.locator(locator).check();
    }
    for (const locator of Checkboxlocators) { //unselect mutilple
        if (page.locator(locator).isChecked())

            await page.locator(locator).uncheck();
    }

})