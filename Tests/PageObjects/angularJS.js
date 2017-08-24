'use strict';
module.exports = {

  angularHomepage: {
    inputField: element(by.model('yourName')),
    askButton: element(by.id('send-btn')),
    resetButton: element(by.buttonText('Download AngularJS'))
  },

  go: function(site) {
    browser.get(site);
  },

  getPageTitle: function(){
    var title = browser.getTitle();
    console.log("Debug: "+title);
    return title;
  },

  waitInputField: function(){
    var angular = this.angularHomepage;
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(angular.inputField));
    browser.wait(EC.visibilityOf(angular.inputField));
  },

  waitResetButton: function(){
    var angular = this.angularHomepage;
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(angular.resetButton));
  },

  askButtonClick: function(){
    var angular = this.angularHomepage;
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(angular.askButton));
    angular.askButton.click();
  },

  enterInputText: function(text){
    var angular = this.angularHomepage;
    angular.inputField.sendKeys(text);
  },

  getPlaceholderText: function(){
    var angular = this.angularHomepage;
    var placeholderText;
    angular.inputField.getAttribute('placeholder').Then(function (placeholder){
      placeholderText = placeholder;
    });
    console.log("Debug: "+placeholderText);
    return placeholderText;
  }
};
