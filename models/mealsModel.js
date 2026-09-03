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
    INSERT INTO meals (category_id, name, image_path, price, sort_order) VALUES
        (1, 'Grimace Shake', 'grimace-shake.png', 13.90, 1),
        (1, 'Ciacho Red Velvet', 'ciacho-red-velvet.png', 8.50, 2),
        (1, 'McFlurry Pistacjowe', 'mcflurry-pistacjowe.png', 11.90, 3),
        (1, 'Sprite x Marakuja', 'sprite-x-marakuja.png', 9.50, 4),
        (1, 'Złote Ziemniaczki z sosem', 'zlote-ziemniaczki-z-sosem.png', 9.90, 5),

        (2, 'McZestaw', 'mczestaw.png', 28.90, 1),
        (2, 'McZestaw Śniadaniowy', 'mczestaw-sniadaniowy.png', 22.90, 2),

        (3, 'Big Mac', 'bigmac.png', 19.90, 1),
        (3, 'WieśMac', 'wies-mac.png', 19.90, 2),
        (3, 'Chikker', 'chikker.png', 7.50, 3),

        (4, 'McWrap Klasyczny', 'mcwrap-klasyczny.png', 18.90, 1),
        (4, 'Sałatka Kurczak Premium', 'salatka-kurczak-premium.png', 21.90, 2),

        (5, 'Kurczak McNuggets', 'kurczak-mcnuggets.png', 15.90, 1),
        (5, 'McCrispy Strips (5 szt.)', 'mccrispy-strips-5szt.png', 18.90, 2),
        (5, 'Chicken Box dla 1 osoby', 'chicken-box-dla-1-osoby.png', 24.90, 3),

        (6, '2 for U', '2-for-u.png', 9.90, 1),
        (6, '2 for U Powiększone', '2-for-u-powiekszone.png', 11.90, 2),

        (7, 'Sos Śmietanowy', 'sos-smietanowy.png', 2.50, 1),

        (8, 'Kawa z mlekiem', 'kawa-mleko.png', 9.90, 1),

        (10, 'Woda gazowana / niegazowana', 'woda-gazowana-niegazowana.png', 6.50, 1),

        (11, 'Happy Meal', 'happy-meal.png', 19.90, 1),
        (11, 'Happy Meal Śniadaniowy', 'happy-meal-sniadaniowy.png', 19.90, 2),

        (12, 'Kajzerka Kurczak Premium', 'kajzerka-kurczak-premium.png', 14.90, 1),
        (12, 'Śniadaniowy McWrap Jajecznica & Wieprzowina', 'sniadaniowy-mcwrap-jajecznica-wieprzowina.png', 15.90, 2);
    `;

    try {
        await pool.query(query);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}