var seleniumWebdriver = require('selenium-webdriver');
// var firefox = require('selenium-webdriver/firefox');
// var chrome = require('selenium-webdriver/chrome');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();
  this.driver.manage().window().maximize();
}

module.exports = function() {
  this.World = CustomWorld;
  this.setDefaultTimeout(30 * 1000);
};
