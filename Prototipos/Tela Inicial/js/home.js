//estadoAtual
//0 Disponivel
//1 Ocupado

//pedidoEspecial
//0 não
//1 Sim

var tiposDeAcomodacoes = [{
    tipo: 1,
    nome: "Suite"
}, {
    tipo: 2,
    nome: "Normal"
}];


var acomodacoes = [{
    id: "acomodacao01",
    nomeDaAcomodacao: "Quarto 1",
    tipoDeAcomodacao: 1,
    estadoAtual: 1,
    pedidoEspecial: 1,
    hospede: "José Augusto",
    dataInicio: "19/11/2014",
    dataFim: "21/11/2014"
}, {
    id: "acomodacao02",
    nomeDaAcomodacao: "Quarto 2",
    tipoDeAcomodacao: 1,
    estadoAtual: 1,
    pedidoEspecial: 0,
    hospede: "Minoru Gondo",
    dataInicio: "21/11/2014",
    dataFim: "24/11/2014"
}, {
    id: "acomodacao03",
    nomeDaAcomodacao: "Quarto 3",
    tipoDeAcomodacao: 2,
    estadoAtual: 0,
    pedidoEspecial: 0,
    hospede: "Quarto Disponível para hospedes",
    dataInicio: "",
    dataFim: ""
}, {
    id: "acomodacao03",
    nomeDaAcomodacao: "Suite Presidencial",
    tipoDeAcomodacao: 1,
    estadoAtual: 0,
    pedidoEspecial: 0,
    hospede: "Marcello",
    dataInicio: "21/11/2014",
    dataFim: "23/11/2014"
}];

function mostraQuartos() {


    criaCategoriaDeAcomodacoes();

    criaAcomodacoes();
}

function criaAcomodacoes() {

    for (i = 0; i < acomodacoes.length; i++) {
        var divAcomodacao = criaDivAcomodacao();

        var dadosCliente = criaDadosCliente();

        divAcomodacao.append(dadosCliente);


        adicionaAcomodacao(divAcomodacao);
    }
}



function criaCategoriaDeAcomodacoes() {
    for (i = 0; i < tiposDeAcomodacoes.length; i++) {
        var conteudo = $('<div>');
        conteudo.attr('id', tiposDeAcomodacoes[i].tipo);
        conteudo.attr('class', 'categoria');

        var h1 = $("<h1>");
        h1.text(tiposDeAcomodacoes[i].nome);
        conteudo.append(h1);
        $("#divAcomodacoes").append(conteudo);

    }
}

function criaDivAcomodacao() {
    //cria conteudoAcomodação
    var divAcomodacao = $('<div>');
    divAcomodacao.attr('class', 'acomodacao');
    divAcomodacao.attr('id', acomodacoes[i].id);
    divAcomodacao.attr('onclick', "mostraOpcaoAcomodacao(this)");
    var h4 = $("<h4>");

    if (acomodacoes[i].estadoAtual == 0)
        h4.attr("class", "desocupado");
    else
        h4.attr("class", "ocupado");
    h4.text(acomodacoes[i].nomeDaAcomodacao);

    divAcomodacao.append(h4);

    //Se tiver pedido especial
    if (acomodacoes[i].pedidoEspecial == 1) {
        var pedidoEspecial = $('<div>');
        pedidoEspecial.attr("class", "pedidoEspecial");

        var span = $("<span>");
        span.text("!");

        pedidoEspecial.append(span);
        divAcomodacao.append(pedidoEspecial);
    }


    return divAcomodacao;
}

function criaDadosCliente() {
    //cria dados do cliente
    var dadosCliente = $('<div>');
    dadosCliente.attr("class", "dadosCliente");
    var nomeHospede = $("<span>");


    nomeHospede.text(acomodacoes[i].hospede);

    dadosCliente.append(nomeHospede);

    dadosCliente.append("<br/>");
    var dataHospedagem = $("<span>");
    dataHospedagem.text(acomodacoes[i].dataInicio + " à " + acomodacoes[i].dataFim);
    var b = $("<b>");

    b.html(dataHospedagem);
    dadosCliente.append(b);


    return dadosCliente;
}

function adicionaAcomodacao(divAcomodacao) {
    //Se tiver pedido especial adiciono na categoria pedido especial
    var dataInicio = acomodacoes[i].dataInicio;
    var dataFim = acomodacoes[i].dataFim;
    var dataAtual = new Date();

    var dia = dataAtual.getDate();
    if (dia.length == 1) {
        var diaString = "0" + dia.toString();
    }
    var mes = dataAtual.getMonth() + 1;
    if (mes.length == 1) {
        var mesString = "0" + mes.toString();
    }

    var dataAtualString = dia + "/" + mes + "/" + dataAtual.getFullYear();


    if (acomodacoes[i].pedidoEspecial == 1) {
        colocaDivEmPedidosEspeciais(divAcomodacao);
    } else if ((dataInicio == dataAtualString) && (acomodacoes[i].estadoAtual == 0) || dataFim == dataAtualString) {
        $("#dataAtualCheckinCheckout").text("Check-in / Check-out para hoje dia " + dataAtualString);
        colocaDivEmCheckinCheckout(divAcomodacao);
    } else {
        $("#" + acomodacoes[i].tipoDeAcomodacao).append(divAcomodacao);
    }
}

function colocaDivEmCheckinCheckout(divAcomodacao) {
    if (!$("#0").length) {
        var conteudo = $('<div>');
        conteudo.attr('id', "0");
        conteudo.attr('class', 'categoria');


        var h1 = $("<h1>");
        h1.text("Pedidos Especiais");
        conteudo.append(h1);


        $("#divAcomodacoes").prepend(conteudo);
    }
    $("#check-in-check-out").append(divAcomodacao);
}

function colocaDivEmPedidosEspeciais(divAcomodacao) {
    if (!$("#0").length) {
        var conteudo = $('<div>');
        conteudo.attr('id', "0");
        conteudo.attr('class', 'categoria');


        var h1 = $("<h1>");
        h1.text("Pedidos Especiais");
        conteudo.append(h1);

        $("#divAcomodacoes").prepend(conteudo);
    }
    $("#0").append(divAcomodacao);
}

mostraQuartos();