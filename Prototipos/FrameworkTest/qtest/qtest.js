var testcases = [];
var testcases_a_executar = [];
var testcase_executando = null;

function declara_conjunto_teste(nome, url) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  span.textContent='';
  var testcase = {
    nome: nome,
    url: url,
    status: 'pendente',
    li: li,
    span: span
  };
  li.textContent = nome;
  li.setAttribute('class', 'pendente');
  li.addEventListener('click', function() {
    if (testcase.status == 'pendente')
      testcase.status = 'nao_executar';
    else
      testcase.status = 'pendente';
    li.setAttribute('class', testcase.status);
  });
  document.getElementById('testcases').appendChild(li);
  li.appendChild(span);
  testcases.push(testcase);
}

function executa_conjunto_teste(testcase) {
  testcase.li.setAttribute('class', 'executando');
  var teste_frame = document.getElementById('runner');
  teste_frame.onload = null;
  teste_frame.src = testcase.url;
  teste_frame.onload = function() {
    teste_frame.contentWindow.postMessage({
        acao: 'executa_teste',
        nome: testcase.nome,
        url: testcase.url
      },
      'http://127.0.0.1:3000');
  }
}

function executarTodos() {
  testcases_a_executar = [];
  testcases.forEach(function(t) {
    testcases_a_executar.push(t);
  });
  executa_conjuntos_de_testes();
}

function executarSelecionados() {
  testcases_a_executar = [];
  testcases.forEach(function(t) {
    if (t.status != 'nao_executar')
      testcases_a_executar.push(t);
  });
  executa_conjuntos_de_testes();
}

function executarFalharam() {
  testcases_a_executar = [];
  testcases.forEach(function(t) {
    if (t.status == 'falha')
      testcases_a_executar.push(t);
  });
  executa_conjuntos_de_testes();
}

window.addEventListener('load', function() {
  declara_conjunto_teste('testHello', 'http://127.0.0.1:3000/Prototipos/FrameworkTest/fw/hello.html')
  declara_conjunto_teste('testHello2', 'http://127.0.0.1:3000/Prototipos/FrameworkTest/fw/hello.html')
  declara_conjunto_teste('testHotel1', 'http://127.0.0.1:3000/Prototipos/Angular_SideNav/mat.html')
  declara_conjunto_teste('testHotel2', 'http://127.0.0.1:3000/Prototipos/Angular_SideNav/mat.html')
});

function executa_conjuntos_de_testes() {
  if (testcases_a_executar.length == 0)
    return;
  if (testcase_executando != null)
    return;
  testcase_executando = testcases_a_executar.shift();
  testcase_executando.span.textContent='';
  executa_conjunto_teste(testcase_executando);
}

function terminou_execucao_testcase(testcase) {
  testcase_executando.li.setAttribute('class', testcase.status);
  if (testcase.falhas.length>0)
    testcase_executando.span.textContent = JSON.stringify(testcase.falhas);
  testcase_executando.status = testcase.status;
  testcase_executando.falhas = testcase.falhas;
  testcase_executando = null;
  executa_conjuntos_de_testes();
}

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  var mensagem = JSON.parse(event.data);
  //if (event.origin !== testcase_executando.url)
  // return;
  if (mensagem.acao == 'terminou')
    setTimeout(function() {
      terminou_execucao_testcase(mensagem);
    }, 0);
}
