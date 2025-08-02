const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// URL: /api/users/register
router.post('/register', registerUser);

// URL: /api/users/login
router.post('/login', loginUser);

module.exports = router;