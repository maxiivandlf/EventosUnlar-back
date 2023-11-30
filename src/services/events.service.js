const Event = require('../models/event');

const getAllEvents = async () => {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

const createEvent = async (event) => {
  try {
    const newEvent = await Event.create(event);
    return newEvent;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

const getEventById = async (id) => {
  try {
    const event = await Event.findById(id);
    return event;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

const deleteEvent = async (id) => {
  try {
    const event = await Event.findByIdAndDelete(id);
    return event;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

const updateEvent = async (id, event) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, event, {
      new: true,
    });
    return updatedEvent;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

module.exports = {
  getAllEvents,
  createEvent,
};
