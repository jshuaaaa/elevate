const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { moduleSchema } = require("./Module");

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
    trim: true,
  },
  price: {
    type: String,
  },
  courseAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  module: [
    {
      type: Schema.Types.ObjectId,
      ref: "module",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Course = model("Course", courseSchema);

module.exports = Course;
