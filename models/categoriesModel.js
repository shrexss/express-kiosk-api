exports.dropCategoriesTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS categories';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createCategoriesTable = async (pool) => {
    const query = `
        CREATE TABLE IF NOT EXISTS categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            image_path VARCHAR(255) NOT NULL,
            sort_order INT NOT NULL
        );`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createCategoriesData = async (pool) => {
    const query = `
        INSERT INTO categories (id, name, image_path, sort_order) VALUES
            (1, 'Burgers', '/assets/categories/burgers.png', 10),
            (2, 'Chicken & Fish', '/assets/categories/chicken_fish.png', 20),
            (3, 'Breakfast', '/assets/categories/breakfast.png', 30),
            (4, 'Fries & Sides', '/assets/categories/sides.png', 40),
            (5, 'Beverages', '/assets/categories/beverages.png', 50),
            (6, 'Desserts & Shakes', '/assets/categories/desserts.png', 60),
            (7, 'McCafé', '/assets/categories/mccafe.png', 70),
            (8, 'Happy Meal', '/assets/categories/happy_meal.png', 80),
            (9, 'Shareables & Nuggets', '/assets/categories/shareables.png', 90);`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}