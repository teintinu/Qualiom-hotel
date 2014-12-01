var webdriver = require('selenium-webdriver');
var assert = require('assert');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get('http://hotel-josefernandotolentino.c9.io/fw/hello.html');

var input = driver.findElement(webdriver.By.tagName('input'));
input.sendKeys('TEST');

input.getAttribute('value').then(function(value) {
    assert.equal(value, "MariaTEST");
});
driver.quit();