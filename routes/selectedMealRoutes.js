const selectedMealController = require('../controllers/selectedMealController');

const express = require('express');
const router = express.Router();

router.get('/:id', selectedMealController.getMeal);

module.exports = router;