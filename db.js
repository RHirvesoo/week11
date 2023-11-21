const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const itemsPool = new Pool ({

    connectionString: process.env.DBConnectionString,
    ssl: {
        rejectauthorized: false
    }

});


module.exports = itemsPool;
