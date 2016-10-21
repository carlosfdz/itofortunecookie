// Cargando el modulo http
var http = require('http');
// Cargando libreri path
var path = require('path');
// Cargando la libreria mime
var mime = require('mime');
// Cargando servidor estatico
var staticServer = require('./internals/static-server');
// Cargando manejador
var handlers = require('./internals/handlers');
// Cargando la libreria colors
var colors = require('colors');
var fs = require('fs');
// Generando un tema
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: ['yellow', 'bgWhite'],
  debug: 'blue',
  error: 'red',
  achivement: 'rainbow'
});
// Obteniendo configruaciones
var config = require('./config/config');
var IP = config.IP;
var PORT = config.PORT;

var counter = 0;
// Creando el server
var server = http.createServer(function(req, res){
    var url = req.url;
    console.log(`> URL solicitada: ${url}`.silly);
    if(url== "/"){
        url = "/index.html";
    }
    if(typeof(handlers[url]) === 'function'){
        handlers[url](req, res);
    }else{
        console.log("> Servimos estaticamente ...");
        staticServer.serve(url, res);
    }
});
// Poniendo a escuchar
// al server
server.listen(PORT,IP,function(){
    console.log("> Server escuchando en ".info +
    `http://${IP}:${PORT}/ ...`.info);
});