/*const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


require('dotenv').config();
const routes= require('./routes/route');


const mongoString = process.env.DATABASE_URL

const port = 5000;


// MongoDB connection
mongoose.connect('mongoString', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const database = mongoose.connection;
database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.once('open', () => {
  console.log('Connected to MongoDB');
});



// Middleware for parsing JSON
app.use(express.json());

app.use('/login', routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/
/*
const express = require('express');
const port = 5000;
const mongoose = require('mongoose');
const app = express();


const DATABASE_URL = "mongodb+srv://Sakshi:sakshi@cluster0.qrb24gu.mongodb.net"

app.use(express.json())
app.get('/',(req,res) =>{
  res.send('Hi there')
});


mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Create a Mongoose model for the shop data
const Shop = mongoose.model('Shop', {
  ShopName: String,
  OpeningTime: String,
  ClosingTime: String,
  Location: String,
});

// Route to fetch shop data
app.get('/editableshop', async (req, res) => {
  try {
    // Use Mongoose to retrieve all shops from the MongoDB collection
    const shops = await Shop.find();
    res.json(shops);
  } catch (error) {
    console.error('Error fetching shops:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port,() =>{
  console.log(`server is running at port no ${port}`);
})

*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });





const DATABASE_URL = "mongodb+srv://Sakshi:hello1234@cluster0.yja9rcu.mongodb.net/"



mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));

// Express middleware for file uploads
app.use(fileUpload());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {  

  console.log(req.path, req.method)

  next()

})

// Import and use your signup routes
const signup = require('./routes/signup');
app.use('/api/signup', signup);

 const contact = require('./routes/contact');
app.use('/api/contact', contact);

app.listen(5000,function check(error)
{
  if(error){
    console.log('Error....rr');
  }
  else{
    console.log('Started...!!!');
  }

});









