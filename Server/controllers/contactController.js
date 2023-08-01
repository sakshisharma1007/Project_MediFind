const contactUser = require("../models/contact");
const { sendEmail } = require('../emailService');


const sendContactEmail = async(contactData) => {
    const { name, email, message, picture } = contactData;
    const emailSubject = 'Form Received from the ContactUs page of Website.';
    const emailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message} \n${picture}`;
    console.log(emailSubject, emailText);
    //  'sakshissarma0110@gmail.com' is the recipient of the contact form
    sendEmail('sakshissarma0110@gmail.com', emailSubject, emailText)
      .then(() => {
        console.log('Email sent successfully');
    
      })
      .catch((error) => {
        console.log(error);
      });
};


const contact_user = async(req,res)=>{
    console.log('Received data:', req.body);
    try{
        const base64Image = req.body.picture;
        const imageData = base64Image.split(';base64,').pop();

    // we will save it to a local file named "image.png" in the "public/userImages" folder
    const fs = require('fs');
    const path = require('path');

    const imageFileName = Date.now() + '.png';
    const imagePath = path.join(__dirname, '../public/userImages', imageFileName);
    fs.writeFileSync(imagePath, imageData, { encoding: 'base64' });

    const { name, email, message } = req.body;
    const usercon = new contactUser({
        name,
        email,
        message,
        picture: imageFileName, // Save the image filename to the database
      });
      const contactData = await usercon.save();


      console.log(contactData);
      console.log('image value:',usercon.picture);
     await sendContactEmail(contactData);

      res.status(200).send({ success: true, data: contactData });
      
    } catch (error) {
      res.status(400).send(error.message);
    };


    }

module.exports = {
    contact_user
    
}
