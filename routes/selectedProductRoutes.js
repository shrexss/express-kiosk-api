const selectedProductController = require('../controllers/selectedProductController');

const express = require('express');
const router = express.Router();

router.get('/:id', selectedProductController.getProduct);

module.exports = router;