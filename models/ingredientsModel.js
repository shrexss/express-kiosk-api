exports.dropIngredientsTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS ingredients';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createIngredientsTable = async (pool) => {
    const query = `
    CREATE TABLE IF NOT EXISTS ingredients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        image_path VARCHAR(255) NOT NULL,
        price DECIMAL(6,2) NOT NULL
    );`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createIngredientsData = async (pool) => {
    const query = `
    INSERT INTO ingredients (id, name, image_path, price) VALUES
        (1, '100% Beef Patty (1/10 lb)', '/assets/ingredients/beef_patty_small.png', 1.50),
        (2, 'Quarter Pounder Beef Patty (1/4 lb)', '/assets/ingredients/beef_patty_quarter.png', 2.50),
        (3, 'Crispy Chicken Filet', '/assets/ingredients/crispy_chicken.png', 2.20),
        (4, 'McChicken Patty', '/assets/ingredients/mcchicken_patty.png', 1.80),
        (5, 'Filet-O-Fish Patty', '/assets/ingredients/fish_patty.png', 2.00),
        (6, 'Folded Egg', '/assets/ingredients/folded_egg.png', 1.00),
        (7, 'Sausage Patty', '/assets/ingredients/sausage_patty.png', 1.20),
        (8, 'Regular Sesame Seed Bun', '/assets/ingredients/bun_sesame.png', 0.50),
        (9, 'Big Mac Club Bun (3-Part)', '/assets/ingredients/bun_big_mac.png', 0.70),
        (10, 'Potato Roll Bun', '/assets/ingredients/bun_potato.png', 0.80),
        (11, 'Regular Soft Bun', '/assets/ingredients/bun_regular.png', 0.40),
        (12, 'English Muffin', '/assets/ingredients/english_muffin.png', 0.60),
        (13, 'American Cheese Slice', '/assets/ingredients/cheese.png', 0.60),
        (14, 'Applewood Smoked Bacon', '/assets/ingredients/bacon.png', 1.20),
        (15, 'Shredded Lettuce', '/assets/ingredients/lettuce.png', 0.30),
        (16, 'Roma Tomato Slice', '/assets/ingredients/tomato.png', 0.40),
        (17, 'Pickle Slices', '/assets/ingredients/pickles.png', 0.25),
        (18, 'Slivered Onions', '/assets/ingredients/slivered_onions.png', 0.25),
        (19, 'Rehydrated Diced Onions', '/assets/ingredients/diced_onions.png', 0.20),
        (20, 'Big Mac Sauce', '/assets/ingredients/big_mac_sauce.png', 0.50),
        (21, 'Tartar Sauce', '/assets/ingredients/tartar_sauce.png', 0.50),
        (22, 'Spicy Pepper Sauce', '/assets/ingredients/spicy_sauce.png', 0.50),
        (23, 'Mayonnaise', '/assets/ingredients/mayo.png', 0.30),
        (24, 'Ketchup', '/assets/ingredients/ketchup.png', 0.10),
        (25, 'Mustard', '/assets/ingredients/mustard.png', 0.10),
        (26, 'Clarified Butter', '/assets/ingredients/butter.png', 0.20),
        (27, 'World Famous Potato Cut', '/assets/ingredients/fries_raw.png', 1.20),
        (28, 'Vanilla Soft Serve Base', '/assets/ingredients/soft_serve.png', 1.00),
        (29, 'OREO Cookie Pieces', '/assets/ingredients/oreo_pieces.png', 0.75),
        (30, 'M&M Candy Pieces', '/assets/ingredients/mm_pieces.png', 0.75),
        (31, 'Chocolate Syrup', '/assets/ingredients/chocolate_syrup.png', 0.50),
        (32, 'Apples Sliced', '/assets/ingredients/apple_slices.png', 0.50);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}