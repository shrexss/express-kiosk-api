const pool = require('../db/db');
const { createCategoriesData } = require('../models/categoriesModel');
const { createMealsData } = require('../models/mealsModel');
const { createProductsData } = require('../models/productsModel');
const { createIngredientsData } = require('../models/ingredientsModel');
const { createMeals_ProductsData } = require('../models/mealsProductsModel');
const { createProducts_IngredientsData } = require('../models/productsIngredientsModel');

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

exports.resetMeals = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE meals;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createMealsData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}

exports.resetProducts = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE products;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createProductsData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}

exports.resetIngredients = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE ingredients;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createIngredientsData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}

exports.resetMealsProducts = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE meals_products;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createMeals_ProductsData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}

exports.resetProductsIngredients = async (req, res) => {
    try{
        await pool.query('SET FOREIGN_KEY_CHECKS = 0;');

        await pool.query('TRUNCATE TABLE products_ingredients;');

        await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
        await createProducts_IngredientsData(pool);

        return res.status(200).json('Reset succesfully');
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'});
    }
}