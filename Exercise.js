const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://contractorsinsurancereview.com/ExampleForm/");
    await page.type('#name','Shirel Buskila')
    await page.type('#email','shirelbuskila17@gmail.com')
    await page.type('#phone','0546750550')
    await page.type('#company','Jones')
    const selectElem = await page.$('select[name="number_of_employees"]'); //bonus
    await selectElem.type('51-500'); //bonus
    await page.screenshot({ path: 'screenshot.png' });
    await Promise.all([
        page.waitForNavigation(),
        page.click('[class="primary button"]')
    ]);
    console.log("Thank you page");
    await browser.close();
})();
