const { rateLimit } = require('express-rate-limit');

const defaultLimiter = rateLimit({
    windowMs: 10 * 60000, // 10min
    limit: 100,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});
const calmLimiter = rateLimit({
    windowMs: 10 * 60000, // 10min
    limit: 400,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});
const strictLimiter = rateLimit({
    windowMs: 10 * 60000, // 10min
    limit: 10,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});

module.exports = {
    calmLimiter,
    defaultLimiter,
    strictLimiter
};