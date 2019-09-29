const index = (req,res) => {
    res.render("main/index");
}

const about = (req, res) => {
    res.render("main/about");
}

const ui = (req, res) => {
	res.render("main/ui");
}

module.exports = { index, about, ui }