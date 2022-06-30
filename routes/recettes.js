const express = require('express');
const {postRecettes, showRecettes, getFormRecettes, modifyRecette, getFormPutRecette } = require('../controllers/recettes');
const router = express.Router();
const multer = require('../middleware/multer-config');


// router.get('/', findRecettes);
router.get('/', showRecettes);
router.post('/recette/post', multer, postRecettes);
router.get(`/recette/put/:id`, getFormPutRecette);
router.put('/recette/put/:id', multer, modifyRecette);
router.get('/recette/post', getFormRecettes);

module.exports = router;