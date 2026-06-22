const pool = require('../db/db').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const { JWT_SECRET } = require('../config');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Missing credentials' });
        }

        const salt = 10;
        const passwordHash = await bcrypt.hash(password, salt);

        await pool.execute('INSERT INTO users(username, password_hash) VALUES(?, ?)', [username, passwordHash]);

        return res.status(201).json( { message: 'User created' } );
    }catch(err){
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Username already taken' });
        }

        return res.status(500).json( { error: 'Internal server error'})
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Missing credentials' });
        }

        const [rows] = await pool.execute(`
            SELECT id, username, password_hash 
            FROM users 
            WHERE username = ?`, [username]);

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: '30m' }
        );

        return res.status(200).json( {
            success: true,
            token: token,
            user: {
                id: user.id,
                username: user.username
            }
        } );
    }catch(err){
        return res.status(500).json( { error: 'Internal server error'})
    }
};