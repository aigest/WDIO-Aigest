class signIn {

signInButtonLocator = '//*[@data-stid="link-header-account-signin"]'
        async clickSignInbtn(){
        await $(this.signInButtonLocator).click();
    }
}
       module.exports = signIn;