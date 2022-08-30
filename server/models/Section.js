const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const sectionSchema = new Schema({
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

const Section = model('Section', sectionSchema);

module.exports = Section;
