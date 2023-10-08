
const express = require("express");
const router = express.Router();
// const {getToken}=require('./token');
const token=require('../controller/token');
router.use(express.json());

const dbconnect=require('../DbConnection/dbconnection');


router.post('/adduser',async (req,res)=>{
    const data=req.body;
    if(!data.email || data.email=='')
    {
        res.json({
            error:true,
            message:"Invalid Email Address Provided."
        });
        return;
    }
    if(!data.name || data.name=='')
    {
        res.json({
            error:true,
            message:"Invalid Name, Please enter valid name."
        });
        return;
    }
    if(!data.password || data.password=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Password."
        });
        return;
    }
    if(!data.mobile || data.mobile=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Mobile Number."
        });
        return;
    }
    if(!data.address || data.address=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Address."
        });
        return;
    }
    const result = await dbconnect.insertUser(data);
    if(result)
    {
        var message = await token.getToken(data);
        console.log(`Message : ${message}`);
        res.json({
            error:false,
            message: message
        });
    }
    else{
        res.json({
            error:true,
            message:'Error in creating user'
        });
        return;
    }
})

router.post('/')

module.exports = router;