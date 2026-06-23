const ingredientsController = require('../controllers/ingredientsController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', ingredientsController.getAllIngredients);
router.get('/:id', ingredientsController.getIngredient);
router.patch('/:id', checkJWT, ingredientsController.updateIngredient);
router.delete('/:id', checkJWT, ingredientsController.deleteIngredient);

module.exports = router;