const { enventsControllers } = require('../controllers');
const { validateData, eventSchema } = require('../middlewares/validateEvent');
const uploadImage = require('../middlewares/uploadImage');
const express = require('express');

const router = express.Router();

router.post(
  '/',
  uploadImage.single('imageURL'),
  validateData(eventSchema),
  enventsControllers.createEvent
);

router.get('/', enventsControllers.getAllEvents);
router.get('/:id', enventsControllers.getEventById);

router.put(
  '/:id',
  uploadImage.single('imageURL'),
  validateData(eventSchema),
  enventsControllers.updateEvent
);
router.delete('/:id', enventsControllers.deleteEvent);

module.exports = router;
