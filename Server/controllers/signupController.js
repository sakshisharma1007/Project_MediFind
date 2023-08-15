const User = require('../models/signup');
const bcrypt = require('bcrypt');
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const create_token = async(id)=>{
    try{
        const token = await jwt.sign({_id:id},config.secret_jwt);
        return token;

    }
    catch(error){
        res.status(400).send(error.message);
    }
}


const securePassword  = async(psw)=>{
    try{
        const pswHash = await bcrypt.hash(psw,10);
        //console.log("Hashed Password:",pswHash);
        return pswHash;

    }catch(error){
        res.status(400).send(error.message);
    }
}

const sign_user = async(req,res) => {
    //console.log('Received data:', req.body);

    

    try{
        const spassword = await securePassword(req.body.psw);
        //console.log('Received Passwoed:',spassword);
        const user = new User({
            usname:req.body.usname,
            psw:spassword,
            
        });
            const user_data = await user.save();
            res.status(200).send({success:true,data:user_data});
    

    } catch(error){
        res.status(400).send(error.message);
        
    }
}

//LOGIN METHOD

const login_user = async(req,res) =>{
    try{

        const usname = req.body.usname;
        const psw = req.body.psw;

        const userData = await User.findOne({ usname:usname });
        if(userData){
            const passwordMatch = await bcrypt.compare(psw,userData.psw);
            if(passwordMatch){
                const tokenData = await create_token(userData._id);
                //making changes from here
                res.setHeader('Authorization', 'Bearer ' + tokenData);


                //
                const userResult = {
                    _id:userData._id,
                    usname:userData.usname,
                    psw:userData.psw,
                    token:tokenData
                }
                const response = {
                    success:true,
                    msg:"User Details",
                    data:userResult
                }
                res.status(200).send(response);
                console.log(response);
                 

            }else{
                res.status(200).send({success:false,msg:"Login details are incorrect"});
            }

        }
        else{
            res.status(200).send({success:false,msg:"Login details are incorrect"});
        }


    }catch(error){
        res.status(400).send(error.message);
    }

}

module.exports = {
    sign_user,
    login_user

}