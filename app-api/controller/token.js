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