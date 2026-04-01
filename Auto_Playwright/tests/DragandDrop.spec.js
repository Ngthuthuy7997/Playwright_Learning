const { test, expect } = require('@playwright/test');

test('Drag and drop', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/drag-and-drop-demo/");

    const dr1=page.locator("//span[normalize-space()='Draggable 1']");
    const dr2=page.locator("#mydropzone");

    //Apraoch1
    /*
    await dr1.hover();
    await page.mouse.down();

    await dr2.hover();
    await page.mouse.up();

*/
    //Apraoch2
    await dr1.dragTo(dr2);

})