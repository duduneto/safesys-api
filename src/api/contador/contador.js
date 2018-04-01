const restful = require('node-restful');
const mongoose = restful.mongoose;


const contadorSchema = new mongoose.Schema({
    sob_analise_corretor: { type:Number },
    sob_analise: { type:Number },
    enviado_seguradora: { type: Number},
    retornou_seguradora: { type: Number},
    com_restricoes: {type: Number},
    negado: {type: Number},
    estornou_pgto:{type: Number},
    cancelado: { type:Number },
    reaberto: { type:Number },
    reanalise_mantida: { type: Number},
    suspenso: { type: Number},
    transferido: {type: Number},
    devolvido: {type: Number},
    emitido_pgto: {type: Number}

});

module.exports = restful.model('Contador', contadorSchema);