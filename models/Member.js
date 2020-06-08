const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema);
