const getRecettes = (req, res) => {
    res.render('recettes');
}

const postRecettes = (req, res) => {
    console.log(req.body.inputUser);
    console.log(req.body.inputTitle);
    console.log(req.body.ingredients);
    console.log(req.body.preparation);

    res.send('Réussi');
}

module.exports = {
    getRecettes,
    postRecettes,
}