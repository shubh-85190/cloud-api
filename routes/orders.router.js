const express = require('express');
const router=express.Router();
const ordersSchema = require('../models/order.model');
const OrdersStatus = require('../models/order_status');
const itemsSchema = require('../models/items.model');
// const { addorder_c } = require('../controller/addorders.controller');


router.use(express.json());

router.post('/addanonymousorder',async (req,res)=>{
    let body = req.body;
    let haserror=false;
    if(!body.user.name || !body.user.mobile || !body.user.address || !body.user.pincode){
        haserror=true;
    }
    if(!body.order.items){
        haserror=true
    }
    if(haserror){
        res.json({
            status:'success',
            error:true,
            message:'Invalid data provided.'
        })
        return;
    }
    const count = await ordersSchema.countDocuments();
    body.order['status'] = OrdersStatus.NEW;
    body.order['orderid'] = count+1;
    body.order['totalamount']=await calculateAmount(body.order.items);
    // console.log(JSON.stringify(body));
    const result = await ordersSchema.create(body);
    // const result=true;
    console.log(result);
    if(result)
    {res.json({
        status:'success',
        error:false,
        message:result,
        orderid:body.order.orderid
    });
}
else{
    res.json({
        status:'success',
        error:true,
        message:'Cannot place order right now. Error in Application.'
    });
}
})

async function calculateAmount(arr){
    let amount=0;
    let ids=[]; 
    arr.forEach(element => {
        ids.push(element.itemid);
    });
    // console.log(ids);
    const items = await itemsSchema.find({id:{$in:ids}});
    // console.log(items);
    arr.forEach(i=>{
        items.forEach(item=>{
            if(item.id==i.itemid)
            {
                amount = item.price * i.quantity + amount;
                // console.log(amount);
            }
        })
    })
    // console.log(amount);
    return amount;
}


// router.post('/addorders',async (req,res)=>{
//     const body=req.body;
//     // console.log(body.name);
//     const result = await addorder_c(body);
//     console.log(result);
//     if(result>0)
//     {res.json({
//         status:'success',
//         error:false,
//         Message:result
//     });
// }
// else{
//     res.json({
//         status:'success',
//         error:true,
//         Message:'Cannot place order right now. Error in Application.'
//     });
// }
// })

module.exports=router;