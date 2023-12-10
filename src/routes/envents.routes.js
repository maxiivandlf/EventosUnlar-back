const { enventsControllers } = require('../controllers');
const { validateData, eventSchema } = require('../middlewares/validateEvent');
const express = require('express');

const router = express.Router();

router.post('/', validateData(eventSchema), enventsControllers.createEvent);
router.get('/', enventsControllers.getAllEvents);
router.get('/:id', enventsControllers.getEventById);
router.put('/:id', enventsControllers.updateEvent);
router.delete('/:id', enventsControllers.deleteEvent);

module.exports = router;
