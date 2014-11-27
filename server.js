var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var port = parseInt(process.env.PORT, 10) || 8080;

app.get("/", function (req, res) {
  res.redirect("/index.html");
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/Prototipos/Tela_calendario_angular_tabela'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Iniciando servidor HTTP em http://localhost:" + port);
app.listen(port);


