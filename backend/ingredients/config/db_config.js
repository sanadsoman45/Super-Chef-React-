const sql = require('mssql');
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

let connection = null;

async function connectDB() {
    if (!connection) {
        try {
            connection = await sql.connect(dbConfig);
            console.log('✅ Connected to SQL Server');
        } catch (err) {
            console.error('❌ SQL Server connection for ingredients failed:', err);
            throw err;
        }
    }
    return connection;
}

module.exports = { connectDB, dbConfig };
