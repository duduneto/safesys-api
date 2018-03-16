const Contratos = require('./contratos');
const errorHandler = require('../common/errorHandler');

Contratos.methods(['get', 'post', 'put', 'delete']);
Contratos.updateOptions({new : true});
Contratos.after('post', errorHandler).after('put', errorHandler)

// Contratos.route('count', (req, res, next) => {
//     Contratos.count((error, value) => {
//         if(error){
//             res.status(500).json({ erro: [error] });
//         } else {
//             res.json({value});
//         }
//     })
// });

module.exports = Contratos;