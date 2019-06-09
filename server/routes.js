const express = require('express');
const router = express.Router();
const userController = require('./controller/user');
const verifyToken = require('./config/jwt');
const chatBotController = require('./controller/chatbot');
const emailController = require('./controller/email');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile',verifyToken.verifyJwtToken, userController.profile);
router.post('/ask', chatBotController.ask)
router.post('/reset', emailController.resetEmail);

router.get('/weather', function(req, res, next){
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=metric&mode=JSON&q=Brasov%2CRO")
    .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
    .header("X-RapidAPI-Key", "32efc61afcmsh9c953d38ad437fap1cd6b2jsne6cc254c273e")
    .end(function (result) {
      res.status(200).json(result);
    });
    })

module.exports = router;