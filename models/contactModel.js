var mongoose = require('mongoose');


var contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    message: String,
    created_at:
    {
            type:Date,
            default:Date.now
    }
});
module.exports = mongoose.model('Contact', contactSchema);