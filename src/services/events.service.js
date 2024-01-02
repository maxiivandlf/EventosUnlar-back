const Event = require('../models/event.model');

const getAllEvents = async ({ page, limit }) => {
  const options = {
    page: page,
    limit: limit,
  };

  try {
    const events = await Event.paginate({}, options);

    const response = {
      totalEvents: events.totalDocs,
      totalPages: events.totalPages,
      currentPage: events.page,
      limit: events.limit,
      hasPrevPage: events.hasPrevPage,
      hasNextPage: events.hasNextPage,
      prevPage: events.prevPage,
      nextPage: events.nextPage,
      events: events.docs,
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
