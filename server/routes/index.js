var users = require('../controllers/users');
var passport = require ("../config/passport");
var client = require("../controllers/client");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(router){
      

  
    //API (Server) Routes
    router.post('/api/login', passport.authenticate("local-login", {
        successRedirect: '/members'
    }));

    router.post("/api/signup", passport.authenticate("local-signup", {
        successRedirect: '/members',
    }));
    
    //Users routes
    router.get('/api/users', users.index);

      //HTML (Public) Routes
      router.get("/", client.home);
      router.get("/login", client.login);
      router.get("/members", isAuthenticated, client.members);
      router.get("/register", client.signUp);
      router.get("/logout", client.logout);
  


    return router;
};

