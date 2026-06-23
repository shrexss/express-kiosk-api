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
    INSERT INTO products(category_id, name, image_path, price, sort_order) VALUES
        (1, 'product name', '.png', 1.0, 1);`;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}