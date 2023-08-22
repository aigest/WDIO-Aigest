const { Then, When } = require("@wdio/cucumber-framework");
const qrApp = require("../Pages/app");
const homepage = require("../Pages/homepage_class");
const { expect } = require("chai");



const Homepage= new homepage();
const QrApp= new qrApp();


When(/^I click “Get the app“ button$/, async function () { 
    await Homepage.getTheApp();
    await browser.pause(2000);
})

Then(/^I verify “Scan the QR code and download our app” is displayed$/, async function () {
    const scanQrDownApp = await QrApp.isScanQrDisplayed();
    expect (scanQrDownApp,'Scan QR code download App').to.be.true;
})

Then(/^I verify QR Code is displayed$/, async function () {
    const qrCode = await QrApprApp.isQrCodeDisplayed();
    expect (qrCode,'QR Code').to.be.true;
})