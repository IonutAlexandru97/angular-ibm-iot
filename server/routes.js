const express = require('express');
const router = express.Router();
const userController = require('./controller/user');
const verifyToken = require('./config/jwt');
const chatBotController = require('./controller/chatbot');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile',verifyToken.verifyJwtToken, userController.profile);
router.post('/ask', chatBotController.ask)


module.exports = router;