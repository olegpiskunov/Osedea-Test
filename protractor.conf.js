// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const path = require('path');

const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;

const prettyReporter = new PrettyReporter({
    // required, there is no default
    path: path.join(__dirname, 'results')
});

exports.config = {
  allScriptsTimeout: 30000,
 
  specs: ['./e2e/homePage/homePage.ts'],

  multiCapabilities: [
    // desktop chrome
    {
      browserName: 'chrome',
      label: 'desktop',
      chromeOptions: {
        args: ['--no-sandbox', '--enable-automation', '--disable-infobars','--start-maximized'],
      }
    }],
  directConnect: true,
  baseUrl: 'https://',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(prettyReporter);

    let globals = require('protractor');
    let browsers = globals.browser;
    browsers.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
  },
  beforeLaunch() {
    prettyReporter.startReporter();
  }
};
