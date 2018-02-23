const Contratos = require('./contratos');

Contratos.methods(['get', 'post', 'put', 'delete']);
Contratos.updateOptions({new : true});

module.exports = Contratos;