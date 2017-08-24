var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({After, Before, setDefaultTimeout}) {
  Before(function () {
    console.log("Debug: Start of test");
  });

  After(function () {
    //return browser.quit();
    console.log("Debug: End of all tests");
  });

  setDefaultTimeout(15 * 1000);
});
