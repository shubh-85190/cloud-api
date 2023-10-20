const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: { type: String, require: true },
    id: { type: Number, require: true },
    img: { type: String, require: true },
    category: { type: String, require: true },
    subcategory: { type: String, require: true },
    price: { type: Number, require: true },
    status: { type: Boolean, require: false, default: true },
});

module.exports = mongoose.model('items', itemsSchema);