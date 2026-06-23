const pool = require('../db/db');

exports.getAllCategories = async (req, res) => {
    try{
        const [rows] = await pool.execute('SELECT * FROM categories');

        return res.status(200).json(rows);
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.getCategorie = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id){
            return res.status(400).json({ error: 'Missing ID' });
        }

        const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Categorie not found' });
        }

        return res.status(200).json(rows[0]);
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.updateCategorie = async (req, res) => {
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

        const [result] = await pool.execute(`UPDATE categories SET ${setFields} WHERE id = ?`, setValues);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categorie not found' });
        }

        return res.status(200).json({ message: 'Categorie updated succesfully' });
    }catch(err){
        console.log(err);
        return res.status(500).json( { error: 'Internal server error'})
    }
}

exports.deleteCategorie = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id){
            return res.status(400).json({ error: 'Missing ID' });
        }

        const [result] = await pool.execute(`DELETE FROM categories WHERE id = ?`, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categorie not found' });
        }

        return res.status(200).json({ message: 'Categorie deleted succesfully' });
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
}