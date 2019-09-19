var express = require("express");
var app = express();

app.use('/img', [
	express.static(__dirname + '/public/img')
]);

app.use(function(req, res) {
	res.end("Acesse o arquivo /img/codebench.png");
});

app.listen(3000, function() {
	console.log("Express app iniciada na porta 3000.");
});
