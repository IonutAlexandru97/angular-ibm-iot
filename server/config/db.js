const env = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.development.url, {
    dialect: 'postgres'
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/Users')(sequelize,Sequelize);
db.role = require('../models/Role')(sequelize,Sequelize);

db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});

module.exports = db;