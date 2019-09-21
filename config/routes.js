const express = require("express");
const router  = express.Router();
const mainController = require("../app/controllers/main");

router.get("/", mainController.index);
router.get("/about", mainController.about);

router.get("/welcome/:name", function(req, res) {
	res.end("Welcome " + req.params.name + "!");
})

router.use(function(req, res) {
	res.statusCode = 404;
	res.end("404");
});

module.exports = router;