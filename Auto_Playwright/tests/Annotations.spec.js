const { test, expect } = require('@playwright/test');
/*
//only
test.only('Test1', async ({ page }) => {
    console.log('this is test 1..');
})
*/

/*
//skip
test.skip('Test2', async ({ page }) => {
    console.log('this is test 2..');
})
*/

/*
test('Test3', async ({ page, browserName }) => {
    console.log('this is test 3..');
    if (browserName === 'chromium') {
        test.skip()
    }
})
*/

/*
// Fixme đánh dấu là test đang lỗi nên tạm thời bỏ qua
test('Test4', async ({ page }) => {
    test.fixme();
    console.log('this is test 4');

})
    */

/*
//Fail
test('Test5', async ({ page }) => {
    test.fail();
    console.log('this is test 5');
    expect(1).toBe(1);
})
*/

/*
test('Test6', async ({ page, browserName }) => {
    console.log('this is test 6')
    if(browserName=='firefox')
    {
        test.fail();
    }
})
*/

/*
//slow() - đặt timeout trong cấu hình nếu dưới số giây set sẵn thì pass
test('Test7', async ({ page }) => {
    test.slow(); //làm chậm đi gấp 3 lần so tới timeout đã set sẵn trong cấu hình
    console.log('this is test 7')
    await page.goto('https://www.demoblaze.com/index.html');
})
*/