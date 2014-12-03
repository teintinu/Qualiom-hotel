checkUrl('http://localhost:8080/qtest/qtest2.html');

test('document.title', function() {

    assert.equal('Testador', document.title);

});


test('testa Hello', function(done) {

    testcases.forEach(function(t) {
        if (t.nome == 'testHello')
            t.status = 'pendente';
        else
            t.status = 'nao_executar';
    });

    var bkp = terminou_execucao_testcase;

    terminou_execucao_testcase = function(testcase) {
        bkp(testcase);
        if (testcases_a_executar.length == 0)
            done();
    };

    executarSelecionados();
});


setTimeout(function() {
    aplicacao_carregada();
}, 100)