const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');
//const shopsRoutes = require('./routes/shops');
//const medicineRoutes = require('./routes/medicines');
//const addStore = require('./routes/shops');



const DATABASE_URL = "mongodb+srv://Sakshi:hello1234@cluster0.yja9rcu.mongodb.net/"



mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

//app.use(express.json({ limit: '10mb' }));
//app.use(express.urlencoded({ limit: '10mb', extended: false }));

// Express middleware for file uploads
//app.use(fileUpload());


//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {  

   console.log(req.path, req.method)

  next()

})

// Import and use your signup routes
// const signup = require('./routes/signup');
// app.use('/api/signup', signup);

 //const contact = require('./routes/contact');
//app.use('/api/contact', contact);

//app.use('/api/', shopsRoutes);
//app.use('/api/medicines', medicineRoutes);
//app.use('/api/shops', addStore);
//app.use('/api/shops', shopsRoutes);

// app.use(new shopRoutes().router)
//app.use('/api',shopsRoutes)

// put - edit
// patch - edit
// post - new entry
// get - fetch
// delete 
const sign_routes = require('./routes/signup');
app.use('/api',sign_routes);


app.listen(5000,function check(error)
{
  if(error){
    console.log('Errorrr');
  }
  else{
    console.log('Started...!!!');
  }

});
