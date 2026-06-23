const mealsProductsController = require('../controllers/mealsProductsController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', mealsProductsController.getAllMealsProducts);
router.get('/:id', mealsProductsController.getMealsProducts);
router.patch('/:id', checkJWT, mealsProductsController.updateMealsProducts);
router.delete('/:id', checkJWT, mealsProductsController.deleteMealsProducts);

module.exports = router;