"use strict";
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'user_database',
});
module.exports = pool;
//# sourceMappingURL=dbpool.js.map