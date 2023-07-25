// routes/signupRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/signup');

// Signup route
router.post('/', (req, res) => {
  const { usname, psw ,repeatPsw} = req.body;

  // Validate the incoming data here if needed

  const newUser = new User({
    usname,
    psw,
    repeatPsw
  });

  newUser.save()
    .then((resp) => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error creating user' });
    });
});

module.exports = router;
