const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const moduleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  lecture: [
    {
      type: Schema.Types.ObjectId,
      ref: "lecture",
    },
  ],
  activity: [
    {
      type: Schema.Types.ObjectId,
      ref: "activity",
    },
  ],
});

const Module = model("Module", moduleSchema);

module.exports = Module;
