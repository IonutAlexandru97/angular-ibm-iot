var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = {
    home(req, res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../../client/index.html"));
    },

    signUp(req, res){
        if(req.user){
            res.redirect("/register")
        }
        res.sendFile(path.join(__dirname, "../../client/signup.html"));
    },

    login(req,res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../../client/login.html"));
    },

    members(req, res){
        if(req.user){
            res.redirect('/members');
        }
        res.sendFile(path.join(__dirname, "../../client/members.html"));
    }
}