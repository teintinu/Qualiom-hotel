'use strict';

describe('grunt-webdriverjs test', function () {

    it('checks if title contains the search query', function(done) {

        browser
            .url('http://github.com')
            .setValue('#js-command-bar-field','grunt-webdriver')
            .submitForm('.command-bar-form')
            .getTitle(function(err,title) {
                expect(title.indexOf('grunt-webdriver')).not.toBe(-1);
                expect(err).toBe(null);
                done();
            })
            .end();

    });

});