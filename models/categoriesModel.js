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
            (2, 'Chickens', '/assets/categories/chicken.png', 20),
            (3, 'Breakfast', '/assets/categories/breakfast.png', 30),
            (4, 'Fries', '/assets/categories/fries.png', 40),
            (5, 'Beverages', '/assets/categories/beverages.png', 50),
            (6, 'Desserts', '/assets/categories/desserts.png', 60),
            (7, 'McCafé', '/assets/categories/mccafe.png', 70),
            (8, 'Happy Meal', '/assets/categories/happy_meal.png', 80);`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}