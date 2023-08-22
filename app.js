class qrApp{

    
// async isscanQrDisplayed(){ 
//     await $(qrCodeLocator).waitForDisplayed({timeout:3000});
//     return await $(qrCodeLocator).isDisplayed();
// }
qrCodeMsgLocator = '//div[@aria-label="Mobile App Download"]'
async isScanQrDisplayed(){
    const qrMessageDisplayed = await $(this.qrCodeMsgLocator).isDisplayed(); 
    expect(qrMessageDisplayed,'Scan the QR code and download our app').to.be.true; 
} 
qrCodeLocator = '//div[@style="--uitk-layoutgrid-column-start: span 1;"]'
async isQrCodeDisplayed(){
    const qrDisplayed = await $(this.qrCodeLocator).isDisplayed(); 
    expect(qrDisplayed,'Scan the QR code and download our app').to.be.true; 
} 

}
module.exports = qrApp;