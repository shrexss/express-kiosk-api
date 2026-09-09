const tablesController = require('../controllers/tablesController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', checkJWT, tablesController.getAllTables);
router.post('/reset_DB', checkJWT, tablesController.resetAllDatabase);

module.exports = router;