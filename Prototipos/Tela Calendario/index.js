var dias = ['01/11', '02/11', '03/11', '04/11', '05/11'];
var d = new Date();
var quartos;
var suites;
var albergs;
var acomodacoes = [];

$(document).ready(function () {
    $('#example').dataTable({
        "scrollY": 200,
        "scrollX": true
    });
});

$(document).ready(function () {
    var quarto1 = {
        nome: 'quarto1',
        situacao: 'ocupado',
        dataInicio: '01/11',
        dataFim: '04/11',
        qtdeDias: '4'
    };

    var quarto2 = {
        nome: 'quarto2',
        situacao: '',
        dataInicio: '',
        dataFim: '',
        qtdeDias: '0'
    };

    var quarto3 = {
        nome: 'quarto3',
        situacao: 'reservado',
        dataInicio: '03/11',
        dataFim: '05/11',
        qtdeDias: '3'
    };

    var suite1 = {
        nome: 'suite1',
        situacao: '',
        dataInicio: '',
        dataFim: '',
        qtdeDias: '0'
    };

    var alberg = {
        nome: 'alberg',
        situacao: 'reservado',
        dataInicio: '01/11',
        dataFim: '05/11',
        qtdeDias: '1'
    };

    quartos = [quarto1, quarto2, quarto3];
    suites = [suite1];
    albergs = [alberg];
});

$(document).ready(function () {
    for (var i = 0; i < dias.length; i++) {
        var diasCorridos = $('#Dias');
        diasCorridos.append("<th>" + dias[i] + "</th>");
    }
});

$(document).ready(function () {
    for (var i = 0; i < quartos.length; i++) {
        var listaAcomodacoes = $('#acomodacoes');
        listaAcomodacoes.append("<tr id=" + quartos[i].nome + ">" +
            '<td>' + quartos[i].nome + '</td>' +
            "</tr>");
        var cont = quartos[i].qtdeDias;
        while (cont > 0) {
            if (quartos[i].dataInicio == dias[i]) {
                var trIni = $('#' + quartos[i].nome);
                trIni.append('<td>' + quartos[i].situacao + '</td>');
            }
            if (quartos[i].dataFim == dias[i]) {
                var trFim = $('#' + quartos[i].nome);
                trFim.append('<td>' + quartos[i].situacao + '</td>');
            }
            cont--;
        }
    }
    for (var i = 0; i < suites.length; i++) {
        var listaAcomodacoes = $('#acomodacoes');
        listaAcomodacoes.append("<tr id=" + suites[i].nome + ">" +
            '<td>' + suites[i].nome + '</td>' +

            "</tr>");
        var cont = suites[i].qtdeDias;
        while (cont > 0) {
            if (suites[i].dataInicio == dias[i]) {
                var trIni = $('#' + suites[i].nome);
                trIni.append('<td>' + suites[i].situacao + '</td>');
            }
            if (suites[i].dataFim == dias[i]) {
                var trFim = $('#' + suites[i].nome);
                trFim.append('<td>' + suites[i].situacao + '</td>');
            }
            cont--;
        }
    }
    for (var i = 0; i < albergs.length; i++) {
        var listaAcomodacoes = $('#acomodacoes');
        listaAcomodacoes.append("<tr id=" + albergs[i].nome + ">" +
            '<td>' + albergs[i].nome + '</td>' +

            "</tr>");
        var cont = albergs[i].qtdeDias;
        while (cont > 0) {
            if (albergs[i].dataInicio == dias[i]) {
                var trIni = $('#' + albergs[i].nome);
                trIni.append('<td>' + albergs[i].situacao + '</td>');
            }
            if (albergs[i].dataFim == dias[i]) {
                var trFim = $('#' + albergs[i].nome);
                trFim.append('<td>' + albergs[i].situacao + '</td>');
            }
            cont--;
        }
    }
});

