const mongoose = require('mongoose');

const COLLECTION_NAME = process.env.COLLECTION_NAME;

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  dateEvent: {
    type: Date,
    required: true,
  },
  location: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  description: String,
});

const Evento = mongoose.model('Evento', eventSchema, COLLECTION_NAME);

module.exports = Evento;
