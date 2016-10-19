// Cargando el modulo http
var http = require('http');
// Cargar las libreria colors
var colors = require('colors');
// Generando un tema
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// Obteniendo configuraciones
var IP = '127.0.0.1';
var PORT = 3000;

//Crando el server
var server = http.createServer(function(req,res){
    res.writeHead(
        200,
        {
            'Content-Type':'text/plain',
            'Server':'Buho@0.0.0'
        }
    );
    res.write('Hola desde el server...');
    res.end();
});
// Poniendo a escuchar al server
server.listen(PORT,IP,function(){
    console.log("> Server escuchando en ".info + `http://${IP}:${PORT}/ ...`.info);
});