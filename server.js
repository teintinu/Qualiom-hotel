var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.redirect("/hello.html");
});

app.use(express.static(__dirname + '/framework'));

console.log("Iniciando servidor HTTP na porta " + port);
app.listen(port);
