// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando os modelos utilizados nas views
const Partida  = models.partida;
const User = models.user;

const sequelize = require("sequelize");
const Op = sequelize.Op;

const index = function (req, res) {

    // Se o usuário está logado...
    if (req.session.uid) {

        // Verifico se ele já não escolheu a cor de sua peça
        if (!req.params.color)
            res.render("pages/game/choosecolor");
        
        // Senão inicio o jogo
        else
            res.render("pages/game/board", {
                color: req.params.color,
                partida: 1
            });

    }

    // Caso contrário, o redireciono pra página de login
    else
        res.redirect("/login");


}

const partida = function (req,res) {

    if (req.session.uid)
        res.render("pages/game/partida")
    else
        res.redirect("/login");

};

const ranking = async function(req, res) {

    if (req.session.uid) {

        // SELECT `partida`.`winner`, count(*) AS `num_vitorias`, `usuario`.`id` AS `usuario.id`, `usuario`.`nome` AS `usuario.nome`
        // FROM `partida` AS `partida`
        // LEFT OUTER JOIN `user` AS `usuario` ON `partida`.`winner` = `usuario`.`id`
        // GROUP BY `winner`
        // HAVING count(*) > 1
        // ORDER BY count(*) DESC;
        let ranking = await Partida.findAll({
            attributes: ['winner', [sequelize.fn('count', sequelize.col('*')), 'vitorias']],
            group: ['winner'],
            having: sequelize.where(sequelize.fn('count', sequelize.col('*')), {
                [Op.gt]: 1,
            }),
            order  : [[sequelize.fn('count', sequelize.col('*')), 'DESC']],
            include: [{model: User, as:'usuario', attributes:['nome']}]
        });

        res.render("pages/game/ranking", { ranking });

    }
    else
        res.redirect("/login");

};

module.exports = { index, partida, ranking };