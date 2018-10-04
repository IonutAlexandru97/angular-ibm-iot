module.exports = {
  development: {
    url: 'postgres://postgres:admin@localhost:5432/dev',
    dialect: 'postgres'
},
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
},
  test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:admin@localhost:5432/test',
    dialect: 'postgres'
}
};