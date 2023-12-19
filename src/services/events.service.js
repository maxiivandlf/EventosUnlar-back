const Event = require('../models/event.model');

const getAllEvents = async ({ page, limit }) => {
  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const events = await Event.find().limit(endIndex).skip(startIndex);

    const response = {
      totalEvents: await Event.countDocuments(),
      totalPages: Math.ceil((await Event.countDocuments()) / limit),
      currentPage: page,
      events: events,
    };
    return response;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

const createEvent = async (event) => {
  try {
    const newEvent = await Event(event);
    return newEvent.save();
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
  getEventById,
  deleteEvent,
  updateEvent,
};
