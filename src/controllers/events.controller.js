const createEvent = (req, res) => {
  console.log(req.body);
  try {
    res.status(200).json({
      message: 'Event created',
      action: 'create',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateEvent = (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    res.status(200).json({
      message: 'Event updated',
      action: 'update',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteEvent = (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    res.status(200).json({
      message: 'Event deleted',
      action: 'delete',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getAllEvents = (req, res) => {
  try {
    res.status(200).json({
      message: 'All events',
      action: 'get',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getEventById = (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    res.status(200).json({
      message: 'Event by id',
      action: 'get',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
};
