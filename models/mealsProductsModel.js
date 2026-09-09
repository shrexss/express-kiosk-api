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
    INSERT INTO meals_products (id, meal_id, product_id, sort_order) VALUES
        -- Big Mac Extra Value Meal (Meal 1)
        (1, 1, 1, 10),  -- Big Mac
        (2, 1, 15, 20), -- Medium Fries
        (3, 1, 18, 30), -- Medium Coca-Cola

        -- Quarter Pounder Meal (Meal 2)
        (4, 2, 2, 10),  -- QPC
        (5, 2, 15, 20), -- Medium Fries
        (6, 2, 18, 30), -- Medium Coca-Cola

        -- Double Quarter Pounder Meal (Meal 3)
        (7, 3, 3, 10),  -- Double QPC
        (8, 3, 15, 20), -- Medium Fries
        (9, 3, 18, 30), -- Medium Coca-Cola

        -- McCrispy Meal (Meal 4)
        (10, 4, 8, 10), -- McCrispy
        (11, 4, 15, 20),-- Medium Fries
        (12, 4, 19, 30),-- Medium Sprite

        -- Spicy McCrispy Meal (Meal 5)
        (13, 5, 9, 10), -- Spicy McCrispy
        (14, 5, 15, 20),-- Medium Fries
        (15, 5, 18, 30),-- Medium Coca-Cola

        -- 10 Pc. McNuggets Meal (Meal 6)
        (16, 6, 28, 10),-- 10 Pc McNuggets
        (17, 6, 15, 20),-- Medium Fries
        (18, 6, 18, 30),-- Medium Coca-Cola

        -- Filet-O-Fish Meal (Meal 7)
        (19, 7, 10, 10),-- Filet-O-Fish
        (20, 7, 15, 20),-- Medium Fries
        (21, 7, 18, 30),-- Medium Coca-Cola

        -- Egg McMuffin Meal (Meal 8)
        (22, 8, 11, 10),-- Egg McMuffin
        (23, 8, 13, 20),-- Hash Brown
        (24, 8, 25, 30),-- Iced Caramel Macchiato

        -- 4 Pc McNuggets Happy Meal (Meal 9)
        (25, 9, 27, 10),-- 4 Pc McNuggets
        (26, 9, 14, 20),-- Small Fries
        (27, 9, 17, 30),-- Apple Slices

        -- Hamburger Happy Meal (Meal 10)
        (28, 10, 6, 10), -- Hamburger
        (29, 10, 14, 20),-- Small Fries
        (30, 10, 17, 30);-- Apple Slices`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}