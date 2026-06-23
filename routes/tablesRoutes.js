const tablesController = require('../controllers/tablesController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', checkJWT, tablesController.getAllTables);

router.get('/reset_categories', tablesController.resetCategories);

module.exports = router;