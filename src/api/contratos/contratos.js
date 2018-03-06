const restful = require('node-restful');
const mongoose = restful.mongoose;


const contratoSchema = new mongoose.Schema({
    nome: { type:String, required: [true, 'O nome é obrigatório'] },
    cpf: { type: String, required: true},
    data_nasc: { type: Number, min: 1900, max: 2018 }
});

module.exports = restful.model('Contrato', contratoSchema);