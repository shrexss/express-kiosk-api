// CONFIG VAR
require('dotenv').config({ quiet: true });
const config = require('./config');
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;

// EXPRESS VAR
const express = require('express');
const app = express();
app.set('trust proxy', 1);

// MIDDLEWARE VAR
const helmet = require('helmet');

const { calmLimiter, defaultLimiter, strictLimiter } = require('./middleware/rateLimiters');

const cors = require('cors');
const allowedOrigins = [
    'http://localhost:5050'
];

// ROUTES VAR
const docsRoutes = require('./routes/docsRoutes');
const authRoutes = require('./routes/authRoutes');

// DB VAR
const db = require('./db/db');

// EXPRESS
app.use(express.json());

// MIDDLEWARE
app.use(helmet());

app.use(defaultLimiter);

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
app.use('/', calmLimiter, docsRoutes);

app.use('/auth', strictLimiter, authRoutes);

// START
async function start() {
    await db.createUsersTable();

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
};
start();