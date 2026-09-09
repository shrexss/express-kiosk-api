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
    INSERT INTO ingredients(name, image_path, price) VALUES
        ('first', '.png', 1.5),
        ('second', '.png', 1);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
} 