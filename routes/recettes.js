const express = require('express');
const { postRecettes, 
        showRecettes, 
        getFormRecettes, 
        modifyRecette, 
        getFormPutRecette, 
        getOneRecette,
        deleteOneRecette,
    } = require('../controllers/recettes');
const router = express.Router();
const multer = require('../middleware/multer-config');


router.get('/', showRecettes);
router.get('/recette/post', getFormRecettes);
router.get('/recette/:id', getOneRecette)
router.get('/put/recette/:id', getFormPutRecette);
router.post('/recette/post', multer, postRecettes);
router.post('/put/recette/:id', multer, modifyRecette);
router.post('/delete/recette/:id', deleteOneRecette);

module.exports = router;