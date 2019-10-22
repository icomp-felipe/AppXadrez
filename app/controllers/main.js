const index = (req, res) => {
    res.render("pages/homepage");
}

const about = (req, res) => {
    res.render("pages/about");
}

const ui = (req, res) => {
    res.render("pages/ui");
}

module.exports = { index, about, ui }