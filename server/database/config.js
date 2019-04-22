const Pool  = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'development',
    password: 'admin',
    port: 5432,
})

module.exports = {
    pool,
    'secret': 'supersecret'
};