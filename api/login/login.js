const restful = require('node-restful');
const mongoose = restful.mongoose;

const loginSchema = new mongoose.Schema({
    email: { type: String, required: [ true, 'O email é obrigatório'] },
    password: { type: String, required: [ true, 'A senha é obrigatória'] }
});

module.exports = restful.model('Login', loginSchema);