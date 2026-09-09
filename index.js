// CONFIG VAR
require('dotenv').config({ quiet: true });
const config = require('./config');
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;

// DB VAR
require('./db/db');

// EXPRESS VAR
const express = require('express');
const app = express();
app.set('trust proxy', 1);

// MIDDLEWARE VAR
const helmet = require('helmet');

const { calmLimiter, defaultLimiter, strictLimiter } = require('./middleware/rateLimiters');

const cors = require('cors');
const allowedOrigins = [
    'http://localhost:5050',
];

// ROUTES VAR
const docsRoutes = require('./routes/docsRoutes');
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');
const tablesRoutes = require('./routes/tablesRoutes');

const categoriesRoutes = require('./routes/categoriesRoutes');
const mealsRoutes = require('./routes/mealsRoutes');
const productsRoutes = require('./routes/productsRoutes');
const ingredientsRoutes = require('./routes/ingredientsRoutes');
const mealsProductsRoutes = require('./routes/mealsProductsRoutes');
const productsIngredientsRoutes = require('./routes/productsIngredientsRoutes');

const imagesRoutes = require('./routes/imagesRoutes');

const selectedMealRoutes = require('./routes/selectedMealRoutes');

// EXPRESS
app.use(express.json());

// MIDDLEWARE
app.use(helmet());
app.use(defaultLimiter);
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) {
            return NODE_ENV === 'development' 
                ? callback(null, true) 
                : callback(null, false); 
        }

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    credentials: true
}));

// ROUTES
app.use('/', calmLimiter, docsRoutes);
app.use('/auth', strictLimiter, authRoutes);
app.use('/users', usersRoutes);
app.use('/tables', tablesRoutes);

app.use('/categories', categoriesRoutes);
app.use('/meals', mealsRoutes);
app.use('/products', productsRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/meals_products', mealsProductsRoutes);
app.use('/products_ingredients', productsIngredientsRoutes);

app.use('/images', calmLimiter, imagesRoutes);

app.use('/selected_meal', selectedMealRoutes);

// START
app.listen(PORT, () => {
    console.log(`working on port ${PORT}`);
});