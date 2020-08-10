
const {Pool,Client} = require('pg');

const pool = new Pool({
    user : "postgres",
    password : "postgres",
    host : "localhost",
    database : "user_database",
    port : 5432

});

module.exports = pool;