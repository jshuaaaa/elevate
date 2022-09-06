const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
require('mongoose-type-url');

const lectureSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Lecture = model("Lecture", lectureSchema);

module.exports = Lecture;
