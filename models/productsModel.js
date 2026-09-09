exports.dropProductsTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS products';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
exports.createProductsTable = async (pool) => {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            category_id INT NOT NULL,
            name VARCHAR(255) NOT NULL UNIQUE,
            image_path VARCHAR(255) NOT NULL,
            price DECIMAL(6,2) NOT NULL,
            sort_order INT NOT NULL,
            CONSTRAINT products_category_id_foreign FOREIGN KEY(category_id) REFERENCES categories(id)
        );`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createProductsData = async (pool) => {
    const query = `
    INSERT INTO products (id, category_id, name, image_path, price, sort_order) VALUES
        -- Burgers
        (1, 1, 'Big Mac', '/assets/products/big_mac.png', 5.99, 10),
        (2, 1, 'Quarter Pounder with Cheese', '/assets/products/qpc.png', 6.29, 20),
        (3, 1, 'Double Quarter Pounder with Cheese', '/assets/products/double_qpc.png', 7.49, 30),
        (4, 1, 'McDouble', '/assets/products/mcdouble.png', 2.99, 40),
        (5, 1, 'Cheeseburger', '/assets/products/cheeseburger.png', 2.29, 50),
        (6, 1, 'Hamburger', '/assets/products/hamburger.png', 1.99, 60),

        -- Chicken & Fish
        (7, 2, 'McChicken', '/assets/products/mcchicken.png', 2.49, 10),
        (8, 2, 'McCrispy', '/assets/products/mccrispy.png', 4.99, 20),
        (9, 2, 'Spicy McCrispy', '/assets/products/spicy_mccrispy.png', 5.29, 30),
        (10, 2, 'Filet-O-Fish', '/assets/products/filet_o_fish.png', 4.79, 40),

        -- Breakfast
        (11, 3, 'Egg McMuffin', '/assets/products/egg_mcmuffin.png', 4.29, 10),
        (12, 3, 'Sausage McMuffin with Egg', '/assets/products/sausage_mcmuffin_egg.png', 4.49, 20),
        (13, 3, 'Hash Brown', '/assets/products/hash_brown.png', 2.19, 30),

        -- Fries & Sides
        (14, 4, 'Small World Famous Fries', '/assets/products/fries_s.png', 2.19, 10),
        (15, 4, 'Medium World Famous Fries', '/assets/products/fries_m.png', 2.99, 20),
        (16, 4, 'Large World Famous Fries', '/assets/products/fries_l.png', 3.79, 30),
        (17, 4, 'Apple Slices', '/assets/products/apple_slices.png', 1.29, 40),

        -- Beverages
        (18, 5, 'Coca-Cola Classic (Medium)', '/assets/products/coke_m.png', 1.99, 10),
        (19, 5, 'Sprite (Medium)', '/assets/products/sprite_m.png', 1.99, 20),
        (20, 5, 'Diet Coke (Medium)', '/assets/products/diet_coke_m.png', 1.99, 30),

        -- Desserts & Shakes
        (21, 6, 'McFlurry with OREO Cookies', '/assets/products/mcflurry_oreo.png', 3.99, 10),
        (22, 6, 'McFlurry with M&M CANDIES', '/assets/products/mcflurry_mm.png', 3.99, 20),
        (23, 6, 'Vanilla Cone', '/assets/products/vanilla_cone.png', 1.79, 30),
        (24, 6, 'Baked Apple Pie', '/assets/products/apple_pie.png', 1.69, 40),

        -- McCafé
        (25, 7, 'Iced Caramel Macchiato (Medium)', '/assets/products/iced_caramel_macchiato.png', 3.89, 10),
        (26, 7, 'Mocha Frappé (Medium)', '/assets/products/mocha_frappe.png', 4.19, 20),

        -- Happy Meal Items
        (27, 8, '4 Pc. Chicken McNuggets', '/assets/products/nuggets_4.png', 2.99, 10),

        -- Shareables
        (28, 9, '10 Pc. Chicken McNuggets', '/assets/products/nuggets_10.png', 5.49, 10),
        (29, 9, '20 Pc. Chicken McNuggets', '/assets/products/nuggets_20.png', 8.99, 20);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}