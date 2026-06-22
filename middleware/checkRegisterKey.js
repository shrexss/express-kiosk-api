const { REGISTER_KEY } = require('../config')

const verifyRegisterKey = (req, res, next) => {
    const key = req.headers['x-register-key'];

    if (!key) {
        return res.status(401).json({ error: 'Access denied' });
    }

    if (key !== REGISTER_KEY) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    next();
}

module.exports = verifyRegisterKey;