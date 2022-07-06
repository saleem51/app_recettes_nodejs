const express = require('express');
const { login, registerFunc, postLogin, postRegister } = require('../controllers/user');
const router = express.Router();
const multer = require('../middleware/multer-config');


router.get('/login', login);
router.get('/register', registerFunc);
router.post('/post/register', multer, postRegister);
router.post('/post/login', postLogin );
//Put User;
//Delete User;

module.exports = router;