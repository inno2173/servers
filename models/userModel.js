var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        fullName: String,
        email: String,
        username: String,
        password: String,
        type: String,
        phoneNumber: Number,
        created_at:
        {
          type:Date,
          default:Date.now
        }
});
module.exports = mongoose.model('User', userSchema);