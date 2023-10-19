const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    address:String,
    mobile:String,
    isAdmin:Boolean,
    pincode:String,
    

});

module.exports = mongoose.model('User', userSchema);