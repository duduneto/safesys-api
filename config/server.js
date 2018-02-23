const BodyParser = require('body-parser');
// const Koa = require('koa');
const express =  require('express');
const logger = require('koa-logger');

const app = express();


app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
// app.use(logger());


const port = 3030;
app.listen(port);
console.log(`Servidor rodando na porta ${port}`);

module.exports = app;