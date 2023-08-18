// const { Given, When, Then } = require("@wdio/cucumber-framework");
// //Launch hotels website
// //Click on “Sign in” link
// //Click on Sign in button
// //Enter invalid email address
// //Click on Continue button
// //Verify error message is displayed. (Enter a valid email)

// const { expect } = require("chai");

// //Launch hotels website
// Given(/^Launch hotels website$/, async function(){
//     await browser.url('https://www.hotels.com/')
// });
// //Click on “Sign in” link
// Then(/^I click on “Sign in” link$/, async function(){
//     const signInLinkLocator = await $('//type="button"]')
//     await signInLinkLocator.click()
// });
// //Click on Sign in button
// Then(/^I click on Sign in button$/, async function(){
//     const signInButtonLocator = await $('//*[@data-stid="link-header-account-signin"]')
//     await signInButtonLocator.click()
// });
// //Enter invalid email address
// Then(/^Enter invalid email address$/, async function(){
//     const loginUserName = await $('#email');
//     await loginUserName.setValue('jygyv@trtrc.com')
// });
// //Click on Continue button
// Then(/^Click on Continue button$/, async function(){
//     const continueButton = await $('//#loginFormSubmitButton')
//     await continueButton.click()
// });
// //Verify error message is displayed. (Enter a valid email)
// Then(/^Verify error message is displayed. (Enter a valid email)$/, async function(){
//     const errorMessage = await $('//div[text()="Enter a valid email."]');
//     let errorDisplayed = await errorMessage.isDisplayed();
//     expect(errorDisplayed, 'Enter a valid email').to.be.true;
// });






