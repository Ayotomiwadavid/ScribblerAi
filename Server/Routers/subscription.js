const express = require('express');
const router = express.Router();
const subController = require('../Controllers/subscription')

router.post('/createCheckoutSession', subController.subscribeToAPlan);

module.exports = router