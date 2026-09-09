const pool = require('../db/db');
const { createCategoriesTable, createCategoriesData } = require('../models/categoriesModel');
const { createMealsTable, createMealsData } = require('../models/mealsModel');
const { createProductsTable ,createProductsData } = require('../models/productsModel');
const { createIngredientsTable, createIngredientsData } = require('../models/ingredientsModel');
const { createMeals_ProductsTable, createMeals_ProductsData } = require('../models/mealsProductsModel');
const { createProducts_IngredientsTable, createProducts_IngredientsData } = require('../models/productsIngredientsModel');

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

exports.resetAllDatabase = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();

        await connection.beginTransaction();

        await connection.query('SET FOREIGN_KEY_CHECKS = 0;');

        await connection.query(`
            DROP TABLE IF EXISTS 
                products_ingredients, 
                meals_products, 
                ingredients, 
                products, 
                meals, 
                categories;
        `);

        await connection.query('SET FOREIGN_KEY_CHECKS = 1;');

        await createCategoriesTable(connection);
        await createIngredientsTable(connection);
        await createProductsTable(connection);
        await createMealsTable(connection);
        await createMeals_ProductsTable(connection);
        await createProducts_IngredientsTable(connection);

        await createCategoriesData(connection);
        await createIngredientsData(connection);
        await createProductsData(connection);
        await createMealsData(connection);
        await createMeals_ProductsData(connection);
        await createProducts_IngredientsData(connection);

        await connection.commit();

        return res.status(200).json({ message: 'Entire database reset successfully' });
    } catch (err) {
        if (connection) {
            await connection.rollback().catch(() => {});
        }
        console.error('Full Database Reset Error:', err);
        return res.status(500).json({ error: 'Failed to reset database', details: err.message });
    } finally {
        if (connection) {
            await connection.query('SET FOREIGN_KEY_CHECKS = 1;').catch(() => {});
            connection.release();
        }
    }
};