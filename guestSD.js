const { Then } = require("@wdio/cucumber-framework");
const homepage = require("../Pages/homepage_class");


const Homepage = new homepage();

Then(/^I click on Travelers$/, async function () { 
    await Homepage.clickTravelers();
})

Then(/^I select “Adults as 6$/, async function () { 
    await Homepage.selectAdultAsSix();
})

Then(/^I select “Children” as 3$/, async function () { 
    await Homepage.selectChildrenAsThree();
})
Then(/^I select first child age 4$/, async function () { 
    await Homepage.selectFirstChildFour();
})

Then(/^I select second child age Under 1$/, async function () { 
    await Homepage.selectSecondChildUnderOne();
})

Then(/^I select third child age: 7$/, async function () { 
    await Homepage.thirdChildAgeSeven();
}) 

Then(/^I click Done$/, async function () { 
    await Homepage.clickDoneButton();
})

Then(/^I verify total number of Travelers$/, async function () { 
    await Homepage.totalNumberOfTravelers();
})
