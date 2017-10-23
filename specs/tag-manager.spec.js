var TagManager = require('../PageObjects/tag-manager.page');
var AccountGoogle = require('../PageObjects/google-account.page');
var data = require('../data/data.json');

describe('Interaction with tagmanager.google.com', function () {
    var tagManager = new TagManager();
    var accountGoogle = new AccountGoogle();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://tagmanager.google.com/#/admin/accounts/create');
        accountGoogle.login(data.email, data.password);
        browser.waitForAngularEnabled(true);
    });

    it('Field account is available and visible', function () {
        since('Account field is not present').expect(tagManager.accountField.isPresent()).toBe(true);
        since('Account field is not visible').expect(tagManager.accountField.isDisplayed()).toBe(true);
        since('Account field is not available').expect(tagManager.accountField.isEnabled()).toBe(true);
        since('Create button is available').expect(tagManager.isCreateBtnAvailable()).toBe(false);
    });

    it('Filling account information field. Account name is visible.', function () {
        tagManager.accountField.sendKeys(data.Account);
        since('Account name is not visible').expect(tagManager.accountField.getAttribute('value')).toEqual(data.Account);
        since('Create button is available').expect(tagManager.isCreateBtnAvailable()).toBe(false);
    });

    it('Click on checkbox, click next button.Container field is available and visible', function () {
        tagManager.sendDataCheckbox.click();
        since('CheckBox is not selected').expect(tagManager.sendDataCheckbox.isSelected()).toBe(false);
        tagManager.nextButton.click();
        since('Container field is not present').expect(tagManager.containerField.isPresent()).toBe(true);
        since('Container field is not visible ').expect(tagManager.containerField.isDisplayed()).toBe(true);
        since('Container field is not available').expect(tagManager.containerField.isEnabled()).toBe(true);
        since('Create button is available').expect(tagManager.isCreateBtnAvailable()).toBe(false);
    });

    it('Filling information in container. Container name is visible', function () {
        tagManager.containerField.sendKeys(data.container);
        since('Container name is not visible').expect(tagManager.containerField.getAttribute('value')).toEqual(data.container);
        since('Create button is available').expect(tagManager.isCreateBtnAvailable()).toBe(false);
    });

    it('Click cancel button. Name of container is clear. Container field is not visible', function () {
        tagManager.cancelButton.click();
        since('Account field is not available').expect(tagManager.isAccountFieldEmpty()).toBe(true);
        since('Container field visible').expect(tagManager.containerField.isDisplayed()).toBe(false);
        since('Create button is available').expect(tagManager.isCreateBtnAvailable()).toBe(false);
    });

});
