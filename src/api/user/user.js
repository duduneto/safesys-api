const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true },
    cpf: { type: String, default: '' },
    tel: { type: String, default: '' },
    adm: {type: Boolean, default: false }
});

module.exports = restful.model('User', userSchema);