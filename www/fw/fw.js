function aplicacao_carregada(){

}

function aplicacao() {
    var app = {
        titulo: '',
        controlador: cria_controlador(this),
        visualizador: cria_visualizador(this),
        mostra: function(ctrl, view) {
            window.addEventListener('load', function() {
                document.title = app.titulo;
                var div = document.getElementById('app');
                div.innerHTML = '<h4>' + app.titulo + '</h4>';
                view.desenhe(ctrl, div);
                aplicacao_carregada();
            });
        }
    };
    return app;

    function cria_controlador() {
        var ctrl = {
            escopo: null
        };
        return ctrl;
    }

    function cria_visualizador() {
        var view = {
            conteudo: [],
            ligacoes: [],
            entra: function(label, variavel) {
                view.conteudo.push({
                    label: label,
                    variavel: variavel,
                    tipo: 'entra'
                });
            },
            mostra: function(label) {
                view.conteudo.push({
                    label: label,
                    tipo: 'mostra'
                });
            },
            desenhe: function(ctrl, div) {
                view.conteudo.forEach(function(item) {
                    var fn = 'desenhe_item_' + item.tipo;
                    view[fn](item, ctrl, div);
                });
            },
            desenhe_item_mostra: function(item, ctrl, div) {
                var e = document.createElement('div')
                var s = item.label; //Bem vindo, {{nome}}
                var i = s.indexOf('{{'); //012345678901
                while (i >= 0) {
                    // texto antes da variavel
                    var antes = s.substr(0, i);
                    var txt = document.createElement('span')
                    txt.textContent = antes;
                    e.appendChild(txt);

                    // variavel
                    s = s.substr(i + 2);
                    i = s.indexOf('}}');
                    var variavel = s.substr(0, i);

                    var span_variavel = document.createElement('span_variavel')
                    span_variavel.textContent = ctrl.escopo[variavel];
                    e.appendChild(span_variavel);
                    view.ligacoes.push({
                        variavel: variavel,
                        elemento: span_variavel,
                        tipo: 'text'
                    });
                    s = s.substr(i + 2);
                    i = s.indexOf('{{');
                }

                // texto depos da variavel
                if (s != '') {
                    var txt = document.createElement('span')
                    txt.textContent = s;
                    e.appendChild(txt);
                }
                div.appendChild(e);
                return e;
            },
            desenhe_item_entra: function(item, ctrl, div) {
                var e = view.desenhe_item_mostra(item, ctrl, div);
                var input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('value', ctrl.escopo[item.variavel]);
                input.addEventListener('keyup', function(ev) {
                    ctrl.escopo[item.variavel] = input.value;
                    view.atualiza_ligacao(item.variavel, input);
                });
                view.ligacoes.push({
                    variavel: item.variavel,
                    elemento: input,
                    tipo: 'value'
                });
                e.appendChild(input);
            },
            atualiza_ligacao: function(nome_ligacao, disparador) {
                view.ligacoes.forEach(function(ligacao) {
                    if (ligacao.variavel != nome_ligacao) return;
                    if (ligacao.tipo == 'text') {
                        ligacao.elemento.textContent = ctrl.escopo[nome_ligacao];
                    }
                    else if (ligacao.tipo == 'value') {
                        //    ligacao.elemento.setAttribute('value', ctrl.escopo[item.variavel]);
                    }
                })
            }
        };
        return view;
    }
}
