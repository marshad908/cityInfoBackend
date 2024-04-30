const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  festivals: {
    type: [
      {
        name: String,
        date: String,
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model('City', citySchema);
