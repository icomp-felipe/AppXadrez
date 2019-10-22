const privacy = (req,res) => {

    res.render("pages/legal/privacy");

}

const terms = (req,res) => {

    res.render("pages/legal/terms");

}

module.exports = { privacy, terms }