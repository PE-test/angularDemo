var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var angularJS = require('../PageObjects/angularJS.js');
var angularIO = require('../PageObjects/angularIO.js');


defineSupportCode(function({Given, When, Then}) {

  Given('a user opens the angular JS page', function () {
    var page;
    console.log('Debug. Environemnt: ', browser.params.environment);
    switch(browser.params.environment){
      case "dev":
        page = browser.params.environments.dev.mainPage;
        break;
      case "test":
        page = browser.params.environments.test.myITpage;
        break;
      case "prod":
        page = browser.params.environments.prod.myITpage;
        break;
      default:
        console.log("Error: wrong environment");
    }
    console.log('Debug. Page to open: ', page);
    browser.get(page);
    return browser.refresh();

  });

  Given('a user opens the angular IO page', function () {
    var page;
    console.log('Debug. Environemnt: ', browser.params.environment);
    switch(browser.params.environment){
      case "dev":
        page = browser.params.environments.dev.dashboardPage;
        break;
      case "test":
        page = browser.params.environments.test.dashboardPage;
        break;
      case "prod":
        page = browser.params.environments.prod.dashboardPage;
        break;
      default:
        console.log("Error: wrong environment");
    }
    console.log("Debug. Page to open: ", page);
    browser.get(page);
    return browser.refresh();
  });

  Given('a question is entered: {stringInDoubleQuotes}', function (inputText, next) {
    angularJS.enterInputText(inputText);
    next();
  });

  When('angular JS page is loaded', function () {
    return angularJS.waitResetButton();
  });

  When('angular IO page is loaded', function (next) {
    return angularIO.waitPageLoaded();
  });

  When('submitting question', function (next) {
    angularJS.askButtonClick();
    next();
  });

  When('wait for {int} seconds', function (seconds, next) {
    var delayMills = seconds*1000;
    console.log("Debug: waiting for "+delayMills+" ms");
    browser.sleep(delayMills);
    next();
  });

  Then('angular JS page title is {stringInDoubleQuotes}', function (expectedPageTitle) {
    var pageTitle = angularJS.getPageTitle();
    return expect(pageTitle).to.eventually.equal(expectedPageTitle);
  });

  Then('angular IO page title is {stringInDoubleQuotes}', function (expectedPageTitle) {
    var pageTitle = angularIO.getPageTitle();
    return expect(pageTitle).to.eventually.equal(expectedPageTitle);
  });

  Then('placeholder text is {stringInDoubleQuotes}', function (expectedPlaceholderText) {
    var actualPlaceholderText = angularJS.getPlaceholderText();
    return expect(actualPlaceholderText).to.eventually.equal(expectedPlaceholderText);
  });
});
