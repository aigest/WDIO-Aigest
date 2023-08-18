class supportPage{

//locators
supportButton = '//a[@id="support-cs"]'
siteFeedbackBtn = '//a[contains(text(),"Site Feedback")]'
supportSubBtn = '//input[@type="submit"]'
errorMessLocator = '//p[contains(text(),"The following fields are required")]'
redBoxLocator = '//div[@id="error-text"]'
overallLocator = '//*[@id="overall-5"]'
contentLocator = '//*[@id="content-5"]'
desingLocator = '//*[@id="design-5"]'
easyOfUseLocator = '//*[@id="usability-5"]'
thnxFeedbackLocator = '//h1[contains(text(),"Thank you for your feedback")]'



async clickSiteFeedback(){
    await $(this.siteFeedbackBtn).click();
}

async clicksupportSubBtn(){
    await $(this.supportSubBtn).click();
}

async verifyErrorMessIsDisplayed(){
    const errorDisplayed = await $(this.errorMessLocator).isDisplayed(); 
    expect(errorDisplayed,'The following fields are required').to.be.true; 
} 

async verifyRedBoxIsDisplayed(){
    const errorDisplayed = await $(this.redBoxLocator).isDisplayed(); 
    expect(errorDisplayed,'').to.be.true; 
} 

async overallRating() {
    return await $(this.overallLocator).isSelected();
}

async contentRating() {
    return await $(this.contentLocator).isSelected();
}

async desingRating() {
    return await $(this.desingLocator).isSelected();
}

async easyOfUseRating(){
    return await $(this.easyOfUseLocator).isSelected();
}

async verifyThnxFeedback(){
    const thnxDisplayed = await $(this.thnxFeedbackLocator).isDisplayed(); 
    expect(thnxDisplayed,'').to.be.true; 
} 


}
module.exports = supportPage;
