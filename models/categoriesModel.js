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
        INSERT INTO categories(name, image_path, sort_order) VALUES
            ('Co nowego?', '.png' , 1),
            ('McZestawy', '.png' , 2),
            ('Burgery', '.png' , 3),
            ('McWrapy i Sałatki', '.png' , 4),
            ('Kurczak', '.png' , 5),
            ('2 for U', '.png' , 6),
            ('Frytki i dodatki', '.png' , 7),
            ('McCafé', '.png' , 8),
            ('Lody i desery', '.png' , 9),
            ('Napoje', '.png' , 10),
            ('Happy Meal', '.png' , 11),
            ('Śniadania', '.png' , 12);`;

    try{
        await pool.query(query);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}