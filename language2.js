
class languageField{


async clickEspañol(){
    await $(this.españolBtnLocator).click();
    }
async englishSelected(){
    await (this.englishSelectedLocator).selecteByVisibleText('English, United State');
    }

async  guardarButton(){
    await $(this.guardarBtnLocator).click();
}
}

module.exports = languageField;

españolBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
englishSelectedLocator = '//*[text()="English (United States)"]';
guardarBtnLocator = '//*[text()="Guardar"]';
