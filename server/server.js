
require('./config/config');
require('./config/db');
require('./config/passport');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const routes = require('./routes');
const passport = require('passport');
const logger = require('morgan');
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(logger('dev'));

////error handler
//app.use((err, req, res, next) => {
//    if (err.name === 'ValidationError') {
//        var valErrors = [];
//        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
//        res.status(422).send(valErrors)
//    }
//});

app.use('/api', routes);
app.listen(port, () => console.log(`Server started at port : ${port}`));