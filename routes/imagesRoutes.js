const imagesController = require('../controllers/imagesController');

const express = require('express');
const router = express.Router();

router.get('/*imagePath', imagesController.getImage);

module.exports = router;