/**
 * author: Refaat
 * this module exports a load function for
 * initializing the web application
 */

// import environment variables
require('dotenv').config({path: '.././.env'});

// import libaries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//import router
const logRouter = require('../routes/log-router');
const authRouter = require('../routes/auth-router');

const load = (app) => {
    // mongodb connection
    mongoose.connect(process.env.MONGODB_URI)
        .then((connection) => console.log('connected to the database'))
        .catch((error) => console.log(error));

    // setup
    app.use(cookieParser({
        secret: 'keyboard cat'
    }));

    // middleware
    app.use(cors());
    app.use(express.json());

    // initialize router
    app.use(logRouter);
    app.use(authRouter);
}


module.exports = { load }