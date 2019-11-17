// Disponibilizando os modelos para uso
const models    = require("../models/index");

// Disponibilizando o sequelize para uso de funções avançadas no 'index'
const sequelize = require("sequelize");
const Op = sequelize.Op;

// Disponibilizando os modelos utilizados nas views
const Partida  = models.partida;

const index = async (req, res) => {

    // Se o usuário está logado, sua página inicial é a lista de partidas
    if (req.session.uid) {

        // Recupera todas as partidas que o usuário criou
        let partidasUsuario = await Partida.findAll({
            where: { user_id_1: req.session.uid }
        });

        // Recupera todas as partidas criadas por outros usuários e que estão aguardando oponentes
        let partidasLivres = await Partida.findAll({
            where: { user_id_1: { [Op.ne]: req.session.uid },
                     user_id_2: { [Op.is]: null} }
        });

        // Renderizando a view
        res.render("pages/homepage-logged", { partidasUsuario, partidasLivres });
    }
    else
        res.render("pages/homepage");
}

const about = (req, res) => {
    res.render("pages/about");
}

const ui = (req, res) => {
    res.render("pages/ui");
}

module.exports = { index, about, ui }