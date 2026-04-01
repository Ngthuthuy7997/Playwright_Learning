const { test, expect } = require('@playwright/test');

test('Inner iframe ', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const fr3= page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});

    fr3.fill('name="mytext3"','hello');

    //nested frame
    const childFr=frame3.childFrames();
    childFr[0].locator("//*[@id='i5']/div[3]/div").check();


})