const pool = require('../db/db');

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Missing ID' });
        }

        const query = `
            SELECT 
                m.id AS meal_id,
                m.name AS meal_name,
                m.image_path AS meal_image_path,
                m.price AS meal_price,
                i.id AS ingredient_id,
                i.name AS ingredient_name,
                i.image_path AS ingredient_image_path,
                i.price AS ingredient_price,
                pi.amount,
                pi.sort_order
            FROM meals m
            LEFT JOIN products_ingredients pi ON m.id = pi.product_id
            LEFT JOIN ingredients i ON pi.ingredient_id = i.id
            WHERE m.id = ?
            ORDER BY pi.sort_order ASC;
        `;

        const [rows] = await pool.execute(query, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Meal not found' });
        }

        const meal = {
            id: rows[0].meal_id,
            name: rows[0].meal_name,
            image_path: rows[0].meal_image_path,
            price: rows[0].meal_price,
            ingredients: []
        };

        rows.forEach(row => {
            if (row.ingredient_id) {
                meal.ingredients.push({
                    id: row.ingredient_id,
                    name: row.ingredient_name,
                    image_path: row.ingredient_image_path,
                    price: row.ingredient_price,
                    amount: row.amount,
                    sort_order: row.sort_order
                });
            }
        });

        return res.status(200).json(meal);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};