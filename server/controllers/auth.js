Model = require("../models/").users;

module.exports = {
    login(req, res) {
        res.json("/");
    },

    signup(req, res) {
        console.log(req.body);
        Model.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/");
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    },

    logout(req, res) {
        req.logout();
        res.redirect("/");
    },

    getData(req, res) {
        if (!req.user) {
            res.json({});
        }
        else {
            res.json({
                username: req.user.email,
                id: req.user.id
            });
        }
    }
}