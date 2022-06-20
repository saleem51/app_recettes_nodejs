const mongoose = require('mongoose');

const recetteSchema = mongoose.Schema({

    titre: {
        type: String,
        required : true
    },
    imageUrl: {
        type: String,
        required: true
    },
    ingrédients: {
        type: String,
        required: true
    },
    Préparation: {
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


module.exports = recetteSchema;