// // routes/signupRoutes.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/signup');

// // Signup route
// router.post('/', (req, res) => {
//   const { usname, psw } = req.body;
//    //,repeatPsw
//   // Validate the incoming data here if needed

//   const newUser = new User({
//     usname,
//     psw,
//     //repeatPsw
//   });

//   newUser.save()
//     .then((resp) => {
//       res.status(201).json({ message: 'User created successfully' });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: 'Error creating user' });
//     });
// });

// module.exports = router;

const express = require("express");
const sign_routes = express.Router();


const bodyParser = require('body-parser');
sign_routes.use(bodyParser.json());

sign_routes.use(bodyParser.urlencoded({extended:true}));


const signupController = require('../controllers/signupController');

sign_routes.post('/signup',signupController.sign_user);

sign_routes.post('/login',signupController.login_user);

module.exports = sign_routes;

