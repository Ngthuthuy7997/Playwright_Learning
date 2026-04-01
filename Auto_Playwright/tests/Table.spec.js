const { test, expect } = require('@playwright/test');

test('table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    /*
    const table = page.locator("productTable");

    //total number of rows & columns
    const columns = table.locator('thead tr th');
    console.log('number of columns:', await columns.count());
    expect(await rows.count()).toBe(5);

    */
    /*
     //2. selct check box for prod 4
     const machedRow = rows.filter({
         has: page.locator('td'),
         hasText: 'Product 4'
     })
     await machedRow.locator('input').check();
     */
    /*
     //3. Select multiple products bu re-usable function
     await selectProduct(rows, page, 'Product 1');
     await selectProduct(rows, page, 'Product 3');
     await selectProduct(rows, page, 'Product 5');
     */

    //4. print all product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for (let j = 0; j < tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());


        }
    }

    //5 read data from all the pages in the table
    const pages = page.locator('.pagination li a');
    console.log('number of page in the table:', await pages.count());
    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }
        }
    }

})
async function selectProduct(rows, page, name) {
    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await machedRow.locator('input').check();
}