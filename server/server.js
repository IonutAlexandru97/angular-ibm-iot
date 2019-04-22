const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = morgan("dev");
const cors = require('cors');
const app = express()
const port = 3000


import UsersApi from './api/users'
import Auth from './general/middleware';

app.use(cors());
app.options('*', cors());
app.use(logger);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Users API
app.get('/api/users/profile', Auth.verifyToken, UsersApi.profile);
app.get('/api/users/:id', Auth.verifyToken, UsersApi.getById);
app.get('/api/users/all', Auth.verifyToken, UsersApi.getAll);
app.post('/api/users/register', UsersApi.create);
app.post('/api/users/login', UsersApi.login);


app.listen(process.env.PORT || port, () => console.log(`Server started at http://localhost:${port}`));