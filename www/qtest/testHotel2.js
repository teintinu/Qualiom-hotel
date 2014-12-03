checkUrl('http://127.0.0.1:3000/Prototipos/Angular_SideNav/mat.html#/elementos');

test('Checkin / Checkout', function() {
        var acomodacao = document.getElementsByClassName("acomodacao")[0];
        var h4 = acomodacao.getElementsByTagName("h4")[0];
        var class_elemento_disponibilidade_Antes = h4.getAttribute('class');
        assert.equal(class_elemento_disponibilidade_Antes, "desocupado");
    });