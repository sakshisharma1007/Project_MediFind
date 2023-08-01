const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const shopsRoutes = require('./routes/shops');
require('dotenv').config();
//const addStore = require('./routes/shops');


app.use(bodyParser.json({ limit: '10mb' }));

const DATABASE_URL = "mongodb+srv://Sakshi:hello1234@cluster0.yja9rcu.mongodb.net/"



mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {  

   console.log(req.path, req.method)

  next()

})


//app.use('/api/shops', addStore);
app.use('/api/shops', shopsRoutes);


const sign_routes = require('./routes/signup');
app.use('/api',sign_routes);

const contact_route = require("./routes/contact");
app.use('/api',contact_route);

const contact_email  = require("./routes/contact");
app.use('/api/send-email', contact_email);
const delete_route = require("./routes/shops");
app.use('/api',delete_route);

app.listen(5000,function check(error)
{
  if(error){
    console.log('Errorrr');
  }
  else{
    console.log('Started...!!!');
  }

});
