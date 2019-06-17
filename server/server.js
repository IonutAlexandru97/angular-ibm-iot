
require('./config/db');
require('./config/passport');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const routes = require('./routes');
const passport = require('passport');
const logger = require('morgan');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   });
app.use(passport.initialize());
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.use('/api', routes);
app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));