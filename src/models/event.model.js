const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },

  description: String,
  imageURL: {
    type: String,
  },
});

eventSchema.plugin(mongoosePaginate);

const Evento = mongoose.model('Evento', eventSchema, COLLECTION_NAME);

module.exports = Evento;
