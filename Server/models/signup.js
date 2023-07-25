// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  usname: {
    type: String,
    required: true
  },
  psw: {
    type: String,
    required: true
  },
  repeatPsw: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
