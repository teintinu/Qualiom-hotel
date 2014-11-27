// spec.js
describe('Teste com Side Nav Angular', function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:49491/Prototipos/Angular_SideNav/mat.html#/elementos');
    });

    it('Verificando Titulo da Pagina', function() {
        expect(browser.getTitle()).toEqual('Teste SideNav - Angular');
    });

    it('Checkin / Checkout', function() {

        /*
        var filtra_por_classe_parent=by.css('.parent');// cria funcoes de filtro o parent
        var todos_parent=element.all( filtra_por_classe_parent); // procura todos os parents e retorna um ElementArrayFinder
        var filtra_por_classe_foo=by.css('.foo')
        var foo =  todos_parent.all(     filtra_por_classe_foo)
        */

        /*pega_todos.row(0).then(function(acomodacao1) {
            console.log(acomodacao1.titulo);
        });*/

        var filtra_por_repeater = by.repeater('acomodacao in listaAcomodacoes'); // cria_filtro acomodacao
        var pega_todos = element.all(filtra_por_repeater); //pega todos os elementos

        var pega_um_elemento = pega_todos.get(0); //pegando o primeiro elemento
        console.log(pega_um_elemento.getInnerHtml());

        var filtra_h4 = by.css('h4'); //cria filtro de h4
        var pega_h4 = pega_um_elemento.all(filtra_h4).get(0); // pega o primeiro h4

        var class_elemento_disponibilidade = pega_h4.getAttribute('class'); //Pega Class h4 - (desocupado ou ocupado);

        console.log(pega_h4.getInnerHtml());

        var filtra_botoes = by.css('md-button'); //cria filtro de botão
        var pega_botao = pega_um_elemento.all(filtra_botoes).get(0); // pega o primeiro botao

        pega_botao.click();

        var class_elemento_disponibilidade_2 = pega_h4.getAttribute('class'); //Pega Class h4 - (desocupado ou ocupado);


        if (class_elemento_disponibilidade.getText().toEqual("desocupado") || class_elemento_disponibilidade.getText().toEqual("ocupado")) {

            console.log("ENTROU");
        } else {
            console.log("mudou");
        }

        /*if (disponibilidade.getText() == 'ocupado') {
            expect(disponibilidade_atual).toBe('desocupado');
        } else {
            expect(disponibilidade_atual).toBe('ocupado');
        }*/

        //pega_botoes.each(function(element) {
        //  element.getInnerHtml().then(console.log);
        //});

        //var listaDeQuartos = element.all(todos);
        // expect(listaDeQuartos.count()).toEqual(31);
        //todos.then(function(conteudo) {
        /*var conteudo = todos;
        console.log(typeof conteudo);
        for (var p in conteudo.prototype)
            console.log('--' + p);
        //});*/
    });
});
