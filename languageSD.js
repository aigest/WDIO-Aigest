
const { When, Then } = require("@wdio/cucumber-framework");

const { expect } = require("chai");
const homepage = require("../Pages/homepage_class");
const languageField = require("../Pages/language2");




const Homepage = new homepage();
const LanguageField = new languageField();



When(/^I click on “English“ language$/, async function () {
    await Homepage.englishclickButton();
    })
    
When(/^I select “Español (Estados Unidos)” in Language dropdown$/, async function () {
    await Homepage.españolDropdown();
    })
    
When(/^I click on “Save“ button$/, async function () {
    await Homepage.saveButton();
    })

Then(/^I verify “Español” is displayed$/, async function () {
    const isLanguageGiven = await Homepage.isEspañolDisplayed();
    expect (isLanguageGiven,'español language is not displayed').to.be.true;
    })
        
Then(/^I click on “Español“ language$/, async function () {
    await LanguageField.clickEspañol();
    })

Then(/^I select “English (United States)” in Language dropdown$/, async function(){
    await LanguageField.englishSelected();
    })

Then(/^I click on “Guardar“ button$/, async function(){
    await LanguageField.guardarButton();
    })
          
Then(/^I verify “English” is displayed$/,async function(){
    const englishDisplayed = await EnglishField.isEnglishDisplayed();
    expect(englishDisplayed,'english language is not displayed').to.be.true;
    })
          