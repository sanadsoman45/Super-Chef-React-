const sql = require("mssql");
const config = require('../config/db_config');


const getAllIngredients = async () => {
    let pool;
    try {
        pool = await sql.connect(config); // create connection
        const result = await pool.request().query("SELECT * FROM Ingredients");
        return result.recordset;
    } catch (err) {
        console.error("❌ MSSQL Query Error:", err);
        throw err;
    } finally {
        if (pool) await pool.close(); // close connection after query
    }
};
module.exports = {
    getAllIngredients
}