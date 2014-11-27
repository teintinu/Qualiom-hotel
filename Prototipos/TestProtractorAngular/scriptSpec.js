// spec.js
describe('Test Angular', function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:49491/Prototipos/TestProtractorAngular/index.html');
    });

    it('Elemento', function() {

        var firstCatName = element(by.repeater('cat in pets').row(0).column('{{cat.name}}'));
        console.log(firstCatName);
        /* var secondCat = element(by.repeater('cat in pets').row(1)).column('{{cat.name}}');
        console.log(secondCat);
        console.log("secondCat");*/
    });

});
