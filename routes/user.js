const express = require('express');
const { logIn } = require('../controllers/user');
const router = express.Router();


router.get('/', logIn);



module.exports = router;