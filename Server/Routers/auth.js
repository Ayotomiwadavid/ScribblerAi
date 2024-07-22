const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');

router.post('/register', authController.Register);
router.post('/login', authController.Login);
router.post('/update-profile', authController.updateUser);
router.post('/password-reset', authController.passwordReset);
router.post('/fetch-iuserData', authController.fetchUserData);

module.exports = router