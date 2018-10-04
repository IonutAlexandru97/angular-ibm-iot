'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};