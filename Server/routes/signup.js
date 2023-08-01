const express = require("express");
const sign_routes = express.Router();


const bodyParser = require('body-parser');
sign_routes.use(bodyParser.json());

sign_routes.use(bodyParser.urlencoded({extended:true}));


const signupController = require('../controllers/signupController');

const auth = require("../middleware/auth");

sign_routes.post('/signup',signupController.sign_user);

sign_routes.post('/login',signupController.login_user);

//jwt authentication
sign_routes.get('/test',auth, function(req,res){
  res.status(200).send({success:true,msg:"Authenticated"});

})


module.exports = sign_routes;

