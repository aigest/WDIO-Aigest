class homepage {

   

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
getTheAppLocator = '//*[@id="mobile-app-download-button"]';
async getTheApp(){
  await $(this.getTheAppLocator).click();
}

//calendar
dateFieldLocator = '//body/div[@id="app-blossom-flex-ui"]s'
async  dateField(){
  await $(this.dateFieldLocator).click();
  }

async goToCurrentMonth(monthyear){
  await browser.pause(2000);
  const previousArrowDisplayed = await $(this.backArrowLocator).isDisplayed();

  for (let i=0; i<12;i++) {

    const leftCalendarHeading = await $(this.leftCalendarHeadingLocator).getTex();
    console.log(`\n ${leftCalendarHeading}`);

    if (leftCalendarHeading.localeCompare(monthyear)!==0){
      return await $(this.previousArrowLocator).click();
    }
    else {
      return await $(this.nextArrowLocator).click();
    }
  }
}

async disabledDatesCount() {
  const allDatesLocator = this.disabledDates + this.enabledDates;
  const allDates = await $$(allDatesLocator);

  for (const date of allDates) {
    const classAttribute = await date.getAttribute('class');
    if (classAttribute.includes('is-disabled')) {
      disabledDatesCount++;
    }
    return disabledDatesCount;
  }
}

async verifyBackButton() {
  return await $(this.backArrowLocator).isEnabled();
}

//guest

async getAdultCount(){
  return await $(this.adultCountLocator).getAttribute('Value');
}
  async selectAdultAsSix() {
    const expectedAdultCount = 6;
    await browser.pause(2000);

    for(let i=0; i<10; i++) {
      const getAdultCount = await this.getAdultCount();

      if (Number(getAdultCount)< Number(expectedAdultCount)){
        await $(this.plusAdultsLocator).click();
      }
      else if (Number(getAdultCount)> Number(expectedAdultCount)){
        await $(this.minusAdultsLocator).click();
      }
      else{
        break;
      }
    }
  }

minusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button"]'
plusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button"]'
adultCountLocator = '#traveler_selector_adult_step-input-0'

async selectChildrenAsThree() {
  let expectedCountThree = 3;
  await browser.pause(2000);

  for(let i=0; i<10; i++) {
    const getChildCountThree = await this.getChildCount();

    if (Number(getChildCountThree)<Number(expectedCountThree)){
      await $(this.childPlusLocator).click();
    }
    else if (Number(getChildCountThree)>Number(expectedCountThree)){
      await $(this.childMinusLocator).click();
    }
    else{
      break;
    }
  }
}
childPlusLocator = '//*[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
childMinusLocator = '//*[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';


childAgeFieldLocator = '//label[contains(text(),"Child 1 age")]'
async selectFirstChildFour() {
  return await$(this.childAgeFieldLocator).selectByIndex(5);
}

secondChildLocator  = '//label[contains(text(),"Child 2 age")]'
async selectSecondChildUnderOne() {
  return await $(this.secondChildLocator).selectByIndex(0);
}

thirdChildLocator = '//label[contains(text(),"Child 3 age")]'
async thirdChildAgeSeven() {
  return await $(this.thirdChildLocator).selectByIndex(8);
}

doneButtonLocator = '//button[@id="traveler_selector_done_button"]'
async clickDoneButton() {
  return await $(this.doneButtonLocator).click();
 }

toalCountLocator = '//label[contains(text(),"Travelers")]//following-sibling::input'
async totalNumberOfTravelers() {
  return await $(this.toalCountLocator).getAttribute('value');
}




leftCalendarHeadingLocator = '//*[@class="uitk-date-picker-month"][1]';
previousArrowLocator
nextArrowLocator = '//*[contains(@class,"uitk-layout-flex")]//button[@data-stid=***'
allDatesLocator = '//h2[text()="August 2023"]/following-sibling::table//button';
backArrowLocator = '//*[contains(@class,"uitk-layout-flex")]//button[@data-stid=***'
supportButton = '//a[@id="support-cs"]';
guardarBtnLocator = '//*[text()="Guardar"]';
englishBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
españolDropdwonLocator = 'value="es_US"';
saveBtnLocator = '//*[@fdprocessedid="e2541l"]';

}
  module.exports = homepage;