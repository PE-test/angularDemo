'use strict';
module.exports = {

  angularHomepage: {
    generalStatistcsDialogId: element(by.id('DialogPieChart')),
    dialogPieChartId: element(by.id('DialogPieChart'))
  },

  go: function(site) {
    browser.get(site);
  },

  getPageTitle: function(){
    var title = browser.getTitle();
    console.log("Debug: "+title);
    return title;
  },

  waitPageLoaded: function(){
    var angular = this.angularHomepage;
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(angular.dialogPieChartId));
  }
};
