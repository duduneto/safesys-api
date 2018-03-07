const restful = require('node-restful');
const mongoose = restful.mongoose;


const contratoSchema = new mongoose.Schema({
    nome: { type:String, required: [true, 'O nome é obrigatório'] },
    rg: { type:String, required: [true, 'O RG é obrigatório'] },
    cpf: { type: String, required: [true, 'O CPF é Obrigatório']},
    ano_nasc: { type: Number, min: 1900, max: 2018, required: [true, 'Data de Nascimento Obrigatória'] },
    sexo: { type:String, required: [true, ' Sexo é Obrigatório '], uppercase: true,
            enum: ['MASCULINO','FEMININO'] }

});

module.exports = restful.model('Contrato', contratoSchema);