// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando apenas o modelo 'curso'
const Curso  = models.curso;

const index = async function(req, res) {

    // Buscando todos os cursos do banco de dados
    const cursos = await Curso.findAll();
    
    // Chamando a view e passando os dados do BD
    res.render("curso/index", cursos);

}

const create = async function(req, res) {

    // Se a requisição for 'GET', mostro a página de cadastro
    if (req.route.methods.get)
        res.render("curso/create");

    // Senão, insiro os dados vindos via POST no banco de dados
    else {
        console.log(req.body);
        /*try {
            await Curso.create(req.body);
        }
        catch (exception) {
            console.log(exception);
        }
        res.redirect("/curso");*/
    }

}

const read = async function(req, res) {
	
}

const update = async function(req, res) {
	
}

const remove = async function(req, res) {

}

module.exports = {
	index, create, read, update, delete: remove
}