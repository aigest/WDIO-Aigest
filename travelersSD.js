const { Given, When, Then } = require("@wdio/cucumber-framework");
const homepage = require("../Pages/homepage_class");
const { expect } = require("chai");
const travelers = require("../Pages/travelers");

//Verify Children-age dropdown are 2
//Verify Plus-button is enabled
//Verify minus-button is enabled
//Select “Children” as 6
//Verify Children-age dropdown are 6
//Verify Plus button is disabled
//Verify minus-button is enabled
//Select “Children” as 5
const Homepage = new homepage();
const Travelers = new travelers();


When(/^click on Travelers$/, async function(){
    await Homepage.clickTravelers();
})

When(/^select “Children” as 2$/, async function(){
    await Travelers.countChildrenTwo();
})

Then(/^verify Children-age dropdown are 2$/, async function(){
    const dropdowntwo = await Travelers.areDropdownsTwo();
    expect(dropdowntwo, 'dropdowns are not two').to.be.equal(2);
})

When(/^verify Plus-button is enabled$/, async function(){
    const plusBtnEnabled = await Travelers.isPlusBtnEnabled();
    expect(plusBtnEnabled, "Plus button is not enabled").to.be.true;
})

When(/^verify minus-button is enabled$/, async function(){
    const minusBtnEnabled = await Travelers.isMinusBtnEnabled();
    expect(minusBtnEnabled, "Plus button is not enabled").to.be.true;
})

When(/^select “Children” as 6$/, async function(){
    await Travelers.countChildrenSix();
})

Then(/^verify Children-age dropdown are 6$/, async function(){
    const fieldDropdown = await Travelers.areDropdownsSix();
    expect(fieldDropdown, "dropdowns are not six").to.be.equal(6);
})

Then(/^verify Plus button is disabled$/, async function(){
    const plusButtonDisabled = await Travelers.isplusBtnDisabled();
    expect(plusButtonDisabled, "Plus button is enabled").to.be.false;
})

Then(/^verify minus-button is enabled$/, async function(){
    const plusBtnEnabled = await Travelers.isMinusBtnEnabled();
    expect(plusBtnEnabled, "Plus button is not enabled").to.be.true;
})

When(/^select “Children” as 5$/, async function(){
    await Travelers.selectChildrenFive();
})

Then(/^verify Children-age dropdown are 5$/, async function(){
    const dropdownsFive = await Travelers.areDropdownsfive();
    expect(dropdownsFive, "dropdowns are not five").to.be.equal(5);
})

Then(/^verify Plus button is enabled$/, async function(){
    const plusBtnEnabled = await Travelers.isPlusEnabled();
    expect(plusBtnEnabled,"Plus button is not enabled").to.be.true;
})

Then(/^verify minus-button is enabled$/, async function(){
    const minusBtnEnabled = awaitTravelers.isMinusBtnEnabled();
    expect(minusBtnEnabled,"Plus button is enabled").to.be.true;
})

When(/^select “Children” as 0$/, async function(){
    await Travelers.countChildrenZero();
})

Then(/^verify Children-age dropdown is NOT displayed$/, async function(){
    const childFieldDisplayed = await Travelers.isChildrenDropdownDisplayed();
    expect(childFieldDisplayed,"Child field is displayed").to.be.false;
})

Then(/^I verify Plus button is enabled$/, async function(){
    const buttonEnabled = await Travelers.isPlusBtnEnabled();
    expect(buttonEnabled,"Plus button is not enabled").to.be.true;
})

Then(/^I verify minus-button is disabled$/, async function(){
    const minusBtnEnabled = awaitTravelers.isMinusBtnEnabled();
    expect(minusBtnEnabled,"Minus button is enabled").to.be.false;
})