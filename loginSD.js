const { Given, When, Then } = require("@wdio/cucumber-framework");
const homepage = require("../Pages/homepage_class");
const signIn = require("../Pages/sign_in_class");
const signInOrAccount = require("../Pages/singInOrCreateAccount_class");


const Homepage = new homepage();
const SignIn = new signIn();
const SignInorAccount = new signInOrAccount();

Given(/^I am on hotels landing page$/, async function () {
    await Homepage.launchHotels();
})

Then(/^I click on "Sign in" link$/, async function () { 
    await Homepage.clickSignIn();
})

Then(/^I click on Sign in button$/, async function () {
    await SignIn.clickSignInbtn();
})

// Then(/^I enter "(.+)" as invalid email address$/, async function () {
//     await SignInorAccount.enterInvalidEmail("123");
// })
When(/^I enter invalid email address$/, async function(){
     await SignInorAccount.setEmailValue('123')
    await browser.pause(2000)
 });

Then(/^I click continue button on the SignIn page$/, async function () {
    await SignInorAccount.clickContinueBtn();
})

Then(/^I verify error message is displayed$/, async function () {
   const errorMessageDisplayed = await SignInorAccount.verifyErrorMessageIsDisplayed()
    expect(errorMessageDisplayed,'Error message is not dispayed').to.be.true;
})
