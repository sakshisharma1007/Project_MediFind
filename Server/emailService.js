const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EmailUsername,
        pass:process.env.EmailPassword,
    },
});

const sendEmail = (toEmail, subject,text) =>{
    const mailOptions = {
        from:process.env.EmailUsername,
        to:toEmail,
        subject:subject,
        text:text,
    };

    return new Promise((resolve,rejectt) =>{
        transporter.sendMail(mailOptions,(error,info) =>{
            if (error) {
                console.log(error);
                reject(error);
              } else {
                console.log('Email sent: ' + info.response);
                resolve(info);
              }
        });
    });

};

module.exports={sendEmail };