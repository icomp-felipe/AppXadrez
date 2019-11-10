const privacy = (req,res) => {

    res.render("pages/legal/privacy");

}

const terms = (req,res) => {

    res.render("pages/legal/terms");

}

const cookies = (req,res) => {

    res.render("pages/legal/cookies");

}

module.exports = { privacy, terms, cookies }