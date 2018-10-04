var express = require('express');
var  routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();


//App routes
app.use(routes(express.Router()));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Connected on:", app.get('port'));
});