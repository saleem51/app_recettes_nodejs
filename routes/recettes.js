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
router.get('/recette/put/:id', getFormPutRecette);
router.post('/recette/post', multer, postRecettes);
router.put('/recette/put/:id', multer, modifyRecette);
router.post('/delete/recette/:id', deleteOneRecette);

module.exports = router;