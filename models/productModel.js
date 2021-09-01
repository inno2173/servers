var mongoose = require('mongoose');


var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    imageUrl: String,
    quantity: Number,
    description: String,
    category: String,
    created_at:
    {
        type:Date,
        default:Date.Now,
    }
});

module.exports = mongoose.model('Product', productSchema);