const tablesController = require('../controllers/tablesController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', checkJWT, tablesController.getAllTables);

router.get('/reset_categories', checkJWT, tablesController.resetCategories);
router.get('/reset_meals', checkJWT, tablesController.resetMeals);
router.get('/reset_products', checkJWT, tablesController.resetProducts);
router.get('/reset_ingredients', checkJWT, tablesController.resetIngredients);
router.get('/reset_meals_products', checkJWT, tablesController.resetMealsProducts);
router.get('/reset_products_ingredients', checkJWT, tablesController.resetProductsIngredients);

module.exports = router;