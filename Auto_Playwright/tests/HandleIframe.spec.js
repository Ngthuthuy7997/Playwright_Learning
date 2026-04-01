const { test, expect } = require('@playwright/test');

test('Handle iframe ', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frames
    const allfr=page.frames();
    console.log("Number of frames:", allfr.length);

    //appraoch 1 using name or url 
    //const var= page.frame('name'); // if name is present
    const fr1= page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    fr1.fill('name="mytext1"','hello');

    //appraoch2 using frame locator
    const inputbox= page.frameLocator("fame[src='frame_1.html'").locator("name='mytext1'");
    inputbox.fill("Hello");


})