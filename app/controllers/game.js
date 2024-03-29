// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando os modelos utilizados nas views
const Partida  = models.partida;
const User = models.user;

// Disponibilizando o sequelize
const sequelize = require("sequelize");
const Op = sequelize.Op;

const partida = async function (req,res) {

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

            // Aqui recupero da partida os nomes dos jogadores
            let usuarios = await Partida.findByPk(req.params.partidaID, { 
                            include: [{model: User, as:'ownerPlayer'  , attributes:['nome']},
                                      {model: User, as:'invitedPlayer', attributes:['nome']}]
            });

            res.render("pages/game/partida", {
                user   : req.session.uid,
                partida: req.params.partidaID,
                owner  : usuarios.ownerPlayer,
                invited: usuarios.invitedPlayer
            });

        }


    }
    
    // ...senão, o redireciono pra página de login
    else
        res.redirect("/login");

};

const ranking = async function(req, res) {

    if (req.session.uid) {

        // SELECT `partida`.`winner`, count(*) AS `vitorias`, `usuario`.`id` AS `usuario.id`, `usuario`.`nome` AS `usuario.nome`
        // FROM `partida` AS `partida`
        // LEFT OUTER JOIN `user` AS `winnerPlayer` ON `partida`.`winner` = `winnerPlayer`.`id`
        // WHERE `partida`.`winner` IS NOT NULL
        // GROUP BY `winner`
        // HAVING count(*) > 1
        // ORDER BY count(*) DESC;
        let ranking = await Partida.findAll({
            attributes: ['winner', [sequelize.fn('count', sequelize.col('*')), 'vitorias']],
            group: ['winner'],
            where: { winner: { [Op.ne]: null } },
            having: sequelize.where(sequelize.fn('count', sequelize.col('*')), {
                [Op.gt]: 1
            }),
            order  : [[sequelize.fn('count', sequelize.col('*')), 'DESC']],
            include: [{model: User, as:'winnerPlayer', attributes:['nome']}]
        });

        console.log( ranking );

        res.render("pages/game/ranking", { ranking });

    }
    else
        res.redirect("/login");

};

module.exports = { partida, ranking };