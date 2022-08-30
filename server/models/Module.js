const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { sectionSchema } = require('./Lecture')

 const moduleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  section: [{
    type: Schema.Types.ObjectId,
    ref: 'section'
  }],
});


const Module = model('Module', moduleSchema);

module.exports = Module 
