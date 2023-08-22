const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment/moment");


const Homepage = new homepage();

Then(/^I click on Dates$/, async function(){
    await Homepage.dateField();
    await browser.pause(2000);
})

Then(/^Then I go to current month if not displayed$/, async function(){
    await Homepage.goToCurrentMonth();
    await browser.pause(2000);
})

Then(/^I verify For current month$/, async function(){
    const currentMonthDisplayed = await Homepage.goToCurrentMonth().isDisplayed();
    expect(currentMonthDisplayed,"Current month is not displayed").to.be.true;
})

Then(/^I verify past dates are disabled$/, async function(){
    const currentMontYear = moment().format('MMMM YYYY');
    const currentDate = moment().format('D');
    const disabledDates = await Homepage.disabledDatesCount(currentMontYear);
    expect(currentDate-1, 'Number of disabled dates are not as expected').to.be.equal(disabledDates);
})

Then(/^I verify back button on current month is disabled$/, async function(){
    const backBtnEnabled = await Homepage.verifyBackButton();
    expect(backBtnEnabled,'Back button is not enabled').to.be.false;
})