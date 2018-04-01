const Contador = require('./contador');
const errorHandler = require('../common/errorHandler');

Contador.methods(['get', 'post', 'put', 'delete']);
Contador.updateOptions({new : true});
Contador.after('post', errorHandler).after('put', errorHandler)

// Contador.route('count', (req, res, next) => {
//     Contador.count((error, value) => {
//         if(error){
//             res.status(500).json({ erro: [error] });
//         } else {
//             res.json({value});
//         }
//     })
// });

module.exports = Contador;