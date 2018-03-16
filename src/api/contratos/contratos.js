const restful = require('node-restful');
const mongoose = restful.mongoose;


const contratoSchema = new mongoose.Schema({
    nome: { type:String, required: [true, 'O nome é obrigatório'] },
    rg: { type:String, required: [true, 'O RG é obrigatório'] },
    cpf: { type: String, required: [true, 'O CPF é Obrigatório']},
    data_nasc: { type: String, required: [true, 'Data de Nascimento Obrigatória'] },
    // mes_nasc: { type: Number, min: 1, max: 12, required: [true, 'Data de Nascimento Obrigatória'] },
    // dia_nasc: { type: Number, min: 1, max: 31, required: [true, 'Data de Nascimento Obrigatória'] },
    sexo: { type:String, required: [true, ' Sexo é Obrigatório '], uppercase: true,
            enum: ['MASCULINO','FEMININO'] },
    confirm_processo: {type: Boolean, default: false },

});

module.exports = restful.model('Contrato', contratoSchema);