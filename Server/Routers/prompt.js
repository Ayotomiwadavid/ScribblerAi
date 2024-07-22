const express = require('express');
const router = express.Router();

let {generateOutput} = require('../Controllers/chatGpt');

router.post('/', generateOutput);

module.exports = router