const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

module.exports = {
    register,
    login, 
    profile
}

function register(req, res, next) {
    var user = new User();
    user.username = req.body.username;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err) => {
        if (!err) {
            var token;
            token = user.generateJwt();
            res.status(200).json({
                "token": token
            })
        } else {
            if (err.code == 11000) {
                res.status(422).send(['Duplicate email adress found!']);
            } else {
                return next(err);
            }
        }
    });
}

function login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(404).json(err);
        if (user) return res.status(200).json({ "token": user.generateJwt() });
        else return res.status(401).json(info);
    })(req, res);
}

function profile(req, res, next) {
    User.findOne({ _id: req._id },
        (err, user) => {
            if(!user) return res.status(404).json({ status: false, message: 'User record not found!'});
            else return res.status(200).json(user);
        });
}
