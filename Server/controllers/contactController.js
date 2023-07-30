const contactUser = require("../models/contact");

const contact_user = async(req,res)=>{
    console.log('Received data:', req.body);

    try {
        const usercon = new contactUser({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message,
            picture:req.file.filename

        });
        const contactData = await usercon.save();
        
        res.status(200).send({success:true,data:contactData})
    
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    contact_user
}