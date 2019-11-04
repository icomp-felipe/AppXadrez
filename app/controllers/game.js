const index = function (req, res) {

    if (!req.params.color)
        res.render("pages/game/choosecolor");
    else
        res.render("pages/game/board", {
            color: req.params.color,
            partida: 1
        });

}

module.exports = { index };