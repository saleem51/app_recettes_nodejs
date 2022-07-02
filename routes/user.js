const express = require('express');
const { login, registerFunc, postLogin, postRegister } = require('../controllers/user');
const router = express.Router();


router.get('/login', login);
router.post('/post/login', postLogin );
router.get('/register', registerFunc);
router.post('/post/register', postRegister);
//Put User;
//Delete User;

module.exports = router;