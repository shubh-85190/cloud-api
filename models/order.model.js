const mongoose = require('mongoose');
const OrdersStatus = require('./order_status');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    orderid : {type:Number, required:true},
    name: { type: String, require: false },
    address: { type: String, require: true },
    mobile: { type: Number, require: false },
    pincode: { type: Number, require: true },
    email: { type: String, require: false },
    items: { type: [], require: true },
    totalamount: { type: Number, require: true },
    coupon: { type: String, require: false},
    deliveryCharge: { type: Number, require: true, default: 0 },
    Status: { type: String, require: true, default: OrdersStatus.NEW },
    taxes: {type:Number,require:true, default:0},
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Orders', ordersSchema);