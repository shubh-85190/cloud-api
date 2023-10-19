const express = require('express');
const router=express.Router();
const ordersSchema = require('../models/order.model');
const { addorder_c } = require('../controller/addorders.controller');


router.use(express.json());


router.post('/addorders',async (req,res)=>{
    const body=req.body;
    // console.log(body.name);
    const result = await addorder_c(body);
    console.log(result);
    if(result>0)
    {res.json({
        status:'success',
        error:false,
        Message:result
    });
}else{
    res.json({
        status:'success',
        error:true,
        Message:'Cannot place order right now. Error in Application.'
    });
}
})

module.exports=router;