const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const {sectionSchema} = require('./Section')

 const moduleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  section: [sectionSchema]
});


const Module = model('Module', moduleSchema);

module.exports = { Module, moduleSchema }
