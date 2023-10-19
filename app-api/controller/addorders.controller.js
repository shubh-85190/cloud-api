const ordersSchema=require('../models/order.model');


exports.addorder_c = async (body)=>{
try{
    const recordCount = await ordersSchema.find().sort({orderid:-1}).limit(1);
    console.log('Record Count : '+recordCount[0].orderid);
    const orderid = recordCount[0].orderid + 1;
    body.orderid = orderid;
    console.log(body);
    const result = await ordersSchema.create(body);
    return orderid;
}catch{
    return 0;
}
}