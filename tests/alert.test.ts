import {expect, test} from "@playwright/test";

test("handling simple alerts" , async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog" , async(alert)=>{
        const mesg = alert.message()
        console.log(mesg)
        alert.accept()
    })

    await page.locator("(//button[contains(text(),'Click Me')])[1]").click();

})

test("handling confirm alerts" , async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog" , async(alert)=>{
        const mesg = alert.message()
        console.log(mesg)
        alert.dismiss()
    })

    await page.locator("(//button[contains(text(),'Click Me')])[2]").click();
    expect (page.locator("//p[contains(text(),'You pressed Cancel!')]")).toContainText("Cancel")

})

test("handling prompt alerts" , async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog" , async(alert)=>{
        const mesg = alert.message();
        console.log(mesg)
        alert.accept("Sandy")
    })

    await page.locator("(//button[contains(text(),'Click Me')])[3]").click();
    expect (page.locator("//p[@id='prompt-demo']")).toContainText("'Sandy'")

})

test.only("handling mpdal alerts" , async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    
    await page.locator("//button[text()='Launch Modal' and @data-target='#myModal']").click();
    await page.locator("(//button[contains(text(),'Save Changes')])[1]").click();

    //expect (page.locator("//p[@id='prompt-demo']")).toContainText("'Sandy'")

})