const mongoose = require('mongoose');
const schema = mongoose.schema;

let login = new schema({
  
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['superuser', 'admin', 'user'], required: true }
  
},
{collection:"login"});

module.exports = mongoose.model('Details', login);

