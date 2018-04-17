const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const env = require('../../../.env');
const User = require('./user');
// const getUser = require('./getUser');

User.methods([ 'get' , 'post']);

const emailRegex = /\S+@\S+\.\S+/;
// const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
const passwordRegex = /\d/;


const sendErrorsFromDB = (res, dbErrors) => {
    const
        errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return
    res.status(400).json({ errors })
}



const login = (req, res, next) => {
    console.log(req.body)
    const email = req.body.email || '';
    const password = req.body.password || '';

    // const salt = bcrypt.genSaltSync();
    // const passwordHasheado = bcrypt.hashSync(password, salt);
    
    

    User.findOne( {email}, (err, user) => {
        if(err){
            return sendErrorsFromDB (res, err);
            
        } else if (user && bcrypt.compareSync(password, user.password) ) {
            
            const token = jwt.sign( {user} , process.env.AUTH_SECRET , { expiresIn: '1 day' });
            
            const { name, email, adm } = user
            res.json({ name, email, token, adm });

            // return res.status(200).send({ token : "Acharam um Token" ,  usuario: user, tokenzim: token });
            
        } else {
            return res.status(400).send({ errors: ['DEU RUIM'] });
            
        }
    });
}

// const login = (req, res, next) => {
    
//     const email = 'req.body.email' || '';
//     const password = 'req.body.password' || '';

//     if(!email || !password){
//         return res.status(400).send({ errors: ['Usuario/Senha Invalidos'] } );
//     }
//     const user = getUser(email, password);
//     const token = jwt.sign(user, env, { expiresIn: '1 day' });
//     return {
//         token : token,
//     };
// };

const validateToken = (req, res, token) => {
    token = req.body.token || '';
    jwt.verify(token, process.env.AUTH_SECRET , (err, decoded) => {
        return res.status(200).send({ valid : !err });
    });
}

const signup = (req, res, next) => {
    const name = req.body.name || '';
    const emailNew = req.body.emailNew || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirmPassword || '';
    const cpf = req.body.cpf || '';
    const tel = req.body.tel || '';
    var adm = req.body.adm || '';
    const admEmail = req.body.admEmail || '';
    const admPassword = req.body.admPassword || '';
    var email = '';
    console.log(name, emailNew, password, confirmPassword, cpf, tel, adm, admEmail, admPassword)
    

    if( adm == '0'){
        adm = false
    } else {
        adm = true
    }
    console.log(adm, typeof(adm))

    email = admEmail;
    if(!email.match(emailRegex)) {
        return res.status(400).send({ erros: [ 'O email informado é inválido' ]});
    }
    if(!password.match(passwordRegex)){
        return res.status(400).send( { errors: ['Sua senha precisa obedecer as regras de caracteres'] } )
    }

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    // if(!bcrypt.compareSync(confirmPassword, passwordHash))

    if(!(password == confirmPassword)){
        return res.status(400).send( { errors: ['Senhas não conferem'] } )
    }
    User.findOne( {email}, (err, user) => {
        if(err){
            return sendErrorsFromDB (res, err);
            
        } else if (user && bcrypt.compareSync(admPassword, user.password) ) {
            if(user.adm === true){
                email = emailNew
                User.findOne({email}, (err, user) => {
                        if(err){
                            return sendErrorsFromDB(res, err);
                        } else if(user){
                            return res.status(400).send({error:['Usuário já cadastrado']})
                        } else {
                            
                            const newUser = new User({name, email, password: passwordHash, cpf, tel, adm});
                            newUser.save(err => {
                                if(err){
                                    return sendErrorsFromDB(res, err);
                                    res.status(400).send({ error:['Usuário não cadastrado']})
                                } 
                                else {
                                    res.status(201).send({msg: ['Usuário Cadastrado com Sucesso']})
                                }
                            })
                        }
                    });
            } else{
                return res.status(403).send({ error: ['O Usuário não possui autorização para Criar a Conta']})
            }
            // const { name, email, adm } = user
            // res.json({ name, email, token, adm });

            // return res.status(200).send({ token : "Acharam um Token" ,  usuario: user, tokenzim: token });
            
        } else {
            return res.status(400).send({ errors: ['Não Achou o Usuario que Criou'] });
            
        }
    });

    // 
}

module.exports = { login, signup, validateToken };