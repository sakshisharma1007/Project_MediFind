const mongoose = require('mongoose');
const schema = mongoose.schema;

let shop = new schema({
  
    ShopName: String ,
    OpeningTime: String ,
    ClosingTime:  String,
    Location: String
    
  },
  {collection:"shops"});
  
  module.exports = mongoose.model('Shops',shop );