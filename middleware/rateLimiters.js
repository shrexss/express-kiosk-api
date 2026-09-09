const { rateLimit } = require('express-rate-limit');

const defaultLimiter = rateLimit({
    windowMs: 5 * 60000, // 5min
    limit: 250,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});
const calmLimiter = rateLimit({
    windowMs: 5 * 60000, // 5min
    limit: 500,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});
const strictLimiter = rateLimit({
    windowMs: 5 * 60000, // 5min
    limit: 25,
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