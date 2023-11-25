const { enventsControllers } = require('../controllers');
const express = require('express');

const router = express.Router();

router.get('/', enventsControllers.createEvent);

module.exports = router;
