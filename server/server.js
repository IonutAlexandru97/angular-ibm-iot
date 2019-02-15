var express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require('passport');
var flash  = require('connect-flash');
var cookieParser = require('cookie-parser');
var routes = require('./routes');
var cors = require('cors');
var app = express();


//Configure server
app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//App routes
app.use(routes(express.Router()));


app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Connected on:", app.get('port'));
});