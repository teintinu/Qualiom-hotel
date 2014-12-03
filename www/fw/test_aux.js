aplicacao_carregada = function() {
    setTimeout(function() {
        execucao_testunits()
    }, 300);
};

window.addEventListener("message", receiveMessageFromTestCase, false);

function receiveMessageFromTestCase(event) {
    if (event.origin !== "http://localhost:8080")
        return;
    var msg = JSON.parse(event.data);
    if (msg.acao == 'executa_teste')
        setTimeout(function() {
            abre_conjunto_testes(msg.nome, msg.url);
        }, 0);
}

var testcase = {};

function abre_conjunto_testes(nome, url) {
    testcase = {
        nome: nome,
        url: url
    };
    var script = document.createElement('script');
    script.src = '/qtest/' + nome + '.js';
    document.head.appendChild(script);
}

var assert_count = 0;

function fail(msg) {
    throw {
        message: msg
    };
}

var assert = {
    equal: function(a, b, msg) {
        var sa = JSON.stringify(a);
        var sb = JSON.stringify(b);
        if (sa != sb)
            fail(msg + ' a=' + sa + ' b=' + sb);
        assert_count++;
    }
};

var testunits = [];
var testunits_falha = [];
var testunit_executando = null;

function checkUrl(url) {
    testunits.push({
        nome: 'checkUrl',
        func: function() {
            assert.equal(window.location.href, url, 'url invalida');
        },
        status: 'pendente'
    });
}

function test(nome, fn) {
    testunits.push({
        nome: nome,
        func: fn,
        status: 'pendente'
    });
}


function execucao_testunits() {

    if (testunits.length == 0)
        terminou_execucao_testunits();
    else {
        testunit_executando = testunits.shift();
        executa_teste_unit(testunit_executando);
    }
}

function executa_teste_unit(testunit) {

    var eh_async = testunit.func.toString().indexOf('(done)') > 0; // TODO melhorar isso

    testunit.status = 'executando';
    try {
        if (eh_async) {
            testunit.func(function(erro) {
                if (erro) {
                    testunit.status = 'falha';
                    testunit.message = erro;
                    testunits_falha.push(testunit);
                } else
                    testunit.status = 'sucesso';
                execucao_testunits();
            });
        } else {
            testunit.func();
            testunit.status = 'sucesso';
        }
    } catch (e) {
        testunit.status = 'falha';
        testunit.message = e.message;
        testunits_falha.push(testunit);
    }
    if (!eh_async)
        execucao_testunits();
}

function terminou_execucao_testunits() {
    var mensagem = {
        acao: 'terminou',
        nome: testcase.nome,
        url: testcase.url,
        assert_count: assert_count
    };
    if (testunits_falha.length == 0) {
        mensagem.status = 'sucesso';
        mensagem.falhas = [];
    } else {
        mensagem.status = 'falha';
        mensagem.falhas = testunits_falha;

    }
    var mensagemJson = JSON.stringify(mensagem);
    window.parent.postMessage(mensagemJson,
        testcase.url);
}