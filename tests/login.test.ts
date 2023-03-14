import test, { chromium } from "@playwright/test";

test("loginTest.ts",async()=>{
    const browser =await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await browser.newPage();

    await page.goto("https://flipkart.com")
})