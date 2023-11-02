const express = require("express");
const router = express.Router();
const userController=require('../controller/userController');
const token_c=require('../controller/token');
router.use(express.json());
const ordersSchema = require('../models/order.model');

// router.post('/login',async (req,res)=>{
//     const data=req.body;
//     if(data.email=='shubh85190@gmail.com' && data.password=='Shubh@85190'){
//         const token=await token_c.getToken({email:'shubh85190@gmail.com',password:'Shubh@85190'});
//         res.json({
//             error:false,
//             status:'success',
//             message:token
//         });
//     }
//     else{
//         res.json({
//             error:true,
//             status:'success',
//             message:'Invalid user password'
//         })
//     }
// })


router.get('/getorders',async (req,res)=>{
    const orders = await ordersSchema.find({"order.status":"NEW"}).sort({'createdAt':-1});
    console.log(orders);
    res.json({
        status:'success',
        error:false,
        message:orders
    })
})

router.get('/changeorderstatus',async (req,res)=>{
    const data = req.body;
    const result = await ordersSchema.updateOne({id:data.id},data);
    console.log(result);
    res.json({
        status:'success',
        error:false,
        message:'Item updated successfully.',
        result:result
    })
})

module.exports=router;