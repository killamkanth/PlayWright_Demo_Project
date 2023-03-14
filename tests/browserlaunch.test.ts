import test, { chromium } from "@playwright/test"

test('browserlaunch',async({page})=>{
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.hover("//a[@role='button']//span[contains(text(),'My account')]")
    //await page.locator('text=Login').click();
    await page.click("'Login'");
    console.log('executed')

    await page.fill("//input[@id='input-email']","koushik350@gmail.com");
    await page.fill("//input[@id='input-password']","Pass123$")
    await page.click("//input[@value='Login']")
    await page.waitForTimeout(5000);

    //code for new page
    //new page where cookies are carried out 
  //  const page1 = await context.newPage();
  //  page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

    await page.waitForTimeout(5000);

    //code for new browser
    //To launch a new browser where cookies aee not carried 
   // const newcontext = await browser.newContext();
    //const newpage = await newcontext.newPage();
   // newpage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

    await page.waitForTimeout(5000);

})