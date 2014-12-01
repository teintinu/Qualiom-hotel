// spec.js
describe('Teste com Side Nav Angular', function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:50173/Prototipos/Angular_SideNav/mat.html#/elementos');
    });

    it('Verificando Titulo da Pagina', function() {
        expect(browser.getTitle()).toEqual('Teste SideNav - Angular');
    });

    it('Checkin / Checkout', function() {
        var filtra_por_repeater = by.repeater('acomodacao in listaAcomodacoes'); // cria_filtro acomodacao
        var pega_todos = element.all(filtra_por_repeater); //pega todos os elementos

        var pega_um_elemento = pega_todos.get(0); //pegando o primeiro elemento
        var pega_um_elemento_dois = pega_todos.get(1);
        var pega_um_elemento_tres = pega_todos.get(2);

        var filtra_h4 = by.css('h4'); //cria filtro de h4
        var pega_h4 = pega_um_elemento.all(filtra_h4).get(0); // pega o primeiro h4
        var pega_h4_2 = pega_um_elemento_dois.all(filtra_h4).get(0); // pega o h4 do segundo
        var pega_h4_3 = pega_um_elemento_tres.all(filtra_h4).get(0); // pega o 3 h4

        var class_elemento_disponibilidade_Antes = pega_h4.getAttribute('class'); //Pega Class h4-(des ou ocupado);
        var class_elemento_disponibilidade_Antes_2 = pega_h4_2.getAttribute('class');
        var class_elemento_disponibilidade_Antes_3 = pega_h4_3.getAttribute('class');

        expect(class_elemento_disponibilidade_Antes).toEqual("desocupado");
        expect(class_elemento_disponibilidade_Antes_2).toEqual("ocupado");
        expect(class_elemento_disponibilidade_Antes_3).toEqual("desocupado");

        var filtra_botoes = by.css('md-button'); //cria filtro de botão

        var pega_botao = pega_um_elemento.all(filtra_botoes).get(0);
        var pega_botao_2 = pega_um_elemento_dois.all(filtra_botoes).get(0);
        var pega_botao_3 = pega_um_elemento_tres.all(filtra_botoes).get(0); // pega botoes

        pega_botao.click();
        pega_botao_2.click();
        pega_botao_3.click();

        var class_elemento_disponibilidade_depois = pega_h4.getAttribute('class'); //Pega Class h4-(desocupa ou ocupado)
        var class_elemento_disponibilidade_depois_2 = pega_h4_2.getAttribute('class');
        var class_elemento_disponibilidade_depois_3 = pega_h4_3.getAttribute('class');

        expect(class_elemento_disponibilidade_depois).toEqual("ocupado");
        expect(class_elemento_disponibilidade_depois_2).toEqual("desocupado");
        expect(class_elemento_disponibilidade_depois_3).toEqual("ocupado");
    });
});
