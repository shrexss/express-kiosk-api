const usersController = require('../controllers/usersController');
const checkJWT = require('../middleware/checkJWT');

const express = require('express');
const router = express.Router();

router.get('/', checkJWT, usersController.getAllUsers);
router.get('/:id', checkJWT, usersController.getUser);
router.patch('/:id', checkJWT, usersController.updateUser);
router.delete('/:id', checkJWT, usersController.deleteUser);

module.exports = router;