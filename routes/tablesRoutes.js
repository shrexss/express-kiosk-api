const tablesController = require('../controllers/tablesController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', checkJWT, tablesController.getAllTables);

router.post('/reset_categories', checkJWT, tablesController.resetCategories);
router.post('/reset_meals', checkJWT, tablesController.resetMeals);
router.post('/reset_products', checkJWT, tablesController.resetProducts);
router.post('/reset_ingredients', checkJWT, tablesController.resetIngredients);
router.post('/reset_meals_products', checkJWT, tablesController.resetMealsProducts);
router.post('/reset_products_ingredients', checkJWT, tablesController.resetProductsIngredients);

module.exports = router;