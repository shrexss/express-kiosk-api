// CONFIG VAR
const config = require('./config');
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;

// EXPRESS VAR
const express = require('express');
const app = express();
app.set('trust proxy', 1);

// MIDDLEWARE VAR
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const cors = require('cors');
const allowedOrigins = [
    'http://localhost:5050'
];

// ROUTES VAR
const docsRoutes = require('./routes/docsRoutes');

// EXPRESS
app.use(express.json());

// MIDDLEWARE
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60000, // 15min
    limit: 100,
    message: {
        status: 429,
        error: 'Too many requests!'
    }
});
app.use(limiter);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin){
            return NODE_ENV === 'development' ? 
                callback(null, true) : 
                callback(new Error("Blocked by CORS"));
        };

        if (allowedOrigins.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error("Blocked by CORS"))
        };
    },
    credentials: true
}));

// ROUTES
app.use("/", docsRoutes);

// START
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});