const restful = require('node-restful');
const mongoose = restful.mongoose;


const dependenteSchema = new mongoose.Schema({
    nome: { type:String, required: [true, 'O nome é obrigatório'] },
    rg: { type:String },
    cpf: { type: String, required: [true, 'O CPF é Obrigatório']},
    data_nasc: { type: String, required: [true, 'Data de Nascimento Obrigatória'] },
    tel:{type: String, required:[true, 'Telefone é obrigatório']},
    sexo: { type:String, required: [true, ' Sexo é Obrigatório '], uppercase: true,
            enum: ['MASCULINO','FEMININO'] },
    segurado_nome:{type: String, required:[true, 'Nome do Segurado é Obrigatório']},
    segurado_cpf:{type: String, required:[true, 'Cpf do Segurado é Obrigatório']}

});

module.exports = restful.model('Dependente', dependenteSchema);