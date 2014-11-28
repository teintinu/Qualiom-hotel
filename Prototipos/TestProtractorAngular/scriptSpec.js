// spec.js
describe('Test Angular', function() {

    var cat = element.all(by.repeater('cat in pets'));

    beforeEach(function() {
        browser.get('http://127.0.0.1:52838/Prototipos/TestProtractorAngular/index.html');
    });

    it('Elemento', function() {
        expect(cat.get(0).getText()).toEqual('zé 10');
    });

    it('Pegando Elemento por Classe', function() {
        var nome = element(by.className('name'));
        expect(nome.getText()).toEqual('zé');

    });
});
