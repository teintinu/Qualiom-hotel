var app = aplicacao();

app.titulo = 'Olá mundo';

var ctrl = app.controlador;
var view = app.visualizador;

ctrl.escopo = {
    nome: 'Maria'
};

view.entra('Digite seu nome', 'nome');
view.mostra('Bem vindo, {{nome}}')

app.mostra(ctrl, view);



