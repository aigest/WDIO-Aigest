class signInOrAccount{
    
    //locators
emailValueLocator = '#loginFormEmailInput';
clickContinueBtnLocator ='#loginFormSubmitButton';
errorMessageLocator = '#loginFormEmailInput-error';
                        //#loginFormEmailInput-error
    //function  
async setEmailValue(value) {
    const emailInput = await $(this.emailValueLocator);
    await emailInput.setValue(value);
}

async clickContinueBtn(){
    await $(this.clickContinueBtnLocator).click();
    await browser.pause(2000);      
}
  async verifyErrorMessageIsDisplayed(){ 
await $(errorMessageLocator).waitForDisplayed({timeout:3000});
     return await $(errorMessageLocator).isDisplayed();
}
oneKeyTermsLocator = '//a[contains(text(),"One")]'
async oneKeyTerms(){
    await $(this.oneKeyTermsLocator).click();     
}
privacyStatementLocator = '//a[contains(text(),"Privacy Statement")]'
async privacyStatement(){
    await $(this.privacyStatementLocator).click();     
}
// async verifyErrorMessageIsDisplayed(){
//     const errorDisplayed = await $(this.errorMessageLocator).isDisplayed(); 
//     expect(errorDisplayed,'Error message is not displayed').to.be.true; 
// } 
}    
        
 module.exports = signInOrAccount;
        