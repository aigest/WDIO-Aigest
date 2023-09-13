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

///////

async propertyButton() {
  await $(this.propertyButtonLocator).click();

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


//Filter 
destinationTriggerLocator = '//button[@aria-label="Going to"]';
searchLocator = '#destination_form_field';
searchSuggestionsLocator = '//button[@data-stid="destination_form_field-result-item-button"]';
allSeptemberDatesLocator = '//button[@class="uitk-date-picker-day"]';
allOctoberDatesLocator = '//h2[text()="October 2023"]/following-sibling::table//button[not(@disabled)]';
doneButtonLocator = '//button[@data-stid="apply-date-picker"]';
searchButtonLocator = '#search_button';


async clickDestination() {
  await $(this.destinationTriggerLocator).waitForClickable();
  await $(this.destinationTriggerLocator).click();

}



async searchManhattan() {

  await $(this.searchLocator).setValue('Manhattan');
  await browser.pause(2000);
  await $('//*[@aria-label="Manhattan New York, New York, United States"]').click();

}

async selectManhattan() {

  await browser.waitUntil(async () => {
    const suggestions = await $$(this.searchSuggestionsLocator);
    return suggestions.length > 0
  },

    { timeout: 3000, timeoutMsg: 'Autosuggestions are not displayed within 3-seconds' });

  const allSuggestions = await $$(this.searchSuggestionsLocator);

  for (const address of allSuggestions) {

    const addressText = await address.getAttribute('aria-label');

    if (addressText.startsWith('Manhattan, New York')) {

      await address.click();

      break;

    }

  }

}

async goToSeptember(monthYearSept) {



  const nextArrowDisplayed = await $(this.nextArrowLocator).isDisplayed();


  for (let i = 0; i < 12; i++) {

    let septemberHeading = await $(this.septemberLocator).getText();

    if (septemberHeading.localeCompare(monthYearSept) !== 0) {
      if (nextArrowDisplayed) {
        await $(this.nextArrowLocator).click();

      } else {
        await $(this.backArrowLocator).click();
      }
    } else {

    } break;
  }
}

async checkInDate() {


  const allSeptemberDates = await $$(this.allSeptemberDatesLocator);
  for (const septemberDateElement of allSeptemberDates) {
    const dateValue = await septemberDateElement.getAttribute('data-day');
    if (dateValue.localeCompare('29') === 0) {
      await septemberDateElement.click();
      break;
    }

  }

}

async checkOutDate() {
  await $(this.nextArrowLocator).click();

  const allOctoberDates = await $$(this.allOctoberDatesLocator);
  for (const octoberDateElement of allOctoberDates) {
    const dateValue = await octoberDateElement.getAttribute('data-day');
    if (dateValue.localeCompare('16') === 0) {
      await octoberDateElement.click();
      break;
    }

  }

}

async checkInOutBtn() {
  await $(this.doneButtonLocator).waitForClickable();
  await $(this.doneButtonLocator).click();
  await browser.pause(2000);

}

async searchButton() {
  await $(this.searchButtonLocator).waitForClickable();
  await $(this.searchButtonLocator).click();

}



}
  module.exports = homepage;