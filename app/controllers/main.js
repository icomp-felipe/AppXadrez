const index = (req,res) => {

    const content = "App main page";
    res.render("main/index", {
        content: content
    })

}

const about = (req, res) => {

    const content = "About page";
    res.render("main/about", {
        content: content
    })
}

const ui = (req, res) => {
	res.render("main/ui");
}

module.exports = { index, about, ui }