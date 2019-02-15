'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};