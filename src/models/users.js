const mongoose = require("mongoose");

const Users = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [Number],
}, {
  timestamps: true,
});

module.exports = mongoose.model("users", Users);