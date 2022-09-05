const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { moduleSchema } = require("./Module");

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
  },
  courseAuthor: {
    type: String,
  },
  module: [
    {
      type: Schema.Types.ObjectId,
      ref: "module",
    },
  ],
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    },
  ],
});

const Course = model("Course", courseSchema);

module.exports = Course;
