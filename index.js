const express      = require("express");
const logger       = require("morgan");
const favicon      = require("serve-favicon");
const handlebars   = require("express-handlebars");
const router       = require("./config/routes");
const sass         = require("node-sass-middleware");
const cookieParser = require("cookie-parser");
const csrf         = require("csurf");
const uuid         = require("uuid/v4");
const session      = require("express-session");
const app          = express();
const bodyParser   = require('body-parser');

const PORT = process.env.EXPRESS_PORT || 3000;

/********************* Bloco de Middlewares *********************/

// Remove o 'X-Powered-By: Express' do cabeçalho HTTP
app.disable('x-powered-by');

app.use(bodyParser.json());

// Chamando o middleware de tratamento de requisições POST
app.use(express.urlencoded({extended: false}));

// Invocando o gerenciador de cookies
app.use(cookieParser());

// Invocando o CSRF
app.use(csrf({ cookie: true }));

// Gerenciador de sessão de usuário
app.use(session({
	genid: function (req) {
		return uuid();
	},
	secret: "5tgKm80a#",
	resave: true,
	saveUninitialized: true,
	name: "id.sessao"
}));

// Invocando o Morgan
app.use(logger("short"));

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
	layoutsDir: __dirname + "/app/views/layouts",
	defaultLayout: "default",
	helpers: require(__dirname + "/app/views/helpers/string_helpers.js")
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
