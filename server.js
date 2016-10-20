// Cargando el modulo http
var http = require('http');
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
// Creando el server
var server = http.createServer(function(req,res){
    var path = req.url;
    console.log(`> URL solicitada: ${path}`.silly);
    if(path == '/index' || path == '/index.html'){
        path = `static/index.html`;
        fs.readFile(path, 'utf8', function(err, content){
            if(err){
                throw err;
            }
            res.writeHead(
                200,
                {
                    'Content-Type': 'text/html',
                    'Server': 'Buho@0.0.2'
                }
            );
            res.end(content);
        });
    } else {
        res.writeHead(
            200,
            {
                'Content-Type': 'text/html',
                'Server': 'Buho@0.0.2'
            }
        );
        res.end('<marquee><h1 style="color: orange">EN CONSTRUCCION!!!</h1></marquee>');
    }
});
// Poniendo a escuchar
// al server
server.listen(PORT,IP,function(){
    console.log("> Server escuchando en ".info +
    `http://${IP}:${PORT}/ ...`.info);
});