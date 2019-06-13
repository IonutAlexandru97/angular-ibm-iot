
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

const PORT = process.env.PORT || 3000;

app.use('/api', routes);
app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));