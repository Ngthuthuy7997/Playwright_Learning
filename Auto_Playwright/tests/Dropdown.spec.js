const { test, expect } = require('@playwright/test');

test('Handle dropdown', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    //Multiple
    await page.locator("#state").selectOption({ lable: 'NCR' }); //lable/visible.text
    await page.locator("#state").selectOption("NCR");
    await page.locator("#state").selectOption({ value: 'NCR' }); //by using value
    await page.locator("#state").selectOption({ index: 1 }); //by using index
    await page.selectOption("#state", "NCR"); //by text

    //Assertion
    //1. check number of options in dropdown
    // const options = page.locator("#state option");
    // await expect(options).toHaveCount(4);

    //2.Check number of options in dropdown - Appraoch2
    // const options = page.locator.$$("#state option");
    // console.log("Number of options:", options.length);
    // await expect(options.length()).toBe(4);

    //3.Check presence of value in the dropdown - Appraoch1
    // const content = page.locator("#state").textContent();
    // await expect(content.includes("NCR")).toBeTruthy();

    //4. Check presence of value in the dropdown - Appraoch2 - using looping
    const options = page.$$("#state option");
    let status = false;
    for (const option of options) {
        // console.log(await option.textContent())
        let value = await option.textContent();
        if (value.includes("NCR")) {
            await page.selectOption("#state", value);
            break;
        }
    }

});

test('Handle multiple dropdown', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    //select mutilple options from multi elect dropdown
    await page.selectOption("#state", ["NCR", "Haryana", "Rajasthan"]);


    //Asertions
    //1.Check number ò options in dropdown
    // const options = page.locator("#state option");
    // await expect(options).toHaveCount(4);

    //2.Check number ò options in dropdown using Js array
    // const options = page.locator("#state option");
    // console.log("number of options: ", options.length);
    // await expect(options.length).toBe(5);


    //3.check presence of value in the dropdown
    const content = page.locator("#state").textContent();
    await expect(content.includes("NCR")).toBeTruthy();



})