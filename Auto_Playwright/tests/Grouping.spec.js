import { test, expect } from '@playwright/test';


test.describe('GR1', () => {
    test('Test 1', async ({ page }) => {
        console.log('this is test 1..');
    })
    test('Test 2', async ({ page }) => {
        console.log('this is test 2..');
    })
})
test.describe('GR2', () => {
    test('Test 3', async ({ page }) => {
        console.log('this is test 3..');
    })
    test('Test 4', async ({ page }) => {
        console.log('this is test 4..');
    })
})
