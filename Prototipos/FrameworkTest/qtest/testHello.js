checkUrl('http://127.0.0.1:3000/Prototipos/FrameworkTest/fw/hello.html');

test('document.title', function() {

  assert.equal('Olá mundo', document.title);

});

test('TESTa', function() {
  assert.equal('2', '2');
});
