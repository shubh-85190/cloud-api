const jwt = require("jsonwebtoken");
require('dotenv').config();

const secretKey=process.env.SECRET_KEY;


exports.verifyToken = async (req)=>{
    if(!req.header('Authorization'))
    {
        console.log("Inside If condition......");
        return false;
    }
    else{
    const authorization=req.header('Authorization');
    // console.log(`VARIABLE : ${authorization}`);
    const token=authorization.split(' ')[1];
    // console.log(`TOKEN : ${token}`);
    try{
    const authstatus = await jwt.verify(token,secretKey);
    console.log('Token is valid');
    return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
}

exports.getToken = async (user)=>{
    return jwt.sign({user},secretKey,{expiresIn:'600s'},(err,tokenData)=>{
        if(err){
            return null
        }
        return tokenData;
    })
}