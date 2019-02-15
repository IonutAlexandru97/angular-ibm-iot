module.exports = {
  development: {
    url: 'postgres://postgres:admin@localhost:5432/postgres',
    dialect: 'postgres'
},
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
},
  test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/test',
    dialect: 'postgres'
},

'secret': 'grokonez-super-secret-key',
  Roles: ['USER', 'ADMIN']
};