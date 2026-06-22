const docsController = require('../controllers/docsController');

const express = require('express');
const router = express.Router();

router.get('/', docsController.getDocs);

module.exports = router;