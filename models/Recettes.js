const mongoose = require('mongoose');

const recetteSchema = mongoose.Schema({

    titre: {
        type: String,
        required : true
    },
    ingredients: {
        type: String,
        required: true
    },
    preparation: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : Date.now()
    }
})


module.exports = mongoose.model('Recettes',recetteSchema );