
// const express = require('express');
// const router = express.Router();
// const contactDetails = require('../models/contact');
// // const multer = require('multer');
// // const path = require('path');


// // // Multer configuration to handle file uploads
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// //     const extname = path.extname(file.originalname);
// //     cb(null, file.fieldname + '-' + uniqueSuffix + extname);
// //   },
// // });

// // const fileFilter = (req, file, cb) => {
// //   const allowedFileTypes = /jpeg|jpg|png/;
// //   const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
// //   const mimetype = allowedFileTypes.test(file.mimetype);
// //   if (extname && mimetype) {
// //     return cb(null, true);
// //   } else {
// //     cb('Error: Images Only!');
// //   }
// // };

// // const upload = multer({ 
// //   storage: storage,
// //   fileFilter: fileFilter
// // });



// //  route
// router.post('/',(req, res) => {
//   const { name, email, message} = req.body;
//   const picture = req.file ? req.file.path : '';

//   const contact = new contactDetails({
//     name,
//     email,
//     message,
//     picture
//   });

//   contact.save()
//     .then(() => {
//       res.status(201).json({ message: 'Data added successfully' });
   
//     })
//     .catch((err) => {
//       res.status(500).json({ error: 'Error adding data.' });
//     });
// });

// module.exports = router;


const express = require('express');
const contact_route = express.Router();

const bodyParser = require('body-parser');
contact_route.use(bodyParser.json());
contact_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require('path');

contact_route.use(express.static('public'));

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,path.join(__dirname,'../public/userImages'),function(error,success){
      if(error) throw error
    });
  },
  filename:function(req,file,cb){
    const image = Date.now()+'-'+file.originalname;
    cb(null,image,function(error1,success1){
      if(error1) throw error1
    })
  }
});

const upload = multer({storage:storage});


const contactController = require("../controllers/contactController");

contact_route.post('/contact',upload.single('picture'),contactController.contact_user);

module.exports = contact_route;
