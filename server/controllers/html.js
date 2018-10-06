var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = {
    home(req, res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../../public/signup.html"));
    },

    login(req,res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../../public/login.html"));
    }
}