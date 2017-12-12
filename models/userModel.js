const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    username : String,
    password : String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users',userSchema);