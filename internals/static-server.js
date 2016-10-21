// Cargar Librerias
var fs = require('fs'),
    config = require('../config/config.js'),
    mime =  require('mime'),
    path = require('path');
// Exportar funcionalidad de
// server estatico de archivos
exports.serve = function(url, res){
    var urlPath = path.resolve(config.STATIC_PATH + url);        
    // Exratyendo la extencion de lo que
    // vamos a servir
    var extname = path.extname(urlPath);
    // Seleccionar el contet-type con base
    // en el extname
    var contentType = mime.lookup(urlPath);
    fs.exists(urlPath,function(exists){
        if(!exists){
            // No  existe
            res.writeHead(404,{
                'Content-Type':'text/html'
            });
            res.end('<h1>404 NOT FOUND... :(</h1>');
        } else{
            // Si existe
            // Leemos el archivo y lo servimos
            fs.readFile(urlPath,function(err, content){
                if(err){
                    res.writeHead(500,{
                        'Content-Type':'text/html'
                    });
                    res.end('<h1 style="color: red">500 ERROR</h1>');
                }else{
                    // Si pudo leer el archivo
                    res.writeHead(200,{
                        'Content-Type':contentType
                    });
                    res.end(content);
                }
            });
        }
    });
};