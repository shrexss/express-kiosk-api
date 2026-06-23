const mealsController = require('../controllers/mealsController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', mealsController.getAllMeals);
router.get('/:id', mealsController.getMeal);
router.patch('/:id', checkJWT, mealsController.updateMeal);
router.delete('/:id', checkJWT, mealsController.deleteMeal);

router.get('/reset', checkJWT, mealsController.resetMeals);

module.exports = router;