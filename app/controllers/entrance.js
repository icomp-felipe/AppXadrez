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
                        curso_id: req.body.cursos
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

    // Se o usuário está logado, não tem pq fazer login novamente
    if (req.session.uid)
        res.redirect("/");

    // Caso contrário, mostro a página de login
    else if (req.route.methods.get)
        res.render("pages/entrance/login", { csrf: req.csrfToken() });
    
    // Aqui faço o login
    else {

        try {

            // Buscando o usuário no banco de dados
            const user = await User.findOne({ where: { email: req.body.email } });

            bcrypt.compare(req.body.senha, user.senha, (err, ok) => {
                if (ok) {
                    req.session.uid = user.id;
                    req.session.username = user.nome;
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

    // Faz logou apenas se o usuário está logado
    if (req.session.uid) {

        req.session.destroy((err) => {
            if (err)
                return console.log(err);
        });

    }

    // De qualquer forma, o redireciona para a página inicial
    res.redirect("/");

}

module.exports = { signup, login, logout }