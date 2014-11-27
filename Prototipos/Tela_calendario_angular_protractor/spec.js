describe('Teste com Tela Calendario', function () {
    var contQuartos = element.all(by.repeater('quarto in quartos()'));

    beforeEach(function () {
        browser.get('http://localhost:8080/index.html');
    });

    it('Verificando quantidade de quartos', function () {
        expect(friends.count()).toBe(9);
    });


});