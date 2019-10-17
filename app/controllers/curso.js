// Disponibilizando os modelos para uso
const models = require("../models/index");

// Disponibilizando os modelos utilizados nas views
const Curso  = models.curso;
const Area   = models.area;

// Página principal da modelagem de cursos
const index = async function(req, res) {

    // Buscando todos os cursos do banco de dados
    const cursos = await Curso.findAll();
    
    // Chamando a view e passando os dados do BD
    res.render("curso/index", { cursos });

}

const create = async function(req, res) {

    // Se a requisição for 'GET', mostro a página de cadastro
    if (req.route.methods.get) {

        let areas = await Area.findAll();
        res.render("curso/create", { areas, csrf: req.csrfToken() });

    }

    // Senão, insiro os dados vindos via POST no banco de dados
    else {
        
        try {
            await Curso.create(req.body);
            res.redirect("/curso");
        }
        catch (exception) {
            console.log(exception);
        }
        
    }

}

const read = async function(req, res) {
    res.end(`:: Aqui vai ter um modal, um dia... ID: ${req.params.id}`);
}

const update = async function(req, res) {

    // Aqui recupero o curso identificado pelo ID na URL ou no form do POST + todas as áreas de curso
    let curso = await Curso.findByPk(req.params.id || req.body.id);
    let areas = await Area.findAll();

    // Se a requisição for 'GET', mostro a página de atualização
    if (req.route.methods.get)
        res.render("curso/update", { curso, areas, csrf: req.csrfToken() });
    
    // Caso a requisição seja 'POST'...
    else {

        // ...atualizo meu objeto curso com os dados vindos da view e...
        curso.sigla     = req.body.sigla;
        curso.nome      = req.body.nome;
        curso.descricao = req.body.descricao;
        curso.id_area   = req.body.id_area;

        // ...tento atualizar os dados no banco.
        try {
            
            await curso.save();
            res.redirect("/curso");

        }

        // Caso dê algum erro, indico na view
        catch (exception) {

            res.render("curso/update", { curso, erros: exception.errors });

        }
        
    }

}

const remove = async function(req, res) {
    res.end(`:: Aqui vai ter um modal, um dia... ${req.params.id}`);
}

module.exports = {
	index, create, read, update, delete: remove
}