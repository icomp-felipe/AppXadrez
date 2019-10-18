// Disponibilizando os modelos para uso
const bcrypt = require("bcryptjs");
const uuid   = require("uuid/v4");
const models = require("../models/index");
const config = require("../../config/config.json");

// Disponibilizando os modelos utilizados nas views
const Curso = models.curso;
const User  = models.user ;

const index = (req, res) => {
    res.render("main/index");
}

const about = (req, res) => {
    res.render("main/about");
}

const ui = (req, res) => {
    res.render("main/ui");
}

const uuid_tester = (req, res) => {
    const uniqueID = uuid();
    res.render("main/uuid", { uuid: uniqueID });
}

const signup = async function (req, res) {

    const cursos = await Curso.findAll();

    if (req.route.methods.get)
        res.render("main/signup", { cursos, csrf: req.csrfToken() });

    else {

        bcrypt.genSalt(config.bcryptRound, function (err, salt) {
            bcrypt.hash(req.body.senha, salt, async (err, hash) => {
                try {
                    await User.create({
                        nome : req.body.nome,
                        email: req.body.email,
                        senha: hash,
                        id_curso: req.body.cursos
                    });
                    res.redirect("/");
                }
                catch (erros) {
                    console.log(erros);
                }
            });
        });
    }

}

const login = async function (req, res) {

    if (req.session.uid)
        res.redirect("/")

    else if (req.route.methods.get)
        res.render("main/login", { csrf: req.csrfToken() });
        
    else {

        try {

            const user = await User.findOne({ where: { email: req.body.email } });

            bcrypt.compare(req.body.senha, user.senha, (err, ok) => {
                if (ok) {
                    req.session.uid = user.id;
                    res.redirect("/");
                }
            });

        }
        catch (erros) {
            console.log(erros);
        }

    }

}

const logout = async function (req, res) {

    req.session.destroy(function (err) {
        
        if (err)
            return console.log(err);
        
        res.redirect("/");
    });

}

module.exports = { index, about, ui, signup, login, logout, uuid: uuid_tester }