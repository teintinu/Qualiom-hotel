// spec.js
describe('Teste com Side Nav Angular', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://127.0.0.1:65111/Prototipos/Angular_SideNav/mat.html#/elementos');
    });

    it('Verificando Titulo da Pagina', function() {
        expect(browser.getTitle()).toEqual('Teste SideNav - Angular');
    });

    it('Checkin / Checkout', function() {

        var listaDeQuartos = element.all(by.repeater('acomodacao in listaAcomodacoes'));
        expect(listaDeQuartos.count()).toEqual(3);

        var botao = listaDeQuartos.get(1).element(by.css('.acomodacao')).all(by.tagName('md-button'));
        bottao(1).click();
    });
});
