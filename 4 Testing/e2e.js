const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100,
        args: ["--window-size=1600,1080"],
    });

    const page = await browser.newPage();

    await page.goto("https://namastedev.com");

    console.log("Webpage Loaded");

    await page.setViewport({ width: 1600, height: 1080 });

    const coursesPageLink = ".menu > li:nth-child(3) > a";

    await page.waitForSelector(coursesPageLink);

    await page.click(coursesPageLink);

    console.log("Courses Page Loaded")

    const enrollButton = ".bg-success-btn";

    await page.waitForSelector(enrollButton);

    await page.click(enrollButton);

    console.log("Namaste Node page loaded");

    await browser.close();

})();

// IIFE
