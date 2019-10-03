// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando apenas o modelo 'curso'
const Curso  = models.curso;

// Página principal da modelagem de cursos
const index = async function(req, res) {

    // Buscando todos os cursos do banco de dados
    const cursos = await Curso.findAll();
    
    // Chamando a view e passando os dados do BD
    res.render("curso/index", { cursos });

}

const create = async function(req, res) {

    // Se a requisição for 'GET', mostro a página de cadastro
    if (req.route.methods.get)
        res.render("curso/create");

    // Senão, insiro os dados vindos via POST no banco de dados
    else {
        
        try {
            await Curso.create(req.body);
        }
        catch (exception) {
            console.log(exception);
        }
        res.redirect("/curso");
    }

}

const read = async function(req, res) {
    res.end(`:: Aqui vai ter um modal, um dia... ${req.params.id}`);
}

const update = async function(req, res) {
    var curso = await Curso.findByPk(req.params.id || req.body.id);

    // Se a requisição for 'GET', mostro a página de atualização
    if (req.route.methods.get) {


        res.render("curso/update", { curso });
    }
    
    else {

        curso.sigla     = req.body.sigla;
        curso.nome      = req.body.nome;
        curso.descricao = req.body.descricao;
        curso.id_area   = req.body.id_area;

        try {
            await curso.save();
            res.redirect("/curso");
        }
        catch (exception) {
            res.render("curso/update", { curso, e:exception.errors });
        }
        
    }

}

const remove = async function(req, res) {
    res.end(`:: Aqui vai ter um modal, um dia... ${req.params.id}`);
}

module.exports = {
	index, create, read, update, delete: remove
}