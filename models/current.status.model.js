const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Status = require('./kitchen_Status');

const currentstatusSchema = new Schema({
    status:{type:String,require:true,default:Status.open},
    username:{type:String,require:true}
},
{
    timestamps:true
});

module.exports = mongoose.model('currentstatuses',currentstatusSchema);