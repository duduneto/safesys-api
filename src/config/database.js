const mongoose = require('mongoose');


const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/safesys'
module.exports = mongoose.connect(url);