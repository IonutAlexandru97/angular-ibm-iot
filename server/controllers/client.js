var path = require("path");

module.exports = {
    home(req, res){
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isLoggedin: req.isAuthenticated()
            }
            res.sendFile(path.join(__dirname, "../../client/members.html"), user);
        }
        else{
            res.sendFile(path.join(__dirname, "../../client/members.html"));
        }
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