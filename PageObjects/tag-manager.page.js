module.exports = TagManagerTest;
function TagManagerTest() {

    var that = this;
    var accountName = $("[name='form.account.data.name']"),
        checkBox = $("[id='2-form.account.data.shareData']"),
        nextButton = element(by.buttonText('Далее')),
        containerName = $("[id='1-form.container.data.name']"),
        cancelButton = element(by.buttonText('Отмена')),
        createButton = element(by.cssContainingText('.btn-action', 'Создать')),
        containerField = $("[name='form.container.data.name']");

    that.accountField = accountName;
    that.checkBoxSelected = checkBox;
    that.buttonNext = nextButton;
    that.containerField = containerName;
    that.buttonCancel = cancelButton;
    that.containerVisable = containerField;

    that.isAccountFieldEmpty = function () {
        return accountName.getAttribute('class')
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
};