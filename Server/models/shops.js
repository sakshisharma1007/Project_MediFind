const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  ShopName: {
    type: String,
    required: true
  },
  OpeningTime: {
    type: String,
    required: true
  },
  ClosingTime: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
    
  },
  MedicineName: {
    type: String, 
    required: true
    
  },
  Price: {
    type: Number,
    required:true
    
  }
});

const shops = mongoose.model('shops', shopSchema);

module.exports = shops;