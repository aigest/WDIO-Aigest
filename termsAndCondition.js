const { expect } = require("chai");
const moment = require("moment/moment");

class termsAndCond {


msgDisplayedLocator = '//h1[contains(text(),"One Key")]'
async verifyMessageIsDisplayed(){
    const msgDisplayed = await $(this.msgDisplayedLocator).isDisplayed(); 
    expect(msgDisplayed,'One Key Terms and Conditions').to.be.true; 
} 
dateOneKeyLocator = '//p[contains(text(),"Effective from July 6, 2023")]'
async verifyDateOneKeyFormat(){
    const dateOneKeyElement = await $(this.dateOneKeyLocator);
    const dateText = await dateOneKeyElement.getText();
    const dateParts = dateText.split(" ");
    const extractedPart = dateParts.slice(2).join(" ");
    const expectedDateFormat = "MMMM D, YYYY";
    console.log(extractedPart);
    const parsedDate = moment (extractedPart, expectedDateFormat, true);
    expect(parsedDate.isValid(), "Date is not the expected format").to.be.true;
}
lastUpdatedDateLocator = '//p[contains(text(),"Last Updated: August 9, 2023")]'
async verifyLastUpdatedDateFormat(){
    const lastUpdatedDate = await $(this.lastUpdatedDateLocator);
    const dateText = await lastUpdatedDate.getText();
    const dateParts = dateText.split(" ");
    const extractedPart = dateParts.slice(2).join(" ");
    const expectedDateFormat = "MMMM D, YYYY";
    console.log(extractedPart);
    const parsedDate = moment (extractedPart, expectedDateFormat, true);
    expect(parsedDate.isValid(), "Date is not the expected format").to.be.true;
}

}
module.exports = termsAndCond;