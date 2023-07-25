const express = require('express');
const router = express.Router();
const shops = require('../models/shops');

// GET route to fetch all shops from the database
router.get('/', async (req, res) => {
  try {
    const Shop = await shops.find();
    res.json(Shop);
  } catch (err) {
    console.error('Error fetching shops:', err);
    res.status(500).json({ error: 'Error fetching shops' });
  }
});

module.exports = router;
