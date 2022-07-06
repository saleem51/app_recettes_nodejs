const mongoose = require('mongoose');
const uniqueValid = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    },
    // imageUrl: {
    //     type: String,
    //     required: false
    // }
})

userSchema.plugin(uniqueValid);

module.exports = mongoose.model('User', userSchema);