const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  description: {
    type: String,
    required: true,
    maxLength: 40,
  },
  CreateAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  UpdateAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
