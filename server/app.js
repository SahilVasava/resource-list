require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const helmet = require('helmet')
const passport = require('passport');

const { authRoute, usersRoute, resourceListRoute } = require('./routes');

const db = require('./db');

const app = express();


// Middlewares
app.use(helmet())
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Routes
app.use('/auth', authRoute);
app.use('/user', usersRoute);
app.use('/list', resourceListRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handling
app.use((err, req, res, next) => {
    console.log("err handler", err);
    res.status(err.status || 500);
    res.json({
        status: "error",
        statusCode: err.status || 500,
        message: err.message
    })
});

module.exports = app;