const Dependente = require('./dependentes');
const errorHandler = require('../common/errorHandler');

Dependente.methods(['get', 'post', 'put', 'delete']);
Dependente.updateOptions({new : true});
Dependente.after('post', errorHandler).after('put', errorHandler)

// Dependente.route('count', (req, res, next) => {
//     Dependente.count((error, value) => {
//         if(error){
//             res.status(500).json({ erro: [error] });
//         } else {
//             res.json({value});
//         }
//     })
// });

module.exports = Dependente;