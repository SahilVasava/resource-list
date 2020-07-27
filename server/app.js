require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const helmet = require('helmet')
const passport = require('passport');

const { authRoute } = require('./routes');

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



module.exports = app;