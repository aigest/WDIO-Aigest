// 
const { Then } = require("@wdio/cucumber-framework");

const homepage = require("../Pages/homepage_class");
const supportPage = require("../Pages/supportPage");

const Homepage = new homepage();
const SupportPage = new supportPage();
      


Then(/^I click on “Support”$/, async function () { 
    await Homepage.clickSupport();
})

Then(/^I click "Site Feedback”$/, async function () { 
    await SupportPage.clickSiteFeedback();
})

Then(/^I click Submit button$/, async function () { 
    await SupportPage.clicksupportSubBtn();
})

Then(/^I Verify error message is displayed$/, async function () { 
    await SupportPage.verifyErrorMessIsDisplayed();
})

Then(/^I Verify red-box is displayed around OVERALL-section$/, async function () { 
    await SupportPage.verifyRedBoxIsDisplayed();
})





// Then(^/I click (.+) is displayed$/, async function (clickDisplayed) {
//     switch (clickDisplayed) {

//         case 'on “Support”':
//             await clickOnSupport.onSupport();
//             break;
// Then(^/I verify (.+) is displayed$/, async function (verifyDisplayed) {
//     switch (verifyDisplayed) {
//         case 'error message':
//             await supportPage.errorMessage();
//             break;        
