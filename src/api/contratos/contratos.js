const restful = require('node-restful');
const mongoose = restful.mongoose;


const contratoSchema = new mongoose.Schema({
    nome: { type:String, required: [true, 'O nome é obrigatório'] },
    rg: { type:String },
    cpf: { type: String, required: [true, 'O CPF é Obrigatório']},

    data_nasc: { type: String, required: [true, 'Data de Nascimento Obrigatória'] },
    data_sinistro: {type: String, required: [true, 'Data do Sinistro Obrigatório'] },
    status: {type: String},
    tel:{type: String, required:[true, 'Telefone é obrigatório']},
    natureza_processo:{type: String, required:[true, 'Natureza do Processo é obrigatória'],
            enum:['D.A.M.S', 'Invalidez', 'Morte']},
    sexo: { type:String, required: [true, ' Sexo é Obrigatório '], uppercase: true,
            enum: ['MASCULINO','FEMININO'] },
    confirm_processo: {type: Boolean, default: false },

});

module.exports = restful.model('Contrato', contratoSchema);