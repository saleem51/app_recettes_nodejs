const Recette = require('../models/Recettes');
const mongoose = require('mongoose');
const schema = mongoose.schema;
const userSchema = require('../models/User');
//const userId = userSchema.findOne({ _id: ObjectId})
const fs = require('fs');

idUser = userSchema.ObjectId;


const postRecettes = async (req, res) => {
    const recette = await new Recette ({
        //userId : {  },
        //user : {type : pseudo, required: false, ref: userSchema.pseudo},
        titre : req.body.titre,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        ingredients: req.body.ingredients,
        preparation : req.body.preparation,
    });
    try{
        const recetteSaved = await recette.save();
        console.log(recetteSaved);
        await res.status(201).json({ message : 'Recette ajoutée avec succès !'})
        console.log('Recette ajoutée avec succès !')
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const modifyRecette =  async (req, res) => {
    try{
        if(req.file){
            await Recette.updateOne({ _id: req.params.id }, { ...req.body,
                imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                 _id: req.params.id});
            await res.status(200).json({ message :  'Recette modifié avec une nouvelle image !'});
            console.log('Recette modifié  avec succès avec nouvelle image !')
        } else {
            await Recette.updateOne({ _id: req.params.id }, { ...req.body,  _id: req.params.id});
            await res.status(200).json({ message : 'Recette modifié sans nouvelle image !'});
            console.log('Recette modifié  avec succès sans nouvelle image !')
        }
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}

const showRecettes = (req, res) => {
    Recette.find()
    .then(recette => {
       const recettes = recette;
        res.render('recettes', { recettes });
    })
    .catch(error => res.status(400).send(error));
}



const getFormRecettes = (req, res) => {
    res.render('postRecettes')
}

const getFormPutRecette = async (req, res) => {
    const oneRecette = await Recette.findOne({ _id: req.params.id });
    res.render('putRecettes', { oneRecette })
}

const getOneRecette = async (req, res) => {
    try{
        const oneRecette = await Recette.findOne({ _id: req.params.id })
        const getRecette = await oneRecette;
        await res.render('getOneRecette',  { getRecette })

    } catch ( error ) {
        console.log( error )
        res.status(400).json( error )
    }     
}

const deleteOneRecette  = async (req, res) => {
    try{ 
        const recette = await Recette.findOne({ _id: req.params.id })
        const recetteImg = recette.imageUrl;
        const filename = recetteImg.split('/images/')[1];
        fs.unlink(`images/${filename}`, async () => {
            await Recette.deleteOne({ _id: req.params.id })
            console.log('Recette supprimée avec succès !')
            await res.status(200).json({ message : 'Recette supprimé avec succès !'});
        });  
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




