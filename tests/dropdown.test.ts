import {expect, test} from "@playwright/test";

test("single dropdown" , async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{
       // label : "Saturday",
       // value : "Friday"
        index : 1
    })

    await page.locator("//p[contains(text(),'Day')]").scrollIntoViewIfNeeded();
    expect (page.locator("//p[contains(text(),'Day')]")).toContainText("Sunday");


})

test("multi select dropdown" , async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.locator("//select[@id='multi-select']").scrollIntoViewIfNeeded(); 
    await page.selectOption("//select[@id='multi-select']",[
        { label : "California"},
        { value : "Ohio"},
        { index : 7 }
    ])

})

test.only("jquery dropdown", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await page.click("//select[@id='country']/following-sibling::span");
    await page.waitForSelector("//ul[@id='select2-country-results']")
   // await selectCountry("India");
    await selectCountry("South Africa");

    await page.waitForTimeout(2000);
    await page.click("//select[@id='country']/following-sibling::span");
    await selectCountry("India");

    await page.waitForTimeout(2000);

    async function selectCountry(countryName) {
        await page.locator(`//li[text()="${countryName}"]`).click();
    }
})

