const express = require("express");
const logger  = require("morgan");
const favicon = require("serve-favicon");
const handlebars = require("express-handlebars");
const router  = require("./config/routes");
const sass  = require("node-sass-middleware");
const app = express();

const PORT = process.env.EXPRESS_PORT || 3000;

/********************* Bloco de Middlewares *********************/

// Invocando o Morgan
app.use(logger("short"));

// Chamando o middleware de tratamento de requisições POST
app.use(express.urlencoded({extended: false}));

// Invocando o SASS
app.use(sass({
	src: __dirname + "/public/scss",
	dest: __dirname + "/public/css",
	debug: true,
	outputStyle: "compressed",
	prefix: "/css"
}),
	express.static(__dirname + '/public')
);

// Invocando o Handlebars
app.engine("handlebars",handlebars({
	helpers: require(__dirname + "/app/views/helpers/string_helpers.js"),
	defaultLayout: "default"
}));
app.set("view engine","handlebars");
app.set("views", __dirname + "/app/views");

// Invocando o Bootstrap e suas dependências
app.use("/js",[
	express.static(__dirname + "/node_modules/jquery/dist"),
	express.static(__dirname + "/node_modules/popper.js/dist/umd"),
	express.static(__dirname + "/node_modules/bootstrap/dist/js"),
	express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/js"),
	express.static(__dirname + "/public/js")
]);

// Declarando o favicon
app.use(favicon(__dirname + '/public/img/favicon.ico'));

/********************* Bloco de Roteamento *********************/

app.use(router);

/********************* Bloco do Servidor *********************/

app.listen(PORT, function() {
	console.log(`:: Express App started at port ${PORT}...`);
});
