const jwt = require("jsonwebtoken");
var express = require('express');
var router = express.Router();
require('dotenv').config();

const secretKey=process.env.SECRET_KEY;

router.post('/login',(request,response)=>{
    var user={
        name : "shubh85190@gmail.com",
        password:"Shubh@85190"
    }
    const validuser=true;
    if(validuser==true)
    {
        jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
            if(err) response.json({
                error:true,
                message:"Token creation failed"
            });
            response.json({
                error:false,
                user,
                token
            });
        });
    }
});

router.post('/verify',(req,res)=>{
    if(!req.headers['authorization'])
    {
        // console.log("Inside If condition......");
        res.json({
            error:true,
            message:'token is not available in request'
        });
        return;
    }
    else{
    const authorization=req.headers['authorization'];
    const token=authorization.split(' ')[1];
    jwt.verify(token,secretKey,(err,authData)=>{
        if(err) 
        {
            res.json({
            err,
            status:'error',
            error:true,
            message:"Token Verification failed"
        });
        return;
    }   
    else{

        res.json({
            status:'success',
            error:false,
            message:'token verification successfull',
            authData
        });}
    })
}
});

exports.getToken = async (user)=>{
    return jwt.sign({user},secretKey,{expiresIn:'600s'},(err,tokenData)=>{
        if(err){
            return null
        }
        return tokenData;
    })
}

// exports = {getToken};
module.exports = router;