var users = require('../controllers/users');
var passport = require ("../config/passport");
var Auth = require("../controllers/auth");
var html = require("../controllers/html");
  
module.exports = function(router){
      

    //HTML (Public) Routes
    router.get("/register", html.home);
    router.get("/login", html.login);

    //API
    router.post("/api/login", passport.authenticate("local"), Auth.login);
    router.post("/api/signup", Auth.signup);
    router.get("/logout", Auth.logout);
    router.get("/api/user_data", Auth.getData);
    
    //Users routes
    //router.get('/api/users', users.index);
    //router.get('/api/users/:id', users.show);
    //router.post('/api/users', users.create);
    //router.put('/api/users', users.update);
    //router.delete('/api/users', users.delete);


    return router;
};

