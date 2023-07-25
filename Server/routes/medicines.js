const express = require('express');
const router = express.Router();
const medicines = require('../models/medicines');

// GET route to fetch all shops from the database
router.get('/', async (req, res) => {
  try {
    const Medicine = await medicines.find();
    res.json(Medicine);
  } catch (err) {
    console.error('Error fetching shops:', err);
    res.status(500).json({ error: 'Error fetching shops' });
  }
});

module.exports = router;
