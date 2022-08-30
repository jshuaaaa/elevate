const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const lectureSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lecture: [{
    link: String
  }],
  activites: [{
    description: String
  }]
});

const Lecture = model('Lecture', lectureSchema);

module.exports = Lecture;
