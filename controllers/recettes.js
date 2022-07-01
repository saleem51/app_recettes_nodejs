const Recette = require('../models/Recettes');
let recettes;

const postRecettes = async (req, res) => {
    const recette = await new Recette ({
        titre : req.body.titre,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        ingredients: req.body.ingredients,
        preparation : req.body.preparation,
        user: req.body.user
    });
    try{
        const recetteSaved = await recette.save();
        //console.log(recetteSaved);
        res.send(recetteSaved)
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const modifyRecette =  async (req, res) => {
    const recette = await Recette.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id });
    try{
        const recetteUpdated = await recette.save();
        console.log(recetteUpdated);
        res.send(recetteUpdated);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }

}

const showRecettes = (req, res) => {
    Recette.find()
    .then(recette => {
        recettes = recette;
        res.render('recettes', { recettes });
    })
    .catch(error => res.status(400).send(error));
}



const getFormRecettes = (req, res) => {
    res.render('postRecettes')
}

const getFormPutRecette = (req, res) => {
    res.render('putRecettes', { recettes })
}

const getOneRecette = async (req, res) => {
    try{
        const oneRecette = await Recette.findOne({ _id: req.params.id })
        const getRecette = await oneRecette;
        res.render('getOneRecette',  { getRecette })

    } catch ( error ) {
        console.log( error )
        res.status(400).json( error )
    }     
}

const deleteOneRecette  = async (req, res) => {
    try{ 
        await Recette.deleteOne({ _id: req.params.id })
        console.log('Recette supprimée avec succès !')
        await res.render('recettes');
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}


module.exports = {
    postRecettes,
    showRecettes,
    getFormRecettes,
    modifyRecette,
    getFormPutRecette,
    getOneRecette,
    deleteOneRecette,
  
}