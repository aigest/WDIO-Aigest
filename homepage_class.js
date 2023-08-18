class homepage {

// locators to interact on homepage
// supportLocator = ***  
// feedbackLocator= ***    
//functions to interact with elements in homepage 
async launchHotels(){
  await browser.url('https://www.hotels.com/'); 
}  
supportButton = '//a[@id="support-cs"]';
async clickSupport(){
  await $(this.supportButton).click();
}

signInLinkLocator = '//button[contains(text(),"Sign")]'
async clickSignIn(){
  await $(this.signInLinkLocator).click();
  await browser.pause(2000);
  }
  
englishBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
async englishclickButton(){
  await $ (this.englishBtnLocator).click();
  }
    
async españolDropdown(Espanol){
  await $(this.españolDropdwonLocator).isSelectedByAttribute(Espanol);
  }

async  saveButton(){
  await $(this.saveBtnLocator).click();
  }

async isEspañolDisplayed(){
  return await $(this.españolDropdwonLocator).isDisplayed();
  }

async españolDropdown(Espanol){
  await $(this.españolDropdwonLocator).isSelectedByAttribute(Espanol);
  }

saveBtnLocator = '//*[@fdprocessedid="e2541l"]';
async  saveButton(){
  await $(this.saveBtnLocator).click();
  }

españolDropdwonLocator = 'value="es_US"';
async isEspañolDisplayed(){
  return await $(this.españolDropdwonLocator).isDisplayed();
  }

travelersLocators= '//button[@data-stid="open-room-picker"]';
async clickTravelers(){
  await $(this.travelersLocators).click();
}

}

supportButton = '//a[@id="support-cs"]';
guardarBtnLocator = '//*[text()="Guardar"]';
englishBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
españolDropdwonLocator = 'value="es_US"';
saveBtnLocator = '//*[@fdprocessedid="e2541l"]';



  module.exports = homepage;