const { Pool } = require('pg');
const itemsPool = new Pool({
    user: 'postgres',
    password: '12345678',
    host: 'localhost',
    port: 3000,
    database: 'myrecipes'
});

module.exports = itemsPool;
