var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var Model = require("../models").users;
var bCrypt = require('bcrypt-nodejs');

passport.use('local-signup', new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function (req, email, password, done) {
        var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        Model.findOne({
            where: {
                email: email
            }
        }).then(function (user) {
            if (user) {
                return console.error("That email is already taken");
            } else {
                var userPassword = generateHash(password);
                var data =
                {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    email: req.body.email,
                    password: userPassword,
                };

                Model.create(data).then(function (newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }
));


passport.use(new localStrategy({
    usernameField: "username",
    passwordField: 'password'
},
    function (username, password, done) {
        Model.findOne({
            where: {
                username: username
            }
        })
            .then(function (dbUser) {
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect username"
                    });
                }
                else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password"
                    });
                }
                return done(null, dbUser);
            });
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;