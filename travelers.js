class travelers{
childButtonLocator = ('#traveler_selector_children_step_input-0');
childMinusLocator = ('//*[@id="traveler_selector_children_step_input-0"]/preceding-sibiling::button');
childPlusLocator = ('//*[@id="traveler_selector_children_step_input-0"]/following-sibling::button');
ChildAgeFieldLocator = ('#age-traveler_selector_children_age_selector-0-0');
fieldDropdownLocator = ('//*[@class="uitk-field-select"]');




async countChildrenTwo() {
    let expectedChildCount = 2;
    await browser.pause(2000);
    for (let i = 0; i < 10; i++) {
        const getChildCount = await childButtonLocator.getAttribute('value');
        if (Number (this.getChildCount) < this.expectedChildCount) {
            return await $(this.childPlusLocator).click();
        }
        else if (Number(this.getChildCount) > this.expectedChildCount){
            return await $(this.childMinusLocator).click();
        }  
        else {
            break;
        }
    }

}

async areDropdownsTwo(){
    return await $(this.fieldDropdownLocator);
}

async isPlusBtnEnabled(){
    return await $(this.childPlusLocator).isEnabled();
}

async isMinusBtnEnabled() {
    return await $(this.childMinusLocator).isEnabled();
}

async countChildrenSix() {
    const expectedChildCount = 6;

    for (let i=0; i<10; i++) {
        const getChildCount = await childButtonLocator.getAttribute('value');
        if(Number(this.getChildCount)< this.expectedChildCount) {
            return await $(this.childPlusLocator).click();
        }
        else if (Number(this.getChildCount)> this.expectedChildCount) {
            return await $(this.childMinusLocator).click();
        }
        else{
            break;
        }
    }
}

async areDropdownsSix(){
    return await $(this.fieldDropdownLocator);
}

async isPlusBtnDisabled(){
    return await $(this.childPlusLocator).isEnabled();
}

async isMinusBtnEnabled(){
    return await $(this.childMinusLocator).isEnabled();
}

async selectChildrenFive(){
    await $(this.childMinusLocator).click();
}

async areDropdownsFive(){
    return await $(this.fieldDropdownLocator);
}

async isPlusBtnEnabled(){
    return await $(this.childPlusLocator).isEnabled();
}

async isMinusBtnEnabled(){
    return await $(this.childMinusLocator).isEnabled();
}

async countChildrenZero() {
    let expectedChildCount = 0;
    for (let i=0; i<10; i++) {
        const getChildCount= await childButtonLocator.getAttribute('value');

        if(Number(this.getChildCount)< this.expectedChildCount) {
            return await $(this.childPlusLocator).click();
        }
        else if (Number(this.getChildCount)> this.expectedChildCount) {
            return await $(this.childMinusLocator).click();
        }
        else {
            break;
        }
    }
}

async isChildrenDropdownDisplayed(){
    return await $(this.ChildAgeFieldLocator);
}

async isPlusBtnEnabled(){
    return await $(this.childPlusLocator);
}

async isMinusBtnDisabled() {
    return await $(this.childMinusLocator);
}
}
module.exports = travelers;
