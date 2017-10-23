module.exports = accountGoogle;
var data = require('../data/data.json');

function accountGoogle() {
    var that = this;
    var googleAccountName = element(by.id('identifierId')),
        nextButton = element(by.id('identifierNext')),
        accountPassword = element(by.name('password')),
        signButton = element(by.id('passwordNext'));
    /**Страница аккаунта не является Angular страницей, поэтому сдесь добавлены неявные ожидания.**/
    that.login = function (email,password) {
        googleAccountName.sendKeys(email);
        nextButton.click();
        browser.sleep(3000);
        accountPassword.sendKeys(password);
        signButton.click();
        browser.sleep(3000);
    }
}