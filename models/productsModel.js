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