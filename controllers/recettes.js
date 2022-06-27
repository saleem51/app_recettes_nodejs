const Recette = require('../models/Recettes');
const ejs = require('ejs');



const postRecettes = async (req, res) => {
    const recette = await new Recette ({
        titre : req.body.titre,
        ingredients: req.body.ingredients,
        preparation : req.body.preparation,
        user: req.body.user
    });
    try{
        const recetteSaved = await recette.save();
        console.log(recetteSaved);
        res.send(recetteSaved)
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const findRecettes = (req, res) => {
     Recette.find()
            .then(recette => res.status(200).send(recette))
            .catch(error => res.status(400).send(error));
}

const showRecettes = (req, res) => {
    res.render('recettes');
}

const getFormRecettes = (req, res) => {
    res.render('postRecettes')
}



module.exports = {
    findRecettes,
    postRecettes,
    showRecettes,
    getFormRecettes
}