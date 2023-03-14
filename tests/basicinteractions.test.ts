import {test,expect } from "@playwright/test";

test("Interactions with input",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const inputele = page.locator("//input[@id='user-message']");
    await inputele.scrollIntoViewIfNeeded();
    console.log('Place holder value is ==>'+await inputele.getAttribute("placeholder"));

    expect (inputele).toHaveAttribute("placeholder","Please enter your Message");
    console.log("Before "+ await inputele.inputValue())
    await inputele.type("hai sandy...");
    console.log("After "+await inputele.inputValue())

})

test("Sum",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    let val1 = 20;
    let val2 = 30;
    
    const input1 = page.locator("#sum1")
    await input1.type(""+ val1);
    const input2 = page.locator("#sum2")
    await input2.type(""+ val2);

    await page.waitForTimeout(2000);
    val1=25;
    let expval = val1+val2;
    await input1.fill(""+val1) 

    await page.click("'Get values'");

    await page.waitForTimeout(2000);

    const finalRes = page.locator("#addmessage");
    console.log(await finalRes.textContent())
    expect (finalRes).toHaveText(""+expval);

   




})


test.only("checkbox", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

    const checkBoxElement = page.locator("//input[@id='isAgeSelected']");
    await checkBoxElement.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2500);
    expect (checkBoxElement).not.toBeChecked()

    await checkBoxElement.check();
    await page.waitForTimeout(2500);
    expect (checkBoxElement).toBeChecked();

    const successmesg = await page.locator("//div[contains(text(),'Success - Check box is checked')]").textContent();
    console.log("message"+ successmesg);
    let boo = await successmesg?.includes("checked");
    expect(boo).toBeTruthy();
    expect (successmesg).toEqual('Success - Check box is checked');
    expect (successmesg?.includes('Success')).toBeTruthy();
    

})