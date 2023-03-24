const mongoose = require('mongoose');

const dotenv = require(`dotenv`);
dotenv.config();

const URL = process.env.URL_MONGO;
//const URL = 'mongodb+srv://dubokovic7:37620285@cluster0.inhg1m8.mongodb.net/test';

let connection = null;

module.exports = () => {
    if (connection) {
        return connection
    }
    connection = mongoose.connect(URL, {
        useNewUrlParser: true
    });
};



