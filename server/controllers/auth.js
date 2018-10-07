Model = require("../models/").users;
auth = require('../config/passport')

module.exports = {
    login(req, res) {
        res.json("/");
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