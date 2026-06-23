const productsIngredientsController = require('../controllers/productsIngredientsController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', productsIngredientsController.getAllProductsIngredients);
router.get('/:id', productsIngredientsController.getProductsIngredients);
router.patch('/:id', checkJWT, productsIngredientsController.updateProductsIngredients);
router.delete('/:id', checkJWT, productsIngredientsController.deleteProductsIngredients);

module.exports = router;