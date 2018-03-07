const Router = require('koa-router');
// const router = new Router();
const Contratos = require('../api/contratos/contratosService');
const express = require('express');

module.exports = function(app){
    // app.use(router.routes()).use(router.allowedMethods);
    const router = express.Router();

    app.use('/api', router);
    

    const contratosService = require('../api/contratos/contratosService');
    contratosService.register(router, '/contratos');

    // const loginService = require('../api/login/loginService');
    loginService.register(router, '/login');
}