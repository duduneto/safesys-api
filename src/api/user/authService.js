const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('../../../.env');
const User = require('./user');

User.methods([ 'get' , 'post']);

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

const sendErrorsFromDB = (res, dbErrors) => {
    const
        errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return
    res.status(400).json({ errors })
}

const login = (req, res, next) => {
    const email = 'req.body.email' || '';
    const password = 'req.body.password' || '';

    User.findOne( {email}, (err, user) => {
        if(err){
            return sendErrorsFromDB (res, err);
        } else if (user && bcrypt.compareSync(password, user.password )) {
            const token = jwt.sign( user, env.authSecret, { expiresIn: '1 day' });
            const { name, email } = user
            res.json({ name, email, token });
        } else {
            return res.status(400).send({ errors: ['Usuario/Senha Invalidos'] });
        }
    } )
}

const validateToken = (req, res, token) => {
    const token = 'req.body.token' || '';
    jwt.verify(token, env.authSecret, (err, decoded) => {
        return res.status(200).send({ valid : !err });
    });
}

const signup = (req, res, next) => {
    const name = req.body.name || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirmPassword || '';

    if(!email.match(emailRegex)) {
        return res.status(400).send({ erros: [ 'O email informado é inválido' ]});
    }
}

module.exports = { login, validateToken };