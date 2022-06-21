const express = require('express');
const { getRecettes, postRecettes } = require('../controllers/recettes');
const router = express.Router();


router.get('/', getRecettes);
router.post('/recette/post', postRecettes);

module.exports = router;