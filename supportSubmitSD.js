const { Then } = require("@wdio/cucumber-framework");

const supportPage = require("../Pages/supportPage");

const SupportPage = new supportPage();


Then(/^I select any OVERALL rating$/, async function () { 
    await SupportPage.overallRating();
})

Then(/^I select any CONTENT rating$/, async function () { 
    await SupportPage.contentRating();
})

Then(/^I select any DESIGN rating$/, async function () { 
    await SupportPage.desingRating();
})

Then(/^I select any EASE OF USE rating$/, async function () { 
    await SupportPage.easyOfUseRating();
})

// Then(/^I click on Submit button$/, async function () { 
//     await SupportPage.x();
// })

Then(/^I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () { 
    await SupportPage.verifyThnxFeedback();
})