const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Activity = model("activity", activitySchema);

module.exports = Activity;
