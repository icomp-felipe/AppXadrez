// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando os modelos utilizados nas views
const Partida  = models.partida;
const User = models.user;

// Disponibilizando o sequelize
const sequelize = require("sequelize");
const Op = sequelize.Op;

const partida = function (req,res) {

    // Se o usuário está logado...
    if (req.session.uid) {

        // ...e este quer iniciar uma nova partida, o faço
        if (!req.params.partidaID) {
            res.render("pages/game/partida", {
                user   : req.session.uid,
                partida: 0   // o zero indica que é uma nova partida
            });
        }

        // ...e deseja retomar uma partida já existente
        else {

            res.render("pages/game/partida", {
                user   : req.session.uid,
                partida: req.params.partidaID
            });

        }


    }
    
    // ...senão, o redireciono pra página de login
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
                [Op.gt]: 1
            }),
            order  : [[sequelize.fn('count', sequelize.col('*')), 'DESC']],
            include: [{model: User, as:'usuario', attributes:['nome']}]
        });

        console.log(ranking[0]);

        res.render("pages/game/ranking", { ranking });

    }
    else
        res.redirect("/login");

};

module.exports = { partida, ranking };