var path = require('path'),
    fs = require('fs');

// Creando manejadores
var _getFortune = function(req, res){
    res.end("Tu fortuna es: Come menos y te ira mejor...");
};
var _otro = function(req, res){
    res.end("Uno mas de Handlers");
};
// Creando objeto manejadores
var handler = {};
// Registro de manejadores
handler['/getfortune'] = _getFortune;
handler['/ito/tecnm'] = _otro;
// Exportando objeto manejador
module.exports = handler;