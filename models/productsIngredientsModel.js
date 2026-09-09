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
        amount INT NOT NULL,
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
    INSERT INTO products_ingredients (id, product_id, ingredient_id, amount, sort_order) VALUES
        -- Big Mac (Product 1)
        (1, 1, 9, 1, 10),   -- 3-Part Club Bun
        (2, 1, 1, 2, 20),   -- 2x 1/10lb Beef Patties
        (3, 1, 13, 1, 30),  -- American Cheese
        (4, 1, 15, 1, 40),  -- Shredded Lettuce
        (5, 1, 17, 2, 50),  -- 2x Pickle Slices
        (6, 1, 19, 1, 60),  -- Diced Onions
        (7, 1, 20, 2, 70),  -- 2 Shots Big Mac Sauce

        -- Quarter Pounder with Cheese (Product 2)
        (8, 2, 8, 1, 10),   -- Sesame Bun
        (9, 2, 2, 1, 20),   -- 1/4lb Beef Patty
        (10, 2, 13, 2, 30), -- 2x American Cheese
        (11, 2, 17, 2, 40), -- 2x Pickles
        (12, 2, 18, 1, 50), -- Slivered Onions
        (13, 2, 24, 1, 60), -- Ketchup
        (14, 2, 25, 1, 70), -- Mustard

        -- Double Quarter Pounder with Cheese (Product 3)
        (15, 3, 8, 1, 10),  -- Sesame Bun
        (16, 3, 2, 2, 20),  -- 2x 1/4lb Beef Patties
        (17, 3, 13, 2, 30), -- 2x American Cheese
        (18, 3, 17, 2, 40), -- 2x Pickles
        (19, 3, 18, 1, 50), -- Slivered Onions
        (20, 3, 24, 1, 60), -- Ketchup
        (21, 3, 25, 1, 70), -- Mustard

        -- McDouble (Product 4)
        (22, 4, 11, 1, 10), -- Regular Bun
        (23, 4, 1, 2, 20),  -- 2x 1/10lb Patties
        (24, 4, 13, 1, 30), -- 1x Slice Cheese
        (25, 4, 17, 2, 40), -- 2x Pickles
        (26, 4, 19, 1, 50), -- Diced Onions
        (27, 4, 24, 1, 60), -- Ketchup
        (28, 4, 25, 1, 70), -- Mustard

        -- Cheeseburger (Product 5)
        (29, 5, 11, 1, 10), -- Regular Bun
        (30, 5, 1, 1, 20),  -- 1x 1/10lb Patty
        (31, 5, 13, 1, 30), -- 1x Slice Cheese
        (32, 5, 17, 2, 40), -- 2x Pickles
        (33, 5, 19, 1, 50), -- Diced Onions
        (34, 5, 24, 1, 60), -- Ketchup
        (35, 5, 25, 1, 70), -- Mustard

        -- McChicken (Product 7)
        (36, 7, 11, 1, 10), -- Regular Bun
        (37, 7, 4, 1, 20),  -- McChicken Patty
        (38, 7, 15, 1, 30), -- Shredded Lettuce
        (39, 7, 23, 1, 40), -- Mayo

        -- McCrispy (Product 8)
        (40, 8, 10, 1, 10), -- Potato Roll
        (41, 8, 3, 1, 20),  -- Crispy Chicken Filet
        (42, 8, 17, 2, 30), -- Pickles
        (43, 8, 26, 1, 40), -- Butter

        -- Spicy McCrispy (Product 9)
        (44, 9, 10, 1, 10), -- Potato Roll
        (45, 9, 3, 1, 20),  -- Crispy Chicken Filet
        (46, 9, 17, 2, 30), -- Pickles
        (47, 9, 22, 1, 40), -- Spicy Pepper Sauce

        -- Filet-O-Fish (Product 10)
        (48, 10, 11, 1, 10),-- Regular Bun (Steamed)
        (49, 10, 5, 1, 20), -- Fish Patty
        (50, 10, 13, 1, 30),-- Half Slice Cheese
        (51, 10, 21, 1, 40),-- Tartar Sauce

        -- Egg McMuffin (Product 11)
        (52, 11, 12, 1, 10),-- English Muffin
        (53, 11, 6, 1, 20), -- Folded Egg
        (54, 11, 13, 1, 30),-- American Cheese
        (55, 11, 26, 1, 40),-- Butter

        -- Medium Fries (Product 15)
        (56, 15, 27, 1, 10);-- Potato Cuts`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}