// Cargando el modulo http
var http = require('http');

//Crando el server
var server = http.createServer(function(req,res){
    res.writeHead(
        200,
        {
            'Content-Type':
        }
    );
});