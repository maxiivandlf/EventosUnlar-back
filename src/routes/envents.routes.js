const { enventsControllers } = require('../controllers');
const express = require('express');

const router = express.Router();

router.post('/', enventsControllers.createEvent);
router.get('/', enventsControllers.getAllEvents);
router.get('/:id', enventsControllers.getEventById);
router.put('/:id', enventsControllers.updateEvent);
router.delete('/:id', enventsControllers.deleteEvent);

module.exports = router;
