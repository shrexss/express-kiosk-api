const imagesController = require('../controllers/imagesController');

const express = require('express');
const router = express.Router();

router.get('/:imageName', imagesController.getImage);

module.exports = router;