const express = require("express");
const router  = express.Router();
const mainController  = require("../app/controllers/main");
const cursoController = require("../app/controllers/curso");

// Controlador Main
router.get("/",      mainController.index);
router.get("/about", mainController.about);
router.get("/ui",    mainController.ui   );
router.get("/uuid",  mainController.uuid );

router.get ("/signup", mainController.signup);
router.post("/signup", mainController.signup);
router.get ("/login" , mainController.login);
router.post("/login" , mainController.login);
router.get ("/logout", mainController.logout);

// Controlador Curso
router.get ("/curso",            cursoController.index );
router.get ("/curso/create",     cursoController.create);
router.post("/curso/create",     cursoController.create);
router.get ("/curso/update/:id", cursoController.update);
router.post("/curso/update"    , cursoController.update);
router.post("/curso/delete"    , cursoController.delete);

// Rota para a página 404
router.use(function(req, res) {
	res.statusCode = 404;
	res.render("main/404", {layout: false});
});

module.exports = router;