const express = require('express');
const { login, registerFunc } = require('../controllers/user');
const router = express.Router();


router.get('/login', login);
router.get('/register', registerFunc);



module.exports = router;