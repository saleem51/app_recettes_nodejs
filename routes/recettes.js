const express = require('express');
const { findRecettes, postRecettes, showRecettes, getFormRecettes } = require('../controllers/recettes');
const router = express.Router();


router.get('/recettes', findRecettes);
router.get('/', showRecettes);
router.post('/recette/post', postRecettes);
router.get('/recette/post', getFormRecettes);

module.exports = router;