const productsController = require('../controllers/productsController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.patch('/:id', checkJWT, productsController.updateProduct);
router.delete('/:id', checkJWT, productsController.deleteProduct);

module.exports = router;