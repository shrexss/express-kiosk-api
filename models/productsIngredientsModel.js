exports.dropProducts_IngredientsTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS products_ingredients';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createProducts_IngredientsTable = async (pool) => {
    const query = `
    CREATE TABLE IF NOT EXISTS products_ingredients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        ingredient_id INT NOT NULL,
        sort_order INT NOT NULL,
        CONSTRAINT products_ingredients_product_id_foreign FOREIGN KEY(product_id) REFERENCES products(id),
        CONSTRAINT products_ingredients_ingredient_id_foreign FOREIGN KEY(ingredient_id) REFERENCES ingredients(id)
    );`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createProducts_IngredientsData = async (pool) => {
    const query = `
    INSERT INTO products_ingredients(product_id, ingredient_id, sort_order) VALUES
        (1, 1, 1);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}