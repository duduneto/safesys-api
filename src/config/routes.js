const Router = require('koa-router');
// const router = new Router();

const express = require('express');
const auth = require('./auth');

module.exports = function(app){
    
    // Rotas Protegidas por Token

    const protectedApi = express.Router();
    app.use('/api', protectedApi);

    protectedApi.use(auth);   //<-- Descomentado para uso do POSTMAN

    const Contratos = require('../api/contratos/contratosService');
    Contratos.register(protectedApi, '/contratos');


    // Rotas Abertas

    const openApi = express.Router();
    app.use('/oapi', openApi);

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);

    
    // Excluir Linhas Quando Finalizar
    const User = require('../api/user/userService');
    User.register(openApi, '/usuario');
}