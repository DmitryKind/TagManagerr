module.exports = TagManager;

function TagManager() {
    var that = this;
    var accountField = $("[name='form.account.data.name']"),
        checkBox = $("[name='form.account.data.shareData']"),
        nextButton = element(by.buttonText('Далее')),
        containerField = $("[name='form.container.data.name']"),
        cancelButton = element(by.buttonText('Отмена')),
        createButton = element(by.cssContainingText('.btn-action', 'Создать'));

    that.accountField = accountField;
    that.checkBox = checkBox;
    that.nextButton = nextButton;
    that.containerField = containerField;
    that.cancelButton = cancelButton;

    that.isAccountFieldEmpty = function () {
        return accountField.getAttribute('class')
            .then(function (classes) {
                return classes.indexOf('ng-empty') !== -1;
            });
    };
    that.isCreateBtnAvailable = function () {
        return createButton.isPresent().then(function (isPresent) {
            if (!isPresent) {
                return false;
            }
            return createButton.isDisplayed();
        }).then(function (isDisplayed) {
            if (!isDisplayed) {
                return false;
            }
            return createButton.isEnabled();
        })
    };
}