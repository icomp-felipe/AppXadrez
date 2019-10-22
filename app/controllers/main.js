// Disponibilizando os modelos para uso
const bcrypt = require("bcryptjs");
const uuid   = require("uuid/v4");

const index = (req, res) => {
    res.render("pages/index");
}

const about = (req, res) => {
    res.render("pages/about");
}

const ui = (req, res) => {
    res.render("main/ui");
}

const uuid_tester = (req, res) => {
    const uniqueID = uuid();
    res.render("main/uuid", { uuid: uniqueID });
}

module.exports = { index, about, ui, uuid: uuid_tester }