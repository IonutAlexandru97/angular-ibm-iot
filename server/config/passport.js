var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var db = require("../models");


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.users.findById(id).then(function (user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});

passport.use('local-signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function (req, email, password, done) {
        process.nextTick(function () {
            db.users.findOne({
                where: {
                    email: email
                }
            })
                .then(function (user, err) {
                    if (err) {
                        console.log("err", err)
                        return done(err);
                    }
                    if (user) {
                        console.log('signupMessage', 'This email is already taken.');
                        return done(null, false, req.flash('signupMessage', 'This email is already taken.'));
                    }
                    else {
                        db.users.create({
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            username: req.body.username,
                            email: req.body.email,
                            password: db.users.generateHash(password)
                        })
                            .then(function (dbUser) {
                                return done(null, dbUser);
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    }
                });
        });
    }));


passport.use('local-login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function (req, email, password, done) {
        db.users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user, err){
            (!user.validPassword(req.body.password));
            if(!user){
                console.log("No user found");
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }
            if(user && !user.validPassword(req.body.password)){
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password, please try again!'));
            }
            return done(null, user);
        });
    }
));

module.exports = passport;