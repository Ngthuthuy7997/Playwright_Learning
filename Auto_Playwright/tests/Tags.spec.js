const { test, expect } = require('@playwright/test');


//chạy theo tag 
// npx playwright test tests/Tags.spec.js --project chromium --grep "@verifyTest"
// chạy tất cả ngoại trừ grep trong câu lệnh npx playwright test tests/Tags.spec.js --project chromium --grep-invert "@verifyTest" 
test('Test3@verifyTest', async ({ page }) => {
    console.log('this is test 3..');
})
test('Test 4@Test', async ({ page }) => {
    console.log('this is test 4..');
})
test('Test 5@verifyTest@Test', async ({ page }) => {
    console.log('this is test 5..');
})