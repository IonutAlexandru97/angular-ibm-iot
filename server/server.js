var express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require('passport');
var routes = require('./routes');
var cors = require('cors');
var app = express();


//Configure server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//App routes
app.use(routes(express.Router()));


app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Connected on:", app.get('port'));
});