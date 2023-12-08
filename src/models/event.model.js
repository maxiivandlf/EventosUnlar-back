const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
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

const Evento = mongoose.model('Evento', eventoSchema, 'EVENTS');

module.exports = Evento;
