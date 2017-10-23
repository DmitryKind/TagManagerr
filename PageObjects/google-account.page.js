module.exports = AccountGoogle;
var data = require('../data/data.json');

function AccountGoogle() {
    var that = this;
    var googleAccountName = element(by.id('identifierId')),
        nextButton = element(by.id('identifierNext')),
        accountPassword = element(by.name('password')),
        signButton = element(by.id('passwordNext'));
    
    /**На странице аккаунта не подключён Angular, поэтому здесь добавлены явные ожидания.**/
    that.login = function (email,password) {
        googleAccountName.sendKeys(email);
        nextButton.click();
        browser.sleep(3000);
        accountPassword.sendKeys(password);
        signButton.click();
        browser.sleep(3000);
    }
}