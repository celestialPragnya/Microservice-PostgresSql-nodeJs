import { Pool } from 'pg';
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'user_database',
});

export = pool;

