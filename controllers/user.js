const User = require('../models/User');
const bcrypt = require('bcryptjs');
const fs = require('fs');


const registerFunc = (req, res) => {
    res.render('register');
}

const postRegister = async (req, res) => {
    const user = await new User ({
        nom: req.body.nom,
        pseudo : req.body.pseudo,
        email: req.body.email,
        password : req.body.password,
        password2: req.body.password2,
        //imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    if(req.body.password !== req.body.password2) {
        console.log('Les mots de passe ne sont pas identiques')
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, async (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user.password2 = hash;
                try {
                    const userSaved =  await user.save()
                    console.log(userSaved)
                    res.status(201).json({ message : 'Utilisateur crée avec succès'})
                    console.log('Utilisateur crée avec succès !')
                } catch (error) {
                    res.status(400).json({ messsage : 'L\'utilisateur n\'a pas pu être crée !'})
                    console.log(error)
                }
            })
        })  
    } 
}

const login = async (req, res) => {
   res.render('login')
}

const postLogin = async (req, res) => {
    try{
        const mail = await req.body.email
        const userLogged = await User.findOne({email : mail})
        //const userPass = await User.findOne({ password : req.password})
        const user = await userLogged;
        // bcrypt.compare(req.body.password, userPass, async () => {
            await res.render('dashboard' , { user })
            // console.log('Password et hash identiques')
            // }
        // })
        // if(mail !== user.email || user.email === null || undefined) {
        //     res.send("L'email renseigné n'existe pas !")
        // } else {      
       
    } catch ( error ) {
        // if(mail !== user.email || user.email === null || undefined) {
        //     res.send("L'email renseigné n'existe pas !")
        // }
        console.log( error )
        res.status(400).json( error )
    }     
}


module.exports = {
    login,
    registerFunc,
    postLogin,
    postRegister
}