const express = require('express');
const router = express.Router();
const Store = require('../models/editStore');


// Route to handle the update operation
router.post('/', (req, res) => {
    const { _id } = req.body;
  
    // Find the document by its _id and update the fields
    Store.findByIdAndUpdate(_id)
      .then(updatedStore => {
        if (updatedStore) {
          res.json({ success: true, message: 'Store details updated successfully' });
        } else {
          res.json({ success: false, message: 'Store not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ success: false, message: 'Error updating store details' });
      });
  });