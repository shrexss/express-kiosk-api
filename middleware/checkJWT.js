const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const checkJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token){
        return res.status(401).json('Access denied');
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({ error: 'Invalid or expired token.' });
    }
}

module.exports = checkJWT;