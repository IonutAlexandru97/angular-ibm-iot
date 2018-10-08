var users = require('../controllers/users');
var passport = require ("../config/passport");
var client = require("../controllers/client");
  
module.exports = function(router){
      

    //HTML (Public) Routes
    router.get("/", client.home);
    router.get("/login", client.login);
    router.get("/members", client.members);
    router.get("/register", client.signUp);

    //API (Server) Routes
    router.post("/api/login", passport.authenticate("local-login"), function(req, res){
        res.json('/api/users');
    });
    router.post("/api/signup", passport.authenticate("local-signup", {
        successRedirect: '/members',
        failureRedirect: '/register'
    }));
    
    //Users routes
    router.get('/api/users', users.index);


    return router;
};

