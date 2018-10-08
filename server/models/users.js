'use strict';
var bCrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  users.generateHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
  };
  users.prototype.validPassword = function(password) {
    return bCrypt.compareSync(password, this.password);
  };
  return users;
};