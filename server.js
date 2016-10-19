// Cargando el modulo http
var http = require('http');

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
server.listen(3000,'127.0.0.1',function(){
    console.log("> Server escuchando en " + "http://127.0.0.1:3000/ ...");
});