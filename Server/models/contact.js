const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required:true
    
  }
});

const contactUser = mongoose.model('contactDetails', contactSchema);

module.exports = contactUser;
