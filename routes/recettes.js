const express = require('express');
const {postRecettes, showRecettes, getFormRecettes } = require('../controllers/recettes');
const router = express.Router();
const multer = require('../middleware/multer-config');


// router.get('/', findRecettes);
router.get('/', showRecettes);
router.post('/recette/post', multer, postRecettes);
router.get('/recette/post', getFormRecettes);

module.exports = router;