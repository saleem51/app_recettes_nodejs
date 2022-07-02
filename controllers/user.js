const login = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {

}

const registerFunc = (req, res) => {
    res.render('register');
}

const postRegister = (req, res) => {

}

module.exports = {
    login,
    registerFunc,
    postLogin,
    postRegister
}