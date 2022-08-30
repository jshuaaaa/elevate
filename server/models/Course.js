const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const {moduleSchema} = require('./Module')

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  module: [moduleSchema]
});

const Course = model('Course', courseSchema);

module.exports = Course;
