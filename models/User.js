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
    imgProfil: {
        type: String,
        required: true
    }
})