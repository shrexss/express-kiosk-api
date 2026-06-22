const authController = require('../controllers/authController');
const checkRegisterKey = require('../middleware/checkRegisterKey');

const express = require('express');
const router = express.Router();

router.post('/register', checkRegisterKey, authController.register);
router.post('/login', authController.login)

module.exports = router;