const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String,require:true},
    email: {type:String,require:true},
    password: {type:String,require:true},
    address:{type:String,require:true},
    mobile:{type:String,require:true},
    // isAdmin:{type:boolean,require:true},
    pincode:{type:Number,require:true}
});

module.exports = mongoose.model('User', userSchema);