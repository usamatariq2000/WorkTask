const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
    },
  },
  isComplete: { type: Boolean },
  timestamp: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
