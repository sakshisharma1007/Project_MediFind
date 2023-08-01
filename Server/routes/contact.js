const express = require('express');
const contact_route = express.Router();

const bodyParser = require('body-parser');
contact_route.use(bodyParser.json());
contact_route.use(bodyParser.urlencoded({extended:true}));

const contactController = require("../controllers/contactController");

contact_route.post('/contact',contactController.contact_user);


module.exports = contact_route;
