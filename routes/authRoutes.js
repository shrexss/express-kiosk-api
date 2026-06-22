const authController = require('../controllers/authController');
const verifyRegisterKey = require('../middleware/verifyRegisterKey');

const express = require('express');
const router = express.Router();

router.post('/register', verifyRegisterKey, authController.register);
router.post('/login', authController.login)

module.exports = router;