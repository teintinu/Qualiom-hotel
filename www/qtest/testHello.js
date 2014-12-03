checkUrl('http://hotel-josefernandotolentino.c9.io/fw/hello.html');

test('document.title', function() {

  assert.equal('Olá mundo', document.title);

});

test('TESTa', function() {
  assert.equal('2', '2');
});

test('Teste assincrono', function(done) {
  setTimeout(function() {
    assert.equal('2', '2');
    done();
  });
});
