const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

const Evento = mongoose.model('Evento', eventoSchema, 'EVENTS');

module.exports = Evento;
