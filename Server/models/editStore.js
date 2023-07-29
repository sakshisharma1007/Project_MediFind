const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    MedicineName: String,
    Price: Number,
});


const Store = mongoose.model('shops', StoreSchema);

module.exports = Store;