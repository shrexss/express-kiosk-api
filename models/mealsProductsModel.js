exports.dropMeals_ProductsTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS meals_products';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createMeals_ProductsTable = async (pool) => {
    const query = `
        CREATE TABLE IF NOT EXISTS meals_products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            meal_id INT NOT NULL,
            product_id INT NOT NULL,
            sort_order INT NOT NULL,
            CONSTRAINT meals_products_meal_id_foreign FOREIGN KEY(meal_id) REFERENCES meals(id),
            CONSTRAINT meals_products_product_id_foreign FOREIGN KEY(product_id) REFERENCES products(id)
        );`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createMeals_ProductsData = async (pool) => {
    const query = `
    INSERT INTO meals_products(product_id, meal_id, sort_order) VALUES
        (1, 1, 1);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}