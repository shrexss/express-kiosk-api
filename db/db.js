const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = require('../config');   
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function createUsersTable(){
    const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    try{
        await pool.query(usersTable);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = {
    pool,
    createUsersTable
};