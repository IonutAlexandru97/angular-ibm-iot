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
  
    //Get an user by the unique ID using model.findById()
    show(req, res) {
      Model.findById(req.params.id)
      .then(function (users) {
        res.status(200).json(users);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
    },
  
    //Create a new user using model.create()
    create(req, res) {
      Model.create(req.body)
        .then(function (newUser) {
          res.status(200).json(newUser);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
    },
  
    //Edit an existing user details using model.update()
    update(req, res) {
      Model.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(function (updatedRecords) {
        res.status(200).json(updatedRecords);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
    },
  
    //Delete an existing user by the unique ID using model.destroy()
    delete(req, res) {
      Model.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (deletedRecords) {
        res.status(200).json(deletedRecords);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
    }
  };