const login = (req, res) => {
    res.render('login');
}

const registerFunc = (req, res) => {
    res.render('register');
}

module.exports = {
    login,
    registerFunc
}