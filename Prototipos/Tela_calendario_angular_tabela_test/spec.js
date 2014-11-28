// spec.js
describe('Teste com Tela Calendario', function () {

    beforeEach(function () {
        browser.get('http://localhost:8080/index.html');
    });

    it('Verificando quantidade de quartos', function () {
        var quartos = element.all(by.repeater('quarto in quartos'));
        expect(quartos.count()).toEqual(9);

        browser.actions().
        dragAndDrop(quartos.get(0), {
            x: 50,
            y: 600
        }).
        perform();

        //var quartos = element.all(by.repeater('quarto in quartos')).last();
        //expect(quartos.getText()).toEqual("quarto 10");

    });
});