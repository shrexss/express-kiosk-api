const categoriesController = require('../controllers/categoriesController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategorie);
router.patch('/:id', checkJWT, categoriesController.updateCategorie);
router.delete('/:id', checkJWT, categoriesController.deleteCategorie);

module.exports = router;