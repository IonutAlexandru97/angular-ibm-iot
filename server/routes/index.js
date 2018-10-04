var users = require('../controllers/users');
  
module.exports = function(router){
    
    //Users router
    router.get('/api/users', users.index);
    router.get('/api/users/:id', users.show);
    router.post('/api/users', users.create);
    router.put('/api/users', users.update);
    router.delete('/api/users', users.delete);

    return router;
};

