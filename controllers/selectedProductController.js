const pool = require('../db/db');

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Missing ID' });
        }

        const query = `
            SELECT 
                p.id AS product_id,
                p.name AS product_name,
                p.image_path AS product_image_path,
                p.price AS product_price,
                i.id AS ingredient_id,
                i.name AS ingredient_name,
                i.image_path AS ingredient_image_path,
                i.price AS ingredient_price,
                pi.amount,
                pi.sort_order
            FROM products p
            LEFT JOIN products_ingredients pi ON p.id = pi.product_id
            LEFT JOIN ingredients i ON pi.ingredient_id = i.id
            WHERE p.id = ?
            ORDER BY pi.sort_order ASC;
        `;

        const [rows] = await pool.execute(query, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const product = {
            id: rows[0].product_id,
            name: rows[0].product_name,
            image_path: rows[0].product_image_path,
            price: rows[0].product_price,
            ingredients: []
        };

        rows.forEach(row => {
            if (row.ingredient_id) {
                product.ingredients.push({
                    id: row.ingredient_id,
                    name: row.ingredient_name,
                    image_path: row.ingredient_image_path,
                    price: row.ingredient_price,
                    amount: row.amount,
                    sort_order: row.sort_order
                });
            }
        });

        return res.status(200).json(product);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};