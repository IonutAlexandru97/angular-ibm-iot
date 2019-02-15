Model = require('../models/').users;

module.exports= {
    //Get a list of all users using model.findAll()
    index(req, res) {
      Model.findAll()
        .then(function (users) {
          res.status(200).json(users);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
    },
  };