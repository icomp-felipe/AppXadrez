// Importando bibliotecas
const uuid = require("uuid/v4");

const uuid_tester = (req, res) => {
    const uniqueID = uuid();
    res.render("pages/test/uuid", { uuid: uniqueID });
}

const socket = (req, res) => {
    res.render("pages/test/socket");
}

module.exports = { uuid: uuid_tester, socket }