var fs = require("fs");
var host = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var express = require("express");
var mongodb = require('mongodb');
var backend = require('./backend/backend.js');

var ClasseAplicacao=function()
{
  var self=this;
  self.ultimoErro = '';

  
  self.ConfiguraExpress=function()
  {
    console.log('Configurando servidor HTTP');
    self.appex = express();
 
    self.appex.use(self.appex.router); //use both root and other routes below
    self.appex.use(express.static(__dirname + "/Prototipos/Tela_calendario_angular_tabela")); //use static files in ROOT/public folder

    self.appex.get("/", function(request, response){ //root dir
      response.send("Aplicação hotel");    });

    self.appex.get("/erro", function(request, response){ //root dir
      response.send(self.ultimoErro);
    });

	for (var n in backend)
	 (function(nome)
	  {
	    console.log('ativando pacote: '+nome);
        var callback_processa=backend[nome];
        self.appex.post("/"+nome, function(request, response)
	    {
	      processaPacote(request, response, nome, callback_processa);
	    }); 
      }
	 )(n);
	
  };  
  
  self.conecta_banco_dados=function(callback)
  {
  
    var dbServerHost=process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1";
	var dbServerPort=parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT || 27017);
    var dbServer = new mongodb.Server(dbServerHost,dbServerPort);
    self.db = new mongodb.Db('hotel', dbServer, {safe:false, auto_reconnect: true});
    var dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'qualiom';
    var dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'qualiom';

	console.log('mongo.open: server='+dbServerHost+':'+dbServerPort+' user='+dbUser+ ' pwd='+dbPass);
	self.db.open(function(err, db_open){
      if(err){
	    self.ultimoErro=err;
	    console.log('Erro em mongoDB.open: '+err);
	    callback();
	    return;
	  };
       self.db.authenticate(dbUser, dbPass, {authdb: "admin"}, function(err, res){
        if(err){
	      self.ultimoErro=err;
	      console.log('Erro em mongoDB.authenticate: '+err);
	      callback();
	      return;
	    };
		self.db.empresa = self.db.collection('empresa');
		self.db.usuario = self.db.collection('usuario');
		self.db.veiculo = self.db.collection('veiculo');
		self.db.historico = self.db.collection('historico');
		self.db.videos = self.db.collection('videos');
		self.db.atendimento = self.db.collection('atendimento');
		self.db.sms = self.db.collection('sms');
		self.db.sms = self.db.collection('url_videos_cliente');

		self.db.servico = null;
		self.mongodb_ok = true;
        callback();		
      });
    });
  };
  
  self.inicia_servidor=function()
  {
    self.ConfiguraExpress();
    console.log('Iniciando servidor HTTP em ' + host + ':' + port);
    if (!self.mongodb_ok)
        console.log('MONGODB não está funcionando - Não está conectado ao mongoBD');
      self.appex.listen(port, host);
  };
};

var app=new ClasseAplicacao();
app.conecta_banco_dados(app.inicia_servidor);
global.app=app;
global.db=app.db;


function processaPacote(request, response,nome, callback_processa)
{
    console.log(nome);
  var json_text='';
  request.setEncoding('utf8');
  request.on('data', function(chunk) { 
     json_text += chunk;
  });

  request.on('end', function() {
	  try
	  {
	      var obj = JSON.parse(json_text);
	      console.log(nome + ' req=' + JSON.stringify(obj));
	      callback_processa(obj, function (result)
		        {
	        //console.log(nome + ' req=' + JSON.stringify(obj) + " resp=" + JSON.stringify(result));
	        send_response(200, result);
		       },
		       function(err)
		       {
		           console.log(nome + ' req=' + JSON.stringify(obj) + " ERR=" + JSON.stringify(err));
		           send_response(400, err);
			   });
	  }
	  catch(err)
	  {
	      console.log(nome + ' req=' + JSON.stringify(obj) + " throw=" + err.toString());
	      send_response(400, err.message);
	  }
  });
  
  function send_response(status, data)
  {
      var str_json = JSON.stringify(data);
      var utf8_json = new Buffer(str_json, 'utf8');
      
      response.statusCode = status;
      response.set({ 'content-type': 'application/json; charset=utf-8' });
      response.send(utf8_json);
  }  
}
