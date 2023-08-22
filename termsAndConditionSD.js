const { Then } = require("@wdio/cucumber-framework");
const signInOrAccount = require("../Pages/singInOrCreateAccount_class");
const termsAndCond = require("../Pages/termsAndCondition");


const SignInorAccount = new signInOrAccount();
const TermsAndCond = new termsAndCond();

Then(/^I click “One Key Rewards Terms & Conditions” link$/, async function(){
    await SignInorAccount.oneKeyTerms();
    await browser.pause(2000);
})

Then(/^I verify “One Key Terms and Conditions” heading is displayed$/, async function () {
    const msgDisplayed = await TermsAndCond.verifyMessageIsDisplayed()
    expect(msgDisplayed,'One Key Terms and Conditions').to.be.true;
})

Then(/^I verify “Effective from“ date format  is in correct format (expected format: MMMM d, yyyy)$/, async function(){
    const parsedDate = await termsAndCond.verifyDateOneKeyFormat();
})

Then(/^I click “Privacy Statement” link$/, async function(){
    await SignInorAccount.privacyStatement();
    await browser.pause(2000);
})

Then(/^I verify “Privacy Statement” heading is displayed$/, async function () {
    const privacyStatementDisplayed = await TermsAndCond.verifyMessageIsDisplayed()
    expect(msgDisplayed,'One Key Terms and Conditions').to.be.true;
})

Then(/^I verify “Last Updated“ date format (expected format: MMMM d, yyyy)$/, async function(){
    const dateFormat = await termsAndCond.verifyLastUpdatedDateFormat();
})