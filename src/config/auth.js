const jwt = require('jsonwebtoken');
const env = require('../../.env');

module.exports = (req, res, next) => {



    if(req.method === 'OPTIONS'){
        next()
    } else {
        const token = req.headers.token || req.body.token || req.query.token || req.headers['authorization'];

        if(!token){
            
            return res.status(403).send( { errors: ["Nenhum token encontrado"] } );
        }

        jwt.verify(token, env.authSecret , (err, decoded) => {
            if(err){
                return res.status(403).send( { errors: ['Falha na autenticação do Token'] } );
            } else{
                req.decoded = decoded;
                next()
            }
        });
    }
}