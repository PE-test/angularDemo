exports.config = {
  seleniumServerJar: 'seleniumServer/selenium-server-standalone-3.5.0.jar',
  getPageTimeout: 15000,
  allScriptsTimeout: 50000,
  defaultTimeoutInterval: 15000,
  includeStackTrace: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'Tests/Features/*.feature'
  ],
  cucumberOpts: {
    require: [
      'Tests/Steps/*.js' // accepts a glob
    ],
    format: ['json:reports/results.json', 'pretty'],
    profile: false,
    'no-source': true
  },
  capabilities: {
    'browserName': 'Chrome'/*,
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600"]
    }*/
  },
  params:{
    environment: 'test',
    environments:{
      dev:{
        mainPage: 'http://google.com',
        dashboardPage: 'https://angular.io/'
      },
      test:{
        mainPage: 'http://google.com',
        myITpage: 'https://angularjs.org/',
        dashboardPage: 'https://angular.io/'
      },
      prod:{
        mainPage: 'http://google.com',
        myITpage: 'https://angularjs.org/',
        dashboardPage: 'https://angular.io/'
      }
    }
  }
};
