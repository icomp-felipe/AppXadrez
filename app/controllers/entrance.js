// Disponibilizando os modelos e configurações para uso
const models = require("../models/index");
const config = require("../../config/config.json");
const bcrypt = require("bcryptjs");

// Disponibilizando os modelos utilizados nas views
const Curso = models.curso;
const User  = models.user ;

const signup = async function (req, res) {

    const cursos = await Curso.findAll();

    if (req.route.methods.get)
        res.render("pages/entrance/signup", { cursos, csrf: req.csrfToken() });

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
                    res.render("pages/entrance/signup", {
                        cursos,
                        csrf: req.csrfToken(),
                        user: req.body,
                        errors: erros.errors
                    });
                }
            });
        });
    }

}

const login = async function (req, res) {

    if (req.session.uid)
        res.redirect("/")

    else if (req.route.methods.get)
        res.render("pages/entrance/login", { csrf: req.csrfToken() });
        
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

module.exports = { signup, login, logout }