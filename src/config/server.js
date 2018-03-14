const BodyParser = require('body-parser');
// const Koa = require('koa');
const express =  require('express');
const logger = require('koa-logger');
const cors = require('cors');

const app = express();
// const allowCors = require('./cors');


app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors());
// app.use(logger());


const port = 3030;
app.listen(process.env.PORT || port, function() {
    console.log(`BACKEND is running on port ${port}.`)
});


module.exports = app;