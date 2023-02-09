const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sofresh",
    password: "P@ssw0rd171!",
    port: 5432
})

module.exports = pool;
