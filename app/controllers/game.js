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

const ranking = function(req, res) {

    if (req.session.uid)
        res.render("pages/game/ranking")
    else
        res.redirect("/login");

};

module.exports = { index, partida, ranking };