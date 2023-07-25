const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
  ShopName: {
    type: String,
    required: true
  },
  MedicineName: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  }
 
});

const medicines = mongoose.model('medicines', medSchema);

module.exports = medicines;
