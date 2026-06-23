const pool = require('../db/db');
const { dropCategoriesTable, createCategoriesTable, createCategoriesData } = require('../models/categoriesModel');

exports.getAllTables = async (req, res) => {
    try{
        const [rows] = await pool.execute('SHOW TABLES');

        const tableNames = rows.map(row => Object.values(row)[0]);

        const result = {};
        
        for (const table of tableNames) {
            const [columnRows] = await pool.query(`SHOW COLUMNS FROM ${table}`);
            result[table] = columnRows.map(col => col.Field);
        } 

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}

exports.resetCategories = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE categories;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createCategoriesData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}