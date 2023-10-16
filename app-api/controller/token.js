const jwt = require("jsonwebtoken");
const getenv=require('../getenv');

const secretKey=getenv.SECRET_KEY;

exports.getToken = async (data)=>{
    console.log('token creation called.......');
    return new Promise((resolve,reject)=>{
    jwt.sign({data},secretKey,{expiresIn:'600s'},(err,token)=>{
        if(err) 
        {
            console.log(`Error in token Creation ${err}`);
            reject(err);
        }
        else{
            resolve(token);
    }

    });})
}

exports.verifyToken = async (token)=>{
    console.log('verifying token');
    return new Promise((resolve,reject)=>{
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
    })
}