const index = (req, res) => {

    if (req.session.uid)
        res.render("pages/homepage-logged");
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