const express = require("express");
const router  = express.Router();

// Importando os controladores
const mainController     = require("../app/controllers/main");
const cursoController    = require("../app/controllers/curso");
const legalController    = require("../app/controllers/legal");
const entranceController = require("../app/controllers/entrance");
const testController     = require("../app/controllers/test");
const gameController     = require("../app/controllers/game");

// Controlador Main
router.get("/"     , mainController.index);
router.get("/sobre", mainController.about);
router.get("/ui"   , mainController.ui   );

// Controlador Game
router.get("/game"       , gameController.index  );
router.get("/game/:color", gameController.index  );
router.get("/partida"    , gameController.partida);
router.get("/ranking"    , gameController.ranking);

// Controlador Entrance
router.get ("/signup", entranceController.signup);
router.post("/signup", entranceController.signup);
router.get ("/login" , entranceController.login );
router.post("/login" , entranceController.login );
router.get ("/logout", entranceController.logout);

// Controlador Legal
router.get("/legal/terms"  , legalController.terms);
router.get("/legal/privacy", legalController.privacy);

// Controlador Test
router.get("/test/uuid"  , testController.uuid );
router.get("/test/socket", testController.socket );

// Controlador Curso
router.get ("/curso"           , cursoController.index );
router.get ("/curso/create"    , cursoController.create);
router.post("/curso/create"    , cursoController.create);
router.get ("/curso/update/:id", cursoController.update);
router.post("/curso/update"    , cursoController.update);
router.post("/curso/delete"    , cursoController.delete);

// Rota para a página 404
router.use(function(req, res) {
	res.statusCode = 404;
	res.render("pages/404", {layout: false});
});

module.exports = router;