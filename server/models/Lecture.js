const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const lectureSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true
  }
});

const Lecture = model('Lecture', lectureSchema);

module.exports = Lecture;
