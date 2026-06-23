const pool = require('../db/db');

exports.getAllMealsProducts = async (req, res) => {
    try{
        const [rows] = await pool.execute('SELECT * FROM meals_products');

        return res.status(200).json(rows);
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.getMealsProducts = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id){
            return res.status(400).json({ error: 'Missing ID' });
        }

        const [rows] = await pool.execute('SELECT * FROM meals_products WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'meals_products not found' });
        }

        return res.status(200).json(rows[0]);
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.updateMealsProducts = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id){
            return res.status(400).json({ error: 'Missing ID' });
        }

        const updates = req.body;

        const fields = Object.keys(updates);
        if (fields.length === 0) {
            return res.status(400).json({ error: 'No fields provided' });
        }

        const setFields = fields.map(field => `${field} = ?`).join(', ');
        const setValues = Object.values(updates);
        setValues.push(id);

        const [result] = await pool.execute(`UPDATE meals_products SET ${setFields} WHERE id = ?`, setValues);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'meals_products not found' });
        }

        return res.status(200).json({ message: 'meals_products updated succesfully' });
    }catch(err){
        console.log(err);
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.deleteMealsProducts = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id){
            return res.status(400).json({ error: 'Missing ID' });
        }

        const [result] = await pool.execute(`DELETE FROM meals_products WHERE id = ?`, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'meals_products not found' });
        }

        return res.status(200).json({ message: 'meals_products deleted succesfully' });
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}