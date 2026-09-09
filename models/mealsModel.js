exports.dropMealsTable = async(pool) => {
    const query = 'DROP TABLE IF EXISTS meals';

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

exports.createMealsTable = async (pool) => {
    const query = `
        CREATE TABLE IF NOT EXISTS meals (
            id INT AUTO_INCREMENT PRIMARY KEY,
            category_id INT NOT NULL,
            name VARCHAR(255) NOT NULL UNIQUE,
            image_path VARCHAR(255) NOT NULL,
            price DECIMAL(6,2) NOT NULL,
            sort_order INT NOT NULL,
            CONSTRAINT meals_category_id_foreign FOREIGN KEY(category_id) REFERENCES categories(id)
        );`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

exports.createMealsData = async (pool) => {
    const query = `
    INSERT INTO meals (id, category_id, name, image_path, price, sort_order) VALUES
        (1, 1, 'Big Mac Extra Value Meal', '/assets/meals/meal_big_mac.png', 9.89, 10),
        (2, 1, 'Quarter Pounder with Cheese Meal', '/assets/meals/meal_qpc.png', 10.19, 20),
        (3, 1, 'Double Quarter Pounder with Cheese Meal', '/assets/meals/meal_dqpc.png', 11.29, 30),
        (4, 2, 'McCrispy Meal', '/assets/meals/meal_mccrispy.png', 8.89, 40),
        (5, 2, 'Spicy McCrispy Meal', '/assets/meals/meal_spicy_mccrispy.png', 9.19, 50),
        (6, 2, '10 Pc. Chicken McNuggets Meal', '/assets/meals/meal_nuggets_10.png', 9.39, 60),
        (7, 2, 'Filet-O-Fish Meal', '/assets/meals/meal_filet_o_fish.png', 8.69, 70),
        (8, 3, 'Egg McMuffin Meal', '/assets/meals/meal_egg_mcmuffin.png', 7.29, 80),
        (9, 8, '4 Pc. Chicken McNuggets Happy Meal', '/assets/meals/happy_meal_nuggets.png', 5.29, 90),
        (10, 8, 'Hamburger Happy Meal', '/assets/meals/happy_meal_hamburger.png', 4.99, 100);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}