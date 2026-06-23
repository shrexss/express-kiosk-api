const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = require('../config');
const { createUsersTable } = require('../models/usersModel');
const { createCategoriesTable } = require('../models/categoriesModel');
const { createMealsTable } = require('../models/mealsModel');
const { createProductsTable } = require('../models/productsModel');
const { createIngredientsTable } = require('../models/ingredientsModel');
const { createMeals_ProductsTable } = require('../models/mealsProductsModel');
const { createProducts_IngredientsTable } = require('../models/productsIngredientsModel');
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

async function initDB(){
    try{
        await createUsersTable(pool);
        await createCategoriesTable(pool);
        await createMealsTable(pool);
        await createProductsTable(pool);
        await createIngredientsTable(pool);
        await createMeals_ProductsTable(pool);
        await createProducts_IngredientsTable(pool);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
initDB();

module.exports = pool;